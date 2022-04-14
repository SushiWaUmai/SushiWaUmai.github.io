import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaItchIo,
  FaDiscord,
} from "react-icons/fa";
import TrackingDiv from "../components/trackingdiv";

interface IntroProps {}

const Intro: React.FC<IntroProps> = () => {
  return (
    <header id="home" className="bg-charleston">
      <div className="container mx-auto mt-8 flex flex-col gap-x-5 sm:flex-row-reverse">
        <div className="m-5 flex-grow">
          <h1 className="text-5xl xl:text-8xl">Eugene Matsumura</h1>

          <br />
          <span className="text-xl text-tumbleweed md:text-3xl xl:text-5xl">
            SushiWaUmai
          </span>
          <figure className="my-5 flex justify-evenly gap-x-5 rounded bg-stone-800 p-5 md:float-right">
            <a href="https://github.com/SushiWaUmai" className="btn">
              <FaGithub size={32} />
            </a>
            <a href="https://sushiwaumai.itch.io/" className="btn">
              <FaItchIo size={32} />
            </a>
            <a
              href="https://www.instagram.com/eugenematsumura/"
              className="btn"
            >
              <FaInstagram size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/eugene-matsumura-68334922b/"
              className="btn"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://discord.com/users/356155984412147723/"
              className="btn"
            >
              <FaDiscord size={32} />
            </a>
          </figure>
        </div>
        <div className="m-5 flex justify-center md:float-left md:block">
          <TrackingDiv rotationLimit={20}>
            <div className="h-[256px] w-[256px]  bg-jungle rounded-full p-3">
              <div className="bg-gradient-to-br from-copper to-tumbleweed rounded-full p-1">
                <img
                  src="/images/Sushi.png"
                  alt="SushiWaUmai's Profile Picture"
                  className="rounded-full"
                />
              </div>
            </div>
          </TrackingDiv>
        </div>
      </div>
    </header>
  );
};

export default Intro;
