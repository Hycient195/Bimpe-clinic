import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const routeseWithoutSidebar = ["/dashboard", "/sign_in"];

export default function Navbar(){
  const { pathname } = useLocation();

  /** Hiding the navbar for specific pages */
  if(routeseWithoutSidebar.some(route => pathname.includes(route))) return null

  return(
    <header>
      <nav className="navbar-nav">
        <h2 className="title">Bimpe Clinic</h2>
        <ul>
          <li className="nav-links bold"><a href="#">Home</a></li>
          <li className="nav-links bold"><a href="#">Services</a></li>
          <li className="nav-links bold"><a href="#">Blogs</a></li>
          <li className="nav-links bold"><a href="#">Testimonies</a></li>
          <li className="nav-links bold" ><a href="">Contact Us</a></li>
          {/* <li><button className="sign-up">Sign up free</button></li> */}
        </ul>
        {/* <Link to="/sign_in" className="sign-in-mobile">Sign in</Link> */}
      </nav>
    </header>
    
  )
}