import { useParams, Link } from "react-router-dom"; //Link is used to go to different component without reloading.
import React from 'react';

function Welcome()
{
    const {username} = useParams(); 

    return(

      <>
            <h1> Todo Application Welcomes {username} !!! </h1>

            <h3> Manage Your Todos ---&gt; <Link to={"/todos"}> Click Here </Link> </h3>

            <br /><br />

            {/* <button type="button" className="btn btn-success"> Call API </button> */}

      </>

    );
}

export default Welcome;




   //Message

  //  const[message, setMessage] =  useState(null);

  //  function APICall()
  //  {

  //   console.log("AXIOX is Called!!");

    // JasCalling()
    // .then((response) => successfulResponse(response))
    // .catch((error) => errorResponse(error))
    // .finally(() => console.log("Finally is called"));

  //   NameCalling('Sahil')
  //   .then((response) => successfulResponse(response))
  //   .catch((error) => errorResponse(error))
  //   .finally(() => console.log("Her Name is called"));
  //  }

  // getTodoDataForusername('Akshit')
  //   .then((response) => successfulResponse(response))
  //   .catch((error) => errorResponse(error))
  //   .finally(() => console.log("My Name is called"));
  //  }


  //Successful And Error Response

  //  function successfulResponse(response)
  //  {
  //   console.log(response);
  //   setMessage(response.data[0].username);
  //   console.log(response.data[0].id);
  //  }

  //  function errorResponse(error)
  //  {
  //   console.log(error);
  //  }