import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
    // The HeroSection component renders a hero section with a title, description, and a button to navigate to the countries page.
  return (
   <main className="hero-section main">
      <div className="container grid grid-two-cols ">
        <div className="hero-content">
          <h1 className="heading-xl">Explore the World with World Atlas</h1>
          <p className="paragraph">
            Discover the history and beauty of every nation. Sort through our
            extensive database to find the information you need.
          </p>

          <button onClick={()=> navigate("/country")} className="btn btn-darken btn-inline bg-white-box">
           Start Countries <FaArrowRight />
          </button>
        </div>
        <div className="hero-image">
            <img src="./images/world.png" alt="World-image"
              className="banner-image" />
          </div>
      </div>
    </main>
  );
};

export default HeroSection;
