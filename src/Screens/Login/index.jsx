import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider, signInWithPopup, signInWithEmailAndPassword } from '../../Firebase/FirebaseConfig';
import './Styles.scss';
import GoogleIcon from '@mui/icons-material/Google';
const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Check if user is already authenticated
    const isLoggedIn = localStorage.getItem('authToken');
    if (isLoggedIn) {
      navigate('/home');
    }
  }, [navigate]);

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem('authToken', result.user.refreshToken); // Store token or any other user info
      navigate('/home');
      console.log('User signed in with Google');
    } catch (error) {
      console.error('Error signing in with Google: ', error);
    }
  };

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('authToken', userCredential.user.refreshToken); // Store token or any other user info
      navigate('/home');
      console.log('User signed in with email and password');
    } catch (error) {
      console.error('Error signing in with email and password: ', error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title">Login</h1>
        <form className="auth-form" onSubmit={handleEmailSignIn}>
          <div className="form-group">
            <input 
              type="email" 
              placeholder="Email" 
              className="auth-input" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <input 
              type="password" 
              placeholder="Password" 
              className="auth-input" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit" className="auth-button">Login</button>
        </form>
        <div className="auth-footer">
          <p>Don't have an account? <button onClick={handleSignUpClick} className="auth-link-button">Sign Up</button></p>
          <button className="auth-google-button" onClick={handleGoogleSignIn}>
            <GoogleIcon style={{ marginRight: '10px' }} />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
