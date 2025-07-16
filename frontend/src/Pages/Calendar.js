import React from 'react';
import { Link } from 'react-router-dom';

function Calendar() {
  return (
    <div className="page">
      <h1>Calendar Page</h1>
      
      <div className="navigation-buttons">
        <Link to="/"><button>Home</button></Link>
        <Link to="/todo"><button>ToDo</button></Link>
        <Link to="/profile"><button>Profile</button></Link>
      </div>
    </div>
  );
}

export default Calendar; 