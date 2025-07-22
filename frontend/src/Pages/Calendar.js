import React, { useState } from 'react';

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

function Calendar() {
  const [year] = useState(2025);
  const [month, setMonth] = useState(0);
  const [pickerOpen, setPickerOpen] = useState(false);

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

  return (
    <div className="calendar-page">
      <div className="calendar-header">
        <button className="calendar-month-year" onClick={() => setPickerOpen(!pickerOpen)}>
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
      <div className="calendar-table-wrapper">
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
                  <td key={dIdx} className={`calendar-col calendar-col-${dIdx}`}>{day}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Calendar; 