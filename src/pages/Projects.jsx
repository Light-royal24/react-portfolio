import ProjectCard from "../components/ProjectCard";
import Heading from "../components/Heading";

const Projects = () => {
  const projects = [
    {
      id: 0,
      image: "/images/movies-site-screenshot.jpg",
      title: "HTML, CSS3 & JS Movies",
      desc: "De Lords Movies is a simple movie database for searching for latest and upcoming movies",
      code: "https://github.com/Light-royal24/DELORDS-Movies",
      live: "https://royal-movies.netlify.app/",
      tools: [
        {
          name: "HTML5",
          link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
          icon: "lab la-html5",
        },
        {
          name: "CSS3",
          link: "https://developer.mozilla.org/en-US/docs/Glossary/css",
          icon: "lab la-css3",
        },
        {
          name: "Javascript",
          link: "https://developer.mozilla.org/en-US/docs/Glossary/javascript",
          icon: "lab la-js-square",
        },
        {
          name: "Fetch API",
          link: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
          icon: "",
        },
        {
          name: "Rapid API",
          link: "https://rapidapi.com/SAdrian/api/moviesdatabase/",
          icon: "",
        },
      ],
    },
    {
      id: 1,
      image: "/images/Html-Todo.jpg",
      title: "HTML, CSS3 & JS Todo",
      desc: "Html Todo-List is a simple Todo-List that help's users add task and return later to complete it",
      code: "https://github.com/Light-royal24/html-todo-list",
      live: "https://d-todo-list.netlify.app/",
      tools: [
        {
          name: "HTML5",
          link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
          icon: "lab la-html5",
        },
        {
          name: "CSS3",
          link: "https://developer.mozilla.org/en-US/docs/Glossary/css",
          icon: "lab la-css3",
        },
        {
          name: "Javascript",
          link: "https://developer.mozilla.org/en-US/docs/Glossary/javascript",
          icon: "lab la-js-square",
        },
      ],
    },
    {
      id: 2,
      image: "/images/hotel-booking-form.jpg",
      title: "HTML, CSS3 & JS Booking Form",
      desc: "D-Hotel_booking form is a simple Hotel form that helps users book hotels right from their comfort Zone and get receipt instantly.",
      code: "https://github.com/Light-royal24/Hotel-Booking_form",
      live: "https://d-hotel-reservations.netlify.app/",
      tools: [
        {
          name: "HTML5",
          link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
          icon: "lab la-html5",
        },
        {
          name: "CSS3",
          link: "https://developer.mozilla.org/en-US/docs/Glossary/css",
          icon: "lab la-css3",
        },
        {
          name: "Javascript",
          link: "https://developer.mozilla.org/en-US/docs/Glossary/javascript",
          icon: "lab la-js-square",
        },
      ],
    },
    {
      id: 3,
      image: "/images/react-todo.jpg",
      title: "HTML, CSS3 & JS Movies",
      desc: "React Todo-List made with raect.js and Tailwind Css.",
      code: "https://github.com/Light-royal24/simple-react-todo-list",
      live: "https://d-react-todolist.netlify.app/",
      tools: [
        {
          name: "REACT JS",
          link: "https://www.freecodecamp.org/news/react-beginner-handbook/",
          icon: "lab la-react",
        },
        {
          name: "TAILWIND CSS",
          link: "https://flowbite.com/tools/tailwind-cheat-sheet/",
          icon: "",
        },
      ],
    },
  ];

  const projectText = 'Project';
  return (
    <>
      <section id="projectCard">
        <div className="mt-44">
        <div className="flex flex-col">
          <div className="flex flex-col items-center">
          <Heading text={`My ${projectText}`} />

            <p className="text-center">some of my project</p>
          </div>

          <div className="mt-20 p-2.5 flex flex-wrap">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
           
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
