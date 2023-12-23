import '../src/Styless/Styles.css';
import LoginLogo from '../src/Asserts/Group 3.png';
import Home from './Screens/Home';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(false);

  const correctEmail = "user@example.com";
  const correctPassword = "123";

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === correctEmail && password === correctPassword) {
      setLoginStatus(true);
      alert("Login Successful. Welcome to the Home Page!");
    } else {
      setLoginStatus(false);
      alert('Invalid email or password');
    }
  };

  return (
    !loginStatus ? (
      <div className="loginMainDev">
        <div className='topsection'>
          <div>
            <img src={LoginLogo} alt="Login Logo" className='LoginLogo' />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: "center" }}>
          <form onSubmit={handleSubmit}>
            <div>
              <input type='email' className='input' placeholder='Email' onChange={handleEmailChange} />
              <br />
              <br/>
              <input type='password' className='input' placeholder='Password' onChange={handlePasswordChange} />
              <br />
              <br/>
              <button type="submit" className='Loginbutton'>Login</button>
              <p className='forgotpassword'>Forgot password?</p>
            </div>
          </form>
        </div>
      </div>
    ) : (
      <Home />
    )
  );
}

export default App;
