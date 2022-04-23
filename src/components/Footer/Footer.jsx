import { useLocation } from 'react-router-dom'
import './Footer.css';

const routesWithoutFooter = ["/sign_in", "/dashboard"];

export default function Footer(){
  const { pathname } = useLocation();

  /* Displaying the Footer for specific screen views */
  if(routesWithoutFooter.some(route => pathname.includes(route))) return null

  return(
    <footer className="footer-container">
      <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="">COLLECTIVE</a></li>
        <li><a href="">WORK WITH US</a></li>
        <li><a href="">ABOUT</a></li>
      </ul> 
      <p className="title"><a href="https://hycient.vercel.app" target="_blank">Hycient Onyeukwu</a> | 2022</p>
      <p>Design concept by <a href="https://www.linkedin.com/in/divine-chukwudi-bb9b416b" target="_blank">Divine</a></p> 
    </footer>
  )
}