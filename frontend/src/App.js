import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calendar from './Pages/Calendar';
import ToDo from './Pages/ToDo';
import Profile from './Pages/Profile';
import BottomNav from './components/BottomNav';

function Home() {
  return (
    <div className="page">
      <h1>Home Page</h1>
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
              <BottomNav />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
