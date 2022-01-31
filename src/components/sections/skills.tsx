import Image from "next/image";

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
  return (
    <section>
      <h2>What I can offer</h2>
      <figure>
        <h3>Web Development</h3>
        <Image
          src="https://picsum.photos/128"
          width={128}
          height={128}
          alt="Web Development Example"
        />
      </figure>
      <figure>
        <h3>Game Development</h3>
        <Image
          src="https://picsum.photos/128"
          width={128}
          height={128}
          alt="Game Development Example"
        />
      </figure>
    </section>
  );
};

export default Skills;
