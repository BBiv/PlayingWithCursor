import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div className="page">
      <h1>Profile Page</h1>
      
      <div className="navigation-buttons">
        <Link to="/"><button>Home</button></Link>
        <Link to="/calendar"><button>Calendar</button></Link>
        <Link to="/todo"><button>ToDo</button></Link>
      </div>
    </div>
  );
}

export default Profile; 