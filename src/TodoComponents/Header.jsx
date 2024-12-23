import {Link} from 'react-router-dom';
import { authContext } from '../Security/AuthContext';

import '../CSS/Footer.css';

function Header()
{
    //AuthContext => To share value

    const AuthContext = authContext(); //It passes an Object
    const checker = AuthContext.isAuthenticated;

    function logoutAction()
    {
        AuthContext.logout(); //checker -> false
    }

    return (

        <header className="border-bottom border-light border-5 mb-5 p-2">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://chatgpt.com">NautiDevelopers</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                            {checker && <Link className="nav-link" to="/welcome/Akshit">Home</Link>}
                            </li>
                            <li className="nav-item fs-5">
                               {checker && <Link className="nav-link" to="/todos">Todos</Link>} 
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5">
                           {!checker && <Link className="nav-link" to="/login">Login</Link>} 
                        </li>
                        <li className="nav-item fs-5">
                            {checker && <Link className="nav-link" to="/logout" onClick={logoutAction}>Logout</Link>}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    );
}

export default Header;