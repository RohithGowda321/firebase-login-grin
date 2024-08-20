// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Styles.scss';

// const LoginPage = () => {
//   const navigate = useNavigate();

//   const handleSignUpClick = () => {
//     navigate('/signup');
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-box">
//         <h1 className="auth-title">Login</h1>
//         <form className="auth-form">
//           <div className="form-group">
//             <input type="email" placeholder="Email" className="auth-input" required />
//           </div>
//           <div className="form-group">
//             <input type="password" placeholder="Password" className="auth-input" required />
//           </div>
//           <button type="submit" className="auth-button">Login</button>
//         </form>
//         <div className="auth-footer">
//           <p>Don't have an account? <button onClick={handleSignUpClick} className="auth-link-button">Sign Up</button></p>
//           <button className="auth-google-button">Login with Google</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
// src/LoginPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider, signInWithPopup } from '../../Firebase/FirebaseConfig';
import './Styles.scss';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/home');
      // Handle successful login
      console.log('User signed in with Google');
    } catch (error) {
      console.error('Error signing in with Google: ', error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title">Login</h1>
        <form className="auth-form">
          <div className="form-group">
            <input type="email" placeholder="Email" className="auth-input" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" className="auth-input" required />
          </div>
          <button type="submit" className="auth-button">Login</button>
        </form>
        <div className="auth-footer">
          <p>Don't have an account? <button onClick={handleSignUpClick} className="auth-link-button">Sign Up</button></p>
          <button className="auth-google-button" onClick={handleGoogleSignIn}>Continue with Google</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
