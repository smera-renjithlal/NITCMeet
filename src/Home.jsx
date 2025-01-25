import { useState } from 'react'
import { useNavigate } from "react-router-dom";

//import "./Home.css";



function Home(){
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1>Welcome to NITCMeet</h1>
      </header>

      <main className="homepage-main">
        <p>Click below to get started!</p>
        <button className="homepage-button"
          onClick={() => navigate("/login")}
        > Login</button>
      </main>

      <footer className="homepage-footer">
        <p>&copy; 2025 NITCMeet All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Home;
