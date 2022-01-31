import Image from "next/image";
import SocialMedia from "../socialmedia";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaItchIo } from "react-icons/fa";

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
            <a href="https://github.com/SushiWaUmai">
              <BsGithub size={32} />
            </a>
            <a href="https://sushiwaumai.itch.io/">
              <FaItchIo size={32} />
            </a>
            <a href="https://www.instagram.com/eugenematsumura/">
              <BsInstagram size={32} />
            </a>
          </figure>
        </div>
        <div className="m-5 flex justify-center md:float-left md:block">
          <Image
            src="/Sushi.png"
            width={256}
            height={256}
            alt="SushiWaUmai's Profile Picture"
            className="rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Intro;
