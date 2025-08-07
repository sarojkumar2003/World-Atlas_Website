import HeroSection from "../components/UI/HeroSection";
import About from "./About";
import './Home.css';


export const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="HeroAbout">
        <About />
      </div>
    </>
  );
};

export default Home;
