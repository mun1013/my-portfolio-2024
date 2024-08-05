import Card from "../../components/Card/Card.tsx";
import data from "./data";
import "./skills.css";

const Skills = () => {
  return (
    <>
      <h2>My Skills</h2>
      <p>
        I take great pride in working with these frameworks and technologies
      </p>
      <div className="container skills__container" data-aos="fade-up">
        {data.map((item) => (
          <Card key={item.id} className="skills">
            <div className="skills__category_icon">
              <item.categoryIcon />
            </div>
            <div className="skills__details">
              <h4>{item.title}</h4>
              <div className="skills__icons">
                <item.icons />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Skills;
