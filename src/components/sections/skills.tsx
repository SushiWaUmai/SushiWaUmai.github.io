interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
  return (
    <section id="skills" className="bg-stone-900">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1e2d2f"
          fillOpacity="1"
          d="M0,160L80,170.7C160,181,320,203,480,224C640,245,800,267,960,256C1120,245,1280,203,1360,181.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      <div className="container mx-auto">
        <div className="mx-5">
          <h2 className="texl-xl md:text-3xl xl:text-5xl">What I can offer</h2>
          <br />
          <figure className="mx-5 mt-5">
            <div className="flex gap-x-5">
              <div>
                <h3 className="md:text-xl xl:text-3xl">Web Development</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quisquam aliquid ab esse cupiditate possimus autem sint saepe
                  repudiandae unde architecto deleniti corrupti qui quod fugiat
                  excepturi atque, beatae veniam tempore?
                </p>
              </div>
              <div>
                <img
                  src="https://picsum.photos/128"
                  alt="Web Development Example"
                  className="h-128 w-128"
                />
              </div>
            </div>
            <br />
            <div className="flex flex-row gap-x-5 text-left md:flex-row-reverse md:text-right">
              <div>
                <h3 className="md:text-xl xl:text-3xl">Game Development</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  vitae enim quae nam modi possimus molestias voluptates
                  officiis? Eaque aut dolorem hic ducimus quae similique
                  maiores. Pariatur recusandae voluptate blanditiis?
                </p>
              </div>
              <div>
                <img
                  src="https://picsum.photos/128"
                  alt="Game Development Example"
                  className="h-[128px] w-[128px]"
                />
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Skills;