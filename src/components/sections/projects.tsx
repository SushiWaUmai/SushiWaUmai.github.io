import ProjectCard from "../projectcard";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <section id="projects" className="bg-jungle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="rgb(28 25 23)"
          fillOpacity="1"
          d="M0,224L80,208C160,192,320,160,480,160C640,160,800,192,960,208C1120,224,1280,224,1360,224L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      <div className="container mx-auto">
        <h2 className="text-3xl xl:text-5xl">Past Projects</h2>

        <br />

        <figure className="flex gap-x-5">
          <ProjectCard
            name="Project 1"
            description="Test Description"
            imgURL="./images/Sushi.png"
          />
        </figure>
      </div>
    </section>
  );
};

export default Projects;
