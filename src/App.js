import "./App.css";
import React from "react";
import { Navbar } from "./UIComponents/Navbar";
import { Footer } from "./UIComponents/Footer";
import { About } from "./About";
import { Projects } from "./Projects";
import { Blog } from "./BlogComponents/Blog";
import { Carousel } from "./Carousel";
import image1 from "./Shared/Carousel/1.jpg";
import Aos from "aos";

const home = ["Home", "About", "Projects", "Blog", "Contact"];
const strArr = ["Hi! I am Pavan Kumar Muntha", "A MERN stack developer"];
const image2 =
  "https://thedevcouple.com/wp-content/uploads/2017/10/Interview-React-2.jpg";

const App = () => {
  React.useEffect(() => {
    Aos.init({});
  }, []);
  const downloadFile = () => {
    window.open(
      "https://drive.google.com/file/d/1NG2yYUXjQwe6-WJ0Xblw3N-77G0gcXgu/view?usp=sharing"
    );
  };
  return (
    <>
      <div className="container-fluid">
        <Navbar arr={home} />
        <div id="Home">
          <Carousel images={[image1, image2]} strArr={strArr} />;
        </div>
        <button
          className="btn sticky-top shd float-right btn-lg bttn button cur text-white"
          onClick={downloadFile}
        >
          <span className="btnspn">Resume</span>
          <i class="fa fa-download dicon"></i>
        </button>
        <div className="container">
          <About />
        </div>
        <hr className="aboutHr" data-aos="fade-up" />
        <p className="textXL text-center mb-5 mt-5 text-white">Projects</p>
        <Projects />
        <hr className="aboutHr" data-aos="fade-up" />
        <Blog />
        {/* <Switch>
          <Route path="/Home" exact={true} component={Home} />
          <Route path="/About" exact={true} component={About} />
          <Route path="/Projects" exact={true} component={Projects} />
          <Route path="/Blog" exact={true} component={Blog} />
          <Route path="/Projects/:project" exact={true} component={Projects} />
          <Route path="/Projects/" component={Projects} />
          <Route path="/" component={Home} />
        </Switch> */}
        <div id="Contact" data-aos="fade-up">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
