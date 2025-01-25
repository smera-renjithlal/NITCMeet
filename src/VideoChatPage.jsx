import { useState } from 'react'
import './App.css'

function VideoChatPage() {
  return(
    <div className="app-container">
        <header className="header">
            <h1>Welcome to NITCMeet</h1>
            <p>Connect with students from all over campus in seconds!</p>
        </header>

        <main className="main-section">
        <div className="video-container">
            <div className="video-stream">
            <p>My Video</p>
            <div className="video-placeholder">My video here</div>
            </div>
            <div className="video-stream">
            <p>Their Video</p>
            <div className="video-placeholder">Their video here</div>
            </div>
        </div>

        <div className="controls-container">
          <button className="control-button">Start</button>
          <button className="control-button">Stop</button>
          <button className="control-button">Skip</button>
        </div>
      </main>
      <footer className="footer">
            <p>Stay safe and respectful while chatting!
            Read our rules and regulations before starting</p>
        </footer>
    </div>
  );
}

export default VideoChatPage;