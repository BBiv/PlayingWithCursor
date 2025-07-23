import React, { useState } from 'react';
import { todoTasksForCalendar } from './ToDo';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year, month) {
  return new Date(year, month, 1).getDay();
}

function formatDateKey(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

function Calendar() {
  const [year] = useState(2025);
  const [month, setMonth] = useState(0);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [addEventOpen, setAddEventOpen] = useState(false);
  const [eventDay, setEventDay] = useState(null);
  const [events, setEvents] = useState({}); // { '2025-01-01': [event, ...] }
  const [viewDay, setViewDay] = useState(null);

  // Event form state
  const [eventTitle, setEventTitle] = useState('');
  const [eventStart, setEventStart] = useState('');
  const [eventEnd, setEventEnd] = useState('');

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfWeek(year, month);

  // Build calendar grid
  const weeks = [];
  let currentDay = 1 - firstDay;
  for (let w = 0; w < 6; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      if (currentDay > 0 && currentDay <= daysInMonth) {
        week.push(currentDay);
      } else {
        week.push('');
      }
      currentDay++;
    }
    weeks.push(week);
    if (currentDay > daysInMonth) break;
  }

  // Find if a day has events (including ToDo tasks)
  function hasEvent(day) {
    const key = formatDateKey(year, month, day);
    const todoEvents = todoTasksForCalendar.filter(
      t => !t.completed && t.due === key
    );
    return (events[key] && events[key].length > 0) || todoEvents.length > 0;
  }

  // Get events for a day (including ToDo tasks)
  function getEvents(day) {
    const key = formatDateKey(year, month, day);
    const calendarEvents = events[key] || [];
    const todoEvents = todoTasksForCalendar.filter(
      t => !t.completed && t.due === key
    ).map(t => ({
      title: t.title,
      start: t.due,
      end: t.due,
      isTask: true,
      priority: t.priority
    }));
    return [...calendarEvents, ...todoEvents];
  }

  // Add event logic (unchanged)
  function handleAddEvent(e) {
    e.preventDefault();
    if (!eventTitle || !eventStart || !eventEnd) return;
    const start = new Date(eventStart);
    const end = new Date(eventEnd);
    if (isNaN(start) || isNaN(end) || end < start) return;
    // Add event to all days it covers
    const newEvents = { ...events };
    let d = new Date(start);
    d.setHours(0,0,0,0);
    const endDay = new Date(end);
    endDay.setHours(0,0,0,0);
    while (d <= endDay) {
      const key = formatDateKey(d.getFullYear(), d.getMonth(), d.getDate());
      if (!newEvents[key]) newEvents[key] = [];
      newEvents[key].push({
        title: eventTitle,
        start: eventStart,
        end: eventEnd
      });
      d.setDate(d.getDate() + 1);
    }
    setEvents(newEvents);
    setAddEventOpen(false);
    setEventTitle('');
    setEventStart('');
    setEventEnd('');
  }

  // Render
  return (
    <div className="calendar-page calendar-centered">
      <div className="calendar-header">
        <button className="calendar-month-year calendar-month-year-large" onClick={() => setPickerOpen(!pickerOpen)}>
          {MONTHS[month]} {year}
        </button>
        {pickerOpen && (
          <div className="calendar-picker">
            {MONTHS.map((m, idx) => (
              <div
                key={m}
                className={`calendar-picker-month${idx === month ? ' selected' : ''}`}
                onClick={() => { setMonth(idx); setPickerOpen(false); }}
              >
                {m}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="calendar-table-wrapper calendar-table-centered">
        <table className="calendar-table">
          <thead>
            <tr>
              {DAYS.map((day, idx) => (
                <th key={day} className={`calendar-col calendar-col-${idx}`}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {weeks.map((week, wIdx) => (
              <tr key={wIdx}>
                {week.map((day, dIdx) => (
                  <td
                    key={dIdx}
                    className={`calendar-col calendar-col-${dIdx} calendar-day-cell`}
                    onClick={() => day && setViewDay(day)}
                    style={{ cursor: day ? 'pointer' : 'default', position: 'relative' }}
                  >
                    <span>{day}</span>
                    {day && hasEvent(day) && <span className="calendar-event-dot" title="Event"></span>}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="calendar-add-event-btn" onClick={() => setAddEventOpen(true)}>
        + Add Event
      </button>

      {/* Add Event Popup */}
      {addEventOpen && (
        <div className="calendar-modal-bg" onClick={() => setAddEventOpen(false)}>
          <div className="calendar-modal" onClick={e => e.stopPropagation()}>
            <h3>Add Event</h3>
            <form onSubmit={handleAddEvent} className="calendar-event-form">
              <label>
                Title
                <input value={eventTitle} onChange={e => setEventTitle(e.target.value)} required />
              </label>
              <label>
                Start Date & Time
                <input type="datetime-local" value={eventStart} onChange={e => setEventStart(e.target.value)} required />
              </label>
              <label>
                End Date & Time
                <input type="datetime-local" value={eventEnd} onChange={e => setEventEnd(e.target.value)} required />
              </label>
              <div className="calendar-modal-actions">
                <button type="button" onClick={() => setAddEventOpen(false)}>Cancel</button>
                <button type="submit">Add</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Events Popup */}
      {viewDay && (
        <div className="calendar-modal-bg" onClick={() => setViewDay(null)}>
          <div className="calendar-modal" onClick={e => e.stopPropagation()}>
            <h3>Events for {MONTHS[month]} {viewDay}, {year}</h3>
            <div className="calendar-events-list">
              {getEvents(viewDay).length === 0 ? (
                <div className="calendar-no-events">No events!</div>
              ) : (
                getEvents(viewDay).map((ev, idx) => (
                  <div key={idx} className="calendar-event-item">
                    <div className="calendar-event-title">
                      {ev.title} {ev.isTask && <span className="calendar-task-tag">TASK</span>}
                    </div>
                    <div className="calendar-event-time">
                      {ev.isTask
                        ? 'Due: ' + new Date(ev.start).toLocaleDateString()
                        : new Date(ev.start).toLocaleString() + ' - ' + new Date(ev.end).toLocaleString()
                      }
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="calendar-modal-actions">
              <button onClick={() => setViewDay(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Calendar; 