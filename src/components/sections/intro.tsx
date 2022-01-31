import Image from "next/image";
import SocialMedia from "../socialmedia";

interface IntroProps {}

const Intro: React.FC<IntroProps> = () => {
  return (
    <header className="container mx-auto">
      <div className="float-right">
        <h1 className="text-5xl">Eugene Matsumura</h1>
        <span>SushiWaUmai</span>

        <figure>
          <SocialMedia
            src="https://picsum.photos/32"
            size={32}
            alt="Instagram"
            url=""
          />
          <SocialMedia
            src="https://picsum.photos/32"
            size={32}
            alt="Itch"
            url=""
          />
          <SocialMedia
            src="https://picsum.photos/32"
            size={32}
            alt="Github"
            url=""
          />
        </figure>
      </div>
      <Image
        src="https://picsum.photos/256"
        width={256}
        height={256}
        alt="SushiWaUmai's Profile Picture"
        className="float-left"
      />
    </header>
  );
};

export default Intro;
