import './Home.css';
import { images, services, blogs, reviews } from '../../constants';
import Navbar from '../../components/NavBar/Navbar';


/*======================================================================================*/
/** It is worthy to note that the iteratively rendered items contained in each section of
 * this page could easily be componentized, but since this is just a basic
 * single page application, I chose rather deliberately, to render the
 * section items to the DOM without encasing them as components. 
 *  However, this would not be the case when working on more larger or multiple
 * page applications.
 */
/*======================================================================================*/

export default function Home(){
  const stars = []
  for(let i = 0; i < reviews.length; i++){
    const singleUser = []
    stars.push(singleUser)
    for(let j = 0; j < reviews[i].stars; j++){
      singleUser.push([images.filledStar]);
    }
  }

  return(
    <body>
      <header className="hero-header">
      
        <div className="hero-wave">
        <Navbar/>
          

          <div className="hero-content">
            <h1 className="caption-text">
              We Provide Solution to All health Challenges
            </h1>

            <p className="sub-caption">Your last stop to all heath problems.</p>

            <button className="">Book A Session Now</button>
          </div>
          <div className="hero-images">
            <div className="male-doctor-container">
              <img src={images.maleDoc} alt="" className="male-doctor" />
            </div>
            <div className="female-doctor-container">
              <img src={images.femaleDoc} alt="" className="female-doctor" />
            </div>
            
          </div>

        </div>
      </header>
      {/* End of Hero Header section */}

      <main className="content">
      {/* Beginning of Top Services Section */}
      <section className="services">
        <h2 className="title">Top Services</h2>
        <p className="sub-title">Below are some of the top services offered at Bimpe </p>

        <div className="services-grid">
          {
            services.map((service, index)=>(
              <div key={index} className={`service service-${(index + 1)} `}>
                <div className="top">
                  <img src={service.image} alt="" />
                </div>
                <div className="bottom">
                  <p className="name">{service.title}</p>
                  <p className="price">{service.price}</p>
                </div>
              </div>
            ))
          }
         </div>
      </section>
      
      <section className="blogs">
        <h2 className="title centralize-text">Blogs</h2>
        <p className="sub-title centralize-text">Get Free health tips from our daily blogs and podcasts</p>

        <div className="blogs-grid">
          {
            blogs.map((blog, index)=>(
              <div key={index} className={`blog blog-${(index + 1)} `}>
                <div className="top">
                  <img src={blog.image} alt="" />
                </div>
                <div className="bottom">
                  <h4 className="title shed-margin-padding">{blog.title}</h4>
                  <p className="content">{blog.content}</p>
                </div>
              </div>
            ))
          }
        </div>

        <div className="button-container">
          <button className="see-all centralize-text">See  all Blogs</button>
        </div>  
      </section>


      <section className="reviews">
        <h2 className="title centralize-text">What Our Clients Say</h2>
        <div className="review-container">

         {
           reviews.map((review, index)=>(
            <div key={index} className="review">
              <div className="top">
                 {
                   stars[index].map((star, index2)=>(
                    <img key={index2} src={star} alt="" />
                   ))                  
                 }
              </div>
              <div className="center">{review.content} </div>
              <div className="bottom">
                <img src={review.image} alt={review.reviewer} className="avatar" />
                <p className="reviewer">{review.reviewer}</p>
              </div>
            </div>
           ))
         }
        </div>
      </section>



     

      </main>
    </body>
  )
}