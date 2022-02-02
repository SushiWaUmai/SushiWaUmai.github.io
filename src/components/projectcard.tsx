interface ProjectCardProps {
  name: string;
  description: string;
  imgURL: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  imgURL,
}) => {
  return (
    <article className="bg-gradient-to-br from-tumbleweed to-copper rounded p-1">
      <img src={imgURL} alt={name} />
      <div className="bg-stone-800 px-5 py-3">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default ProjectCard;
