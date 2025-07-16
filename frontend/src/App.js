import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Calendar from './Pages/Calendar';
import ToDo from './Pages/ToDo';
import Profile from './Pages/Profile';

function Home() {
  return (
    <div className="page">
      <h1>Home Page</h1>
      
      <div className="navigation-buttons">
        <Link to="/calendar"><button>Calendar</button></Link>
        <Link to="/todo"><button>ToDo</button></Link>
        <Link to="/profile"><button>Profile</button></Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <div className="iphone-frame">
          <div className="iphone-screen">
            <div className="iphone-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/todo" element={<ToDo />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
