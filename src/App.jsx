import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import LoginPage from "./LoginPage";
import VideoChatPage from "./VideoChatPage";

function App(){
  return(
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/video-chat" element={<VideoChatPage />} />
        </Routes>
      </div>
  );
}

export default App;
