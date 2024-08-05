import { HiDownload } from "react-icons/hi";
import Resume from "../../assets/sample.pdf";
import AboutImage from "../../assets/about.jpg";
import "./about.css";

const About = () => {
  return (
    <div className="container about__container" data-aos="fade-in">
      <div className="about__left">
        <h2>About Me</h2>
        <p>
          Hello, my name is Kah Mun, I am a software engineer based in Malaysia,
          with over 6 years experience specializing in full stack development. I
          excel at improving user experience and building user-centric
          applications and am committed to continuous learning professional
          growth. Check out my resume below.
        </p>
        <a href={Resume} download className="btn default">
          Download Resume <HiDownload />
        </a>
      </div>
      <div className="about__right">
        <div className="about__portrait">
          <img src={AboutImage} alt="About Image" />
        </div>
      </div>
    </div>
  );
};

export default About;
