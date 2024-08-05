import contacts from "./data";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <h2>Let's connect</h2>
      <p>I'd love to hear from you. Feel free to reach out through any of the links below!</p>
      <div className="container contact__container" data-aos="fade-up">
        {contacts.map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <contact.icon/>
          </a>
        ))}
      </div>
    </>
  );
};

export default Contact;
