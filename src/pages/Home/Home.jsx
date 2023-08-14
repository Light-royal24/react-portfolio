import "./Home.css";
import Heading from "../../components/Heading";

const Home = () => {
  return (
    <>
      <section id="homePage">
        <div className="flex flex-col justify-center home">
          <div className="centered flex w-full items-center justify-center">
            <div className="Items w-4/5 wIncreased">
              <div>
                <Heading text="Fullstack Developer" color="yellow-400" />
                <h2 className="text-gray-400 text-md w-1/2 mt-3 aboutText">
                  Hi, I Am A Web Developer, Technology Enthusiast, Designer. from Imo State(Nigeria)
                  ,I love coding and technology.
                   if im not coding I will be learning stuff about technology.
                  Because i want to learn and Know more About technology all over the world.
                  i want to learn (node.js, react.js, python, c++ and mySQL),
                  i want to be a fullstack developer and i will gladly join any intenship available
                </h2>
                <button className="cta-button text-yellow-400 mt-3 w-1/4 uppercase text-sm font-semibold tracking-widest">
                  <a href="#projectCard">See My Projects</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
