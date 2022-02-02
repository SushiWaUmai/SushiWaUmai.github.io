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
      <img src={imgURL} alt={name} />
      <div className="bg-stone-800 px-5 py-3">
        <h2>{name}</h2>
        <p>{description}</p>

        <a href={projectURL} className="flex justify-end mt-5 select-none">
          <div className="bg-stone-600 p-1 rounded">
            <div className="bg-stone-700 py-1 px-2">Go to Project</div>
          </div>
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
