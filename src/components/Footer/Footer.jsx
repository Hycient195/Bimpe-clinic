// import { useLocation } from 'react-router-dom'
import './Footer.css';
import { images } from '../../constants'

// const routesWithoutFooter = ["/sign_in", "/dashboard"];

export default function Footer(){
  // const { pathname } = useLocation();

  /* Displaying the Footer for specific screen views */
  // if(routesWithoutFooter.some(route => pathname.includes(route))) return null

  return(
    <footer id="footer" className="footer-container">

      <section className="footer-top-container">
        <div className="footer-top">
          <div className="left">
            <h2>Get In Touch</h2>
            <p className="">Subscribe to our news letter to constantly stay in touch</p>
          </div>
          <div className="right">
            <form className="input-container">
              <input type="email" placeholder="Email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>


      <section className="footer-bottom">
        <div className="block">
          <h3 className="block-title">Company info</h3>
          <ul className="">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">We are hiring</a></li>
            <li><a href="#">Location</a></li>
          </ul>
        </div>

        <div className="block">
          <h3 className="block-title">Features</h3>
          <ul className="">
            <li><a href="#">Our Doctors</a></li>
            <li><a href="#">User Analytic</a></li>
            <li><a href="#">Live Chat</a></li>
            <li><a href="#">Book a session</a></li>
          </ul>
        </div>

        <div className="block">
          <h3 className="block-title">Resources</h3>
          <ul className="">
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Watch a Demo</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">Newsletter</a></li>
          </ul>
        </div>

        <div className="block">
          <h3 className="block-title">Bimpe Clinic</h3>
          
          <div className="icons-container">
            <img src={images.facebook} alt="" />
            <img src={images.insta} alt="" />
            <img src={images.twitter} alt="" />
          </div>
        </div>

        
      </section>

      <section className="attribution">
        <p>Design concept by <a href="https://www.linkedin.com/in/daniel-mbazu-103714197" target="_blank">Daniel</a></p> 
        <h3 className="title centralize-text"><a href="https://hycient.vercel.app" target="_blank">Hycient Onyeukwu</a> | 2022 &copy;</h3>

        <p>Design concept by <a href="https://www.linkedin.com/in/daniel-mbazu-103714197" target="_blank">Daniel</a></p>
        <p className="">Bimpe 2022</p>
      </section>
    </footer>
  )
}