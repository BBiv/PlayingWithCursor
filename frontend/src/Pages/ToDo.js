import React, { useState } from 'react';

const PRIORITY = [
  { value: 'high', label: 'High' },
  { value: 'medium', label: 'Medium' },
  { value: 'low', label: 'Low' }
];

// For Calendar integration
export let todoTasksForCalendar = [];

function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [addOpen, setAddOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [due, setDue] = useState('');
  const [priority, setPriority] = useState('medium');

  function handleAddTask(e) {
    e.preventDefault();
    if (!title || !due) return;
    const newTasks = [
      ...tasks,
      {
        id: Date.now(),
        title,
        due,
        priority,
        completed: false
      }
    ];
    setTasks(newTasks);
    todoTasksForCalendar = newTasks;
    setAddOpen(false);
    setTitle('');
    setDue('');
    setPriority('high');
  }

  function handleToggleComplete(id) {
    const newTasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
    setTasks(newTasks);
    todoTasksForCalendar = newTasks;
  }

  function handleDeleteTask(id) {
    const newTasks = tasks.filter(t => t.id !== id);
    setTasks(newTasks);
    todoTasksForCalendar = newTasks;
  }

  // Order: High > Medium > Low, then by due date
  const orderedTasks = tasks
    .sort((a, b) => {
      const pOrder = { high: 0, medium: 1, low: 2 };
      if (pOrder[a.priority] !== pOrder[b.priority]) {
        return pOrder[a.priority] - pOrder[b.priority];
      }
      return new Date(a.due) - new Date(b.due);
    });

  return (
    <div className="todo-page">
      <div className="todo-header">
        <h2 className="todo-title">To-Do List</h2>
        <button className="todo-add-btn" onClick={() => setAddOpen(true)} title="Add Task">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="14" fill="#57E1FF"/>
            <rect x="13" y="7" width="2" height="14" rx="1" fill="white"/>
            <rect x="7" y="13" width="14" height="2" rx="1" fill="white"/>
          </svg>
        </button>
      </div>
      <div className="todo-list-wrapper">
        {orderedTasks.length === 0 ? (
          <div className="todo-blank-state">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="20" width="60" height="40" rx="10" fill="#eaf7fd"/>
              <rect x="20" y="32" width="40" height="6" rx="3" fill="#57E1FF"/>
              <rect x="20" y="44" width="24" height="6" rx="3" fill="#b6e6fa"/>
              <circle cx="40" cy="40" r="38" stroke="#eaf7fd" strokeWidth="4"/>
            </svg>
            <div className="todo-blank-msg">Nothing to do! Enjoy your day 🌞</div>
          </div>
        ) : (
          <ul className="todo-list">
            {orderedTasks.map(task => (
              <li key={task.id} className={`todo-task todo-priority-${task.priority}${task.completed ? ' todo-completed' : ''}`}>
                <label className="todo-checkbox-label">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggleComplete(task.id)}
                  />
                  <span className="todo-custom-checkbox"></span>
                </label>
                <div className="todo-task-main">
                  <div className="todo-task-title">{task.title}</div>
                  <div className="todo-task-meta">
                    <span className="todo-task-due">Due: {new Date(task.due).toLocaleDateString()}</span>
                    <span className="todo-task-priority todo-priority-label">{PRIORITY.find(p => p.value === task.priority).label}</span>
                  </div>
                </div>
                <button className="todo-delete-btn" title="Delete Task" onClick={() => handleDeleteTask(task.id)}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5.5" y="9.5" width="11" height="2" rx="1" fill="#ff5e5e"/>
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* Add Task Modal */}
      {addOpen && (
        <div className="calendar-modal-bg" onClick={() => setAddOpen(false)}>
          <div className="calendar-modal" onClick={e => e.stopPropagation()}>
            <h3>Add To-Do Task</h3>
            <form onSubmit={handleAddTask} className="calendar-event-form">
              <label>
                Title
                <input value={title} onChange={e => setTitle(e.target.value)} required />
              </label>
              <label>
                Due Date
                <input type="date" value={due} onChange={e => setDue(e.target.value)} required />
              </label>
              <label>
                Priority
                <select value={priority} onChange={e => setPriority(e.target.value)} required>
                  {PRIORITY.map(p => (
                    <option key={p.value} value={p.value}>{p.label}</option>
                  ))}
                </select>
              </label>
              <div className="calendar-modal-actions">
                <button type="button" onClick={() => setAddOpen(false)}>Cancel</button>
                <button type="submit">Add</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ToDo; 