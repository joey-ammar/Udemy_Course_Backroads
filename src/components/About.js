import Description from "./Description";
import AboutImage from "../images/about.jpeg";
const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-title">
        <h2>
          about <span>us</span>
        </h2>
      </div>

      <div className="section-center about-center">
        <div className="about-img">
          <img src={AboutImage} className="about-photo" alt="awesome beach" />
        </div>
        <Description
          title="explore the difference"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
            sapiente odio unde dolor?"
          anotherText=" Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
            sapiente odio unde dolor?"
          link="read more"
          linkHref="#"
          linkBtn="btn"
        />
      </div>
    </section>
  );
};

export default About;
