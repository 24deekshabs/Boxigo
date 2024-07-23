import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MyMoves from './components/MyMoves';
import MyProfile from './components/MyProfile';
import GetQuote from './components/GetQuote';
import Logout from './components/Logout';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/mymoves" element={<MyMoves />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/getquote" element={<GetQuote />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
