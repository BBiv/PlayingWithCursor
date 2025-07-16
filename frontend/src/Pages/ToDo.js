import React from 'react';
import { Link } from 'react-router-dom';

function ToDo() {
  return (
    <div className="page">
      <h1>ToDo List Page</h1>
      
      <div className="navigation-buttons">
        <Link to="/"><button>Home</button></Link>
        <Link to="/calendar"><button>Calendar</button></Link>
        <Link to="/profile"><button>Profile</button></Link>
      </div>
    </div>
  );
}

export default ToDo; 