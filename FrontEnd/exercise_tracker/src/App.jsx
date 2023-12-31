import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="container">
      <header className="header">
        {" "}
        <NavBar />
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <h4>
          &copy;Avom brice from <a href="rebaseacademy.com">ra</a>
        </h4>
      </footer>
    </div>
  );
}

export default App
