import Heading from "../../components/Heading";

const AboutMe = () => {
  return (
    <>
      <section id="aboutMe">
        <div className="mt-44">
          <div className="flex items-center gap-6">
            <span className="line"></span>
            <Heading text="About me" color="gray-600" />
            <span className="line"></span>
          </div>

          <div className="flex w-full mt-44 p-2.5 aboutMeContent">
            <div className="flex-grow aboutImg">
              <img
                src="/images/profile.jpg"
                alt="bgImg"
                className="w-full aboutImgImg h-4/5 object-cover"
              />
              <span className="aboutImgTest">David Prosper</span>
              <p className="aboutCenterd">
                Software Developer, Technology Enthusiast, Designer.
              </p>
            </div>
            <div className="flex-grow-2 p-2.5">
              <h2 className="">My Experience</h2>
              <p className="pt-6">
                I Am a web developer with two(2) Years of Experience
              </p>

              <div className="mt-5 py-3">
                <p>My Skills</p>
                <div className="flex align-center items-center text-purple-700">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/html-5--v1.png"
                    alt="html-5--v1"
                  />
                  <span className="pl-2">HTML:5</span>
                </div>
                <div className="flex align-center items-center text-purple-700">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/css3.png"
                    alt="css3"
                  />
                  <span className="pl-2">css3</span>
                </div>
                <div className="flex align-center items-center text-purple-700">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/javascript--v1.png"
                    alt="javascript--v1"
                  />
                  <span className="pl-2">javascript</span>
                </div>
                <div className="flex align-center items-center text-purple-700">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/react-native.png"
                    alt="react-native"
                  />
                  <span className="pl-2">react js</span>
                </div>
                <div className="flex align-center items-center text-purple-700">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/tailwindcss.png"
                    alt="tailwindcss"
                  />
                  <span className="pl-2">Tailwind Css</span>
                </div>
              </div>

              <span className="readMore">
                <a href="#">Read More</a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
