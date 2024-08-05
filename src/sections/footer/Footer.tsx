import data from "../home/data";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <div className="footer__socials">
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
      <div className="footer__copyright">
        <small>2024 kahmun &copy; All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
