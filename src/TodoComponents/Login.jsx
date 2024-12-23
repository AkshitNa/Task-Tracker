import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { authContext } from '../Security/AuthContext';

import '../CSS/TodoApp.css';
import '../CSS/Login.css';

function Login() {

     const [username, setUsername] = useState('Akshit');

     const [password, setPassword] = useState('');

    //  For Authentication
    
    const [failureMessage, setFailureMessage] = useState(false);

    //Navigate

    const navigate = useNavigate();

    //AuthContext => To share value

    const AuthContext = authContext(); //It passes an Object in which passed Values are stored.

    //Functions when TextField is click.

     function handleUsernameChange(event) {

      setUsername(event.target.value);

     }

     function handlePasswordChange(event) {

      setPassword(event.target.value);
     }


     // Function when Button is clicked!!!

    async function handleSubmit() {

      if(await AuthContext.login(username,password))

        {
          navigate(`/welcome/${username}`);
        }

        else
        {
          setFailureMessage(true);
        }

     } 

    return (
      
      <div className='login'>

        <h1> Login Page </h1>

        {/* Curly Braces me JavaScript Hai */}

        {/* 
        
            true && "Ram" => Ram 
            false && "Ram" => false
        
        */}

      { failureMessage && <div style={{color: 'red'}}> Try Again!!! </div>}

      <br />

        <form action="">
  
      <div>
  
        <label htmlFor='username'> Username: </label>
        <input type="text" name='Username' value={username} onChange={handleUsernameChange} />
  
      </div>
  
      <div>
  
        <label htmlFor='password'> Password: </label>
        <input type="password" name='password' value={password} onChange={handlePasswordChange} />
  
      </div> <br />

      <button type="button" className="btn btn-success" id='bit' name='login' onClick={handleSubmit} > Login </button>

      </form>
  
      </div>
      
    );
  }

  export default Login;


