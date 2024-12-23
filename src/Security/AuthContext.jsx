import React, { createContext, useContext, useState } from "react";

import { executeJWTAuthenticationService } from "../API/JWTAuthenticationAPI";

import {apiClient} from '../API/ApiClient'

// Create a context
export const MyContext = createContext();

// Storing the value of MyContext in authContext

export const authContext = () => useContext(MyContext); 

// Creating MyProvider Component so to share value among components.

function MyProvider ({ children }) {

  // Putting various States in the context

  const [isAuthenticated, setAuthenticate] = useState(false);

  const [username, setUsername] =  useState(null);

  //For Authentication

  const [token, setToken] = useState(null);

// For Authentication

// function login(username,password)
//   {
//     if(username === "Akshit" && password === "12345")

//       {
//         setAuthenticate(true);
//         setUsername(username);
//         return true;
//       }

//       else
//       {
//         setAuthenticate(false);
//         setUsername(null);
//         return false;
//       }
//   }
      
  

// Token Authentication [No JWT]


/*  async function login(username,password){

    const basicAuthToken = 'Basic ' + window.btoa(username + ":" + password);

   try{
    
    const response = await executeBasicAuthenticationService(basicAuthToken);

    if(response.status==200)
      {
        setAuthenticate(true);
        setUsername(username);
        setToken(basicAuthToken)

        apiClient.interceptors.request.use(

          (config) => {

            console.log("Intercepting and Adding a token")
            config.headers.Authorization = basicAuthToken
            return config
          }
        )

        return true;
      }
      else
      {
        logout();
        return false;
      }
    }catch(error) {
      logout();
      return false;
    }
  }

  */


  //For JWT Authorization

async function login(username,password){

 try{
  
  const response = await executeJWTAuthenticationService(username, password);

  if(response.status===200)
    {
      const JWTToken = 'Bearer ' + response.data.token;
      setAuthenticate(true);
      setUsername(username);
      setToken(JWTToken)

      apiClient.interceptors.request.use(

        (config) => {

          console.log("Intercepting and Adding a token")
          config.headers.Authorization = JWTToken
          return config
        }
      )

      return true;
    }
    else
    {
      logout();
      return false;
    }
  }catch(error) {
    logout();
    return false;
  }
}
   

  function logout()
  {
    setAuthenticate(false);
    setToken(null);
    setUsername(null);
  }

  const valueToBePassed = {isAuthenticated, login, logout, username, token };

  return (  
    <MyContext.Provider value={valueToBePassed}>
      {children}
    </MyContext.Provider>
  );
}

// The component AuthProvider is used to wrap other components
// in TodoApp so that Informations can be passed amonng Components.

export default MyProvider;
