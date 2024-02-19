import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home';
import NavBar from './pages/NavBar';
import './styles.css';

function App() {
  return (
    <div className="app">
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div> 404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
