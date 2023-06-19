import React, { useState } from 'react';
import './AppStyleGeneral.css';
import JSLogic from "./InputProcessingLogic";
import brandLogo from "./components/images/brandlogo.svg";
import GoogleButton from './components/functional components/GoogleButton';
import FacebookButton from './components/functional components/FacebookButton';


function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors] = useState(["", "", ""]);
  const [fieldStatus, setFieldStatus] = useState([
    { error: '', failureIconOpacity: 0, successIconOpacity: 0 },
    { error: '', failureIconOpacity: 0, successIconOpacity: 0 },
    { error: '', failureIconOpacity: 0, successIconOpacity: 0 }
  ]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'username') {
      setUsername(value);
    } else if (id === 'email') {
      setEmail(value);
    } else if (id === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    checkError(username, 0, "Username can't be blank");
    checkError(email, 1, "Email can't be blank");
    checkError(password, 2, "Password can't be blank");
  };

  const checkError = (input, index, message) => {
    const fieldState = [...fieldStatus];
    const fieldInfo = fieldState[index];

    if (input.trim() === '') {
      fieldInfo.error = message;
      fieldInfo.failureIconOpacity = 1;
      fieldInfo.successIconOpacity = 0;
    } else {
      fieldInfo.error = '';
      fieldInfo.failureIconOpacity = 0;
      fieldInfo.successIconOpacity = 1;
    }

    fieldState[index] = fieldInfo;
    setFieldStatus(fieldState);
  };

  return (
    <div>
      <div className="container">
        <div className="content">
          <div className="logo"><img src={brandLogo} alt="Brand logo" /></div>
          <div className="image"></div>
          <div className="text">Start for free & get <br />
            Attractive offers Today!</div>
        </div>
        <form id="form">
          <div className="social">
            <div className="title">Get Started</div>
            <div className="signingIn">
              Already have an account? <br />
              <span className="login">Log In</span>
            </div>
            <div className="buttons">
              <GoogleButton />
              <FacebookButton />
            </div>
            <div className="divider">Or</div>
          </div>
          <JSLogic
            username={username}
            email={email}
            password={password}
            errors={errors}
            fieldStatus={fieldStatus}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
}

export default App;
