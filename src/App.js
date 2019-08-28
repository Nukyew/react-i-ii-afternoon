import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserInfo from './components/UserInfo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo">Home</div>
      </header>
      <div className="main-section">
        <div className="list-app">
          <UserInfo />
{/*           <div className="info-section">
            <h2>Marion Santori</h2>
            <p><b>From: </b>Liverpool, United Kingdom</p>
            <p><b>Job Title: </b>Research Associate</p>
            <p><b>Employer: </b>Skinix</p>
            <p></p>
            <p><b>Favorite Movies:</b></p>
            <ol>
              <li>Fathom</li>
              <li>Strange Magic</li>
              <li>Martian Child</li>
            </ol>
          </div> */}
          {/* <div className="current-page">
            <h2>1/25</h2>
          </div>
        </div>
        <div className="controls">
          <p>{"< Previous"}</p>
          <p>{"Next >"}</p>
        </div> */}
      </div>
    </div>
    </div>
  );
}

export default App;
