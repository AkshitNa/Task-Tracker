import Login from '../TodoComponents/Login';
import Welcome from '../TodoComponents/Welcome';
import Error from '../TodoComponents/Error';
import Todos from '../TodoComponents/Todos';
import Footer from '../TodoComponents/Footer';
import Header from '../TodoComponents/Header';
import Logout from '../TodoComponents/Logout';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MyProvider, { authContext }  from '../Security/AuthContext';
import TodoUpdate from './TodoUpdate';


//Function to protect our components, you can not directly access the them without LOGIN.
function AuthenticatedRoute({children}) 
{

  const AuthContext = authContext(); //It passes an Object

  if(AuthContext.isAuthenticated)

  return children;
  else
  {
    return <Navigate to="/" />
  }
}

function TodoApp() {

  return (
    <div className='TodoApp'>
    <MyProvider> {/* Wrapping The Code */} 
      <BrowserRouter>
        <Header />
        <br />
        <br />
        
        <Routes>

          <Route path='/' element={<Login />} />
          
          <Route path='/login' element={<Login />} />

          {/* Only to be shown when a user is Authenticated !! */}
          
          <Route path='/welcome/:username' element={
            
           <AuthenticatedRoute>
            <Welcome />   {/* Children of AuthenticatedRoute */}
           </AuthenticatedRoute>
            
            } />

          <Route path='/todos' element={

            <AuthenticatedRoute> 
            <Todos />   {/* Children of AuthenticatedRoute */}
            </AuthenticatedRoute> 

            } />

            <Route path='/todos/:id' element={

            <AuthenticatedRoute> 
            <TodoUpdate />   {/* Children of AuthenticatedRoute */}
            </AuthenticatedRoute> 

            } />

          <Route path='/logout' element={
            
            <AuthenticatedRoute>
              <Logout /> {/* Children of AuthenticatedRoute */}
             </AuthenticatedRoute> 
            
            } />

          <Route path='*' element={<Error />} />

        </Routes>

        <Footer />
      </BrowserRouter>
    </MyProvider> {/* Wrapping The Code */} 
    </div>
  );
}

export default TodoApp;
