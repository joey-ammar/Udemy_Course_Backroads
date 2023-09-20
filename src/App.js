/**Import  */
import Navbar from "./components/Navbar";
import Description from "./components/Description";
import About from "./components/About";
import Service from "./components/Service";
import Tours from "./components/Tours";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Description
        title="continue exploring"
        text="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            explicabo debitis est autem dicta."
        link="explore tours"
        sectionAttribute="hero"
        sectionId="home"
        divClassName="hero-banner"
        linkHref="#toura"
        linkBtn="btn hero-btn"
      />
      <About />
      <Service />
      <Tours />
      <Footer />
      <script src="./js/app.js"></script>
    </div>
  );
};

export default App;
