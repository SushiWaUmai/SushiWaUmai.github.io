interface ProjectCardProps {
  name: string;
  description: string;
  imgURL: string;
  projectURL: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  imgURL,
  projectURL,
}) => {
  return (
    <article className="bg-stone-800 rounded mx-auto md:w-1/2 xl:w-1/3 p-2">
      <div className="px-5 py-3">
        <h2 className="text-2xl text-center">{name}</h2>
      </div>
      <div className="p-3">
        <div className="p-0.5 bg-copper">
          <img
            src={imgURL}
            alt={name}
            className="object-contain w-full rounded"
          />
        </div>
      </div>
      <div className="px-5 py-3">
        <p>{description}</p>

        <a
          href={projectURL}
          target="_blank"
          className="flex justify-end mt-5 select-none"
          rel="noreferrer"
        >
          <div className="bg-copper p-0.5 rounded btn">
            <div className="bg-charleston py-1 px-2">Go to Project</div>
          </div>
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
