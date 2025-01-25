import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy user validation
    if (email === 'user@example.com' && password === 'password123') {
      alert('Login successful!');
      navigate('/video-chat'); // Navigate to VideoChatPage
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id="email"
          className="form-input"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state
        />

        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          id="password"
          className="form-input"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state
        />

        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
