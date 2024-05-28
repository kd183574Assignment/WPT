import { Link } from "react-router-dom";
function NavBar()
{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary bd-dark"
        data-bs-theme='dark'>
            <div>
            <a className="navbar-brand" href="#">MyAirbnb </a>
        
            </div>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link 
                        to='/home'
                        className="nav-link"
                        aria-current='page'
                        href='#'>HOME
                        </Link>
                    </li>
                    <li className="nav-item">
                    <Link 
                    to="/properties"
                    className="nav-link"
                    aria-current='page'
                    href="#">
                        PROPERTIES
                     </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/bookings"
                    className="nav-link"
                    aria-current='page'
                    href=""> BOOKINGS</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/users"
                        className="nav-link"
                        aria-current='page'
                        href="">USERS</Link>

                    </li>

                </ul>
            </div>

        </nav>


    )
}
export default NavBar