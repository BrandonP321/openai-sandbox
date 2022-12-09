import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainHeader from './components/MainHeader/MainHeader';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
