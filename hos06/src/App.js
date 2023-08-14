import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Details from './Details';
import Team from './Team';
import Member from './Member';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <nav className="navbar">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/details">Details</NavLink>
              </li>
              <li>
                <NavLink to="/team">Team</NavLink>
              </li>
            </ul>
          </nav>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/details" element={<Details />} />
              <Route path="/team" element={<Team />}>
                {/* Nested Routing */}
                <Route path="member/:id" element={<Member />} />
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;