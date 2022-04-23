import FadeInDiv from "../components/fadeindiv";
import { IoLogoGameControllerB } from "react-icons/io";
import { RiStackFill } from "react-icons/ri";

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
  return (
    <div className="bg-stone-900">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1e2d2f"
          fillOpacity="1"
          d="M0,160L80,170.7C160,181,320,203,480,224C640,245,800,267,960,256C1120,245,1280,203,1360,181.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      <section id="skills" className="container mx-auto">
        <div className="mx-5">
          <h2 className="text-center text-3xl xl:text-5xl">What I can offer</h2>

          <br />
          <figure className="mx-5 mt-5">
            <FadeInDiv>
              <div className="flex align-middle items-center flex-col gap-x-5 text-left md:flex-row-reverse md:text-left">
                <div className="flex-grow">
                  <h3 className="text-xl xl:text-3xl">Web Development</h3>

                  <p className="my-5">
                    I usually do fullstack (frontend and backend) in TypeScript.
                    My preferred stack in full stack development is the PERN
                    stack (PostgreSQL, Express, React, NodeJS).
                  </p>
                </div>

                <div className="w-[128px] h-[128px] m-5 text-right">
                  <RiStackFill
                    width={128}
                    height={128}
                    className="w-[128px] h-[128px]"
                  />
                </div>
              </div>
            </FadeInDiv>
            <br />
            <FadeInDiv>
              <div className="flex align-middle items-center text-left md:flex-row flex-col gap-x-5 md:text-right">
                <div className="flex-grow">
                  <h3 className="text-xl xl:text-3xl">Game Development</h3>

                  <p className="my-5">
                    Unity with C# is my preferred stack in Game Development.
                    Processing 3 with Java is also an option for smaller game
                    projects. I am capable of writing shaders including compute
                    shaders to optimze certain computationally intensive tasks.
                    See my{" "}
                    <div className="text-tumbleweed btn btn-effect inline-block">
                      <a href="https://sushiwaumai.itch.io/">Itch Page</a>
                    </div>{" "}
                    to find my past game projects.
                  </p>
                </div>

                <div className="w-[128px] h-[128px] m-5">
                  <IoLogoGameControllerB
                    width={128}
                    height={128}
                    className="w-[128px] h-[128px]"
                  />
                </div>
              </div>
            </FadeInDiv>
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Skills;
