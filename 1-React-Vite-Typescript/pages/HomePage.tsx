import CarouselHome from "../components/CarouselHome/CarouselHome"
import AboutUs from "../components/AboutUs/AboutUs"
import "../src/App.css"

export const HomePage = () => {
  return (
    <>
      <CarouselHome/>
      <div>
      <div className="AboutUs">
      <h2>About Us</h2>
      <p>We are a team of passionate individuals who love to create amazing things. Our mission is to provide high-quality services and products that exceed our customers' expectations.</p>
      </div>
      <div  className="container container1">
      <AboutUs
        imageUrl="assets/images/AboutUs1.jpeg"
        title="Feature 1"
        description="This is a wider card with supporting text below as a natural lead-in to additional content."
      />
      <AboutUs
        imageUrl="assets/images/AboutUs2.jpg"
        title="Feature 2"
        description="This is a wider card with supporting text below as a natural lead-in to additional content."
      /> 
      <AboutUs
        imageUrl="assets/images/AboutUs3.jpg"
        title="Feature 3"
        description="This is a wider card with supporting text below as a natural lead-in to additional content."
      />
      </div>
      </div>
    </>
  )
}

export default HomePage;
