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
    <article className="bg-gradient-to-br from-tumbleweed to-copper rounded p-1">
      <img src={imgURL} alt={name} className="object-cover h-[256px]" />
      <div className="bg-stone-800 px-5 py-3">
        <h2>{name}</h2>
        <p>{description}</p>

        <a
          href={projectURL}
          target="_blank"
          className="flex justify-end mt-5 select-none"
          rel="noreferrer"
        >
          <div className="bg-copper p-0.5 rounded">
            <div className="bg-charleston py-1 px-2">Go to Project</div>
          </div>
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
