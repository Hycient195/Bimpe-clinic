import './Navbar.css';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { images } from '../../constants';

const routeseWithoutSidebar = ["/dashboard", "/sign_in"];

export default function Navbar(){
  const { pathname } = useLocation();
  const [ navList, setNavList ] = useState("");

  const showMobileNav = e =>{
    if(navList == ""){
      setNavList(
        <ul className="mobile-nav">
          <li className="nav-links bold"><a href="#">Home</a></li>
          <li className="nav-links bold"><a href="#service">Services</a></li>
          <li className="nav-links bold"><a href="#blogs">Blogs</a></li>
          <li className="nav-links bold"><a href="#reviews">Testimonies</a></li>
          <li className="nav-links bold"><a href="#footer">Contact Us</a></li>
          {/* <li><button className="sign-up">Sign up free</button></li> */}
        </ul>
      )
    }else{
      setNavList("");
    }
  }

  /** Hiding the navbar for specific pages */
  if(routeseWithoutSidebar.some(route => pathname.includes(route))) return null

  return(
    <header>
      <nav className="navbar-nav">
        <div className="top">
          <h2 className="title"><img src={images.stethoscopeBlack} alt="" /> Bimpe Clinic</h2>
          <button onClick={showMobileNav}><img src={images.hamburger} alt="" className="hamburger" /></button>
        </div>
        {
          navList && navList
        }
        <ul className="desktop-nav">
          <li className="nav-links bold"><a href="#">Home</a></li>
          <li className="nav-links bold"><a href="#service">Services</a></li>
          <li className="nav-links bold"><a href="#blogs">Blogs</a></li>
          <li className="nav-links bold"><a href="#reviews">Testimonies</a></li>
          <li className="nav-links bold" ><a href="#footer">Contact Us</a></li>
          {/* <li><button className="sign-up">Sign up free</button></li> */}
        </ul>
        {/* <Link to="/sign_in" className="sign-in-mobile">Sign in</Link> */}
      </nav>
    </header>
    
  )
}