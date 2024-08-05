import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HeaderImage from "../../assets/profile.jpg";
import data from "./data";
import "./home.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="container header__container" data-aos-offset="0">
      <div className="header__profile" data-aos="fade-in">
        <img
          className="header__profile-img"
          src={HeaderImage}
          alt="My portrait"
        />
      </div>
      <h2 data-aos="fade-up">Hello, I'm Kah Mun</h2>
      <div className="header__cta" data-aos="fade-up">
        <a href="#contact" className="btn default">
          Let's Talk
        </a>
      </div>
      <div className="header__socials" data-aos="fade-left">
        {data.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <item.icon />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;
