import { SocialMediaComponent } from "../components/socialmedia";

interface FooterProps {
  footerClass?: string;
  curveColor?: string;
}

const Footer: React.FC<FooterProps> = ({
  footerClass = "bg-charleston",
  curveColor = "#041f1e",
}) => {
  return (
    <footer className={footerClass}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={curveColor}
          fillOpacity="1"
          d="M0,224L80,218.7C160,213,320,203,480,202.7C640,203,800,213,960,197.3C1120,181,1280,139,1360,117.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      <div className="container mx-auto">
        <div className="m-5 gap-5 flex justify-between flex-col lg:flex-row">
          <p className="text-xl inline">SushiWaUmai 2022</p>
          <p className="inline">
            This Website is open source and can be found{" "}
            <span className="text-tumbleweed btn btn-effect inline-block">
              <a href="https://github.com/SushiWaUmai/SushiWaUmai.github.io">
                here
              </a>
            </span>
          </p>
          <figure className="m-5 flex justify-evenly gap-x-5 rounded bg-stone-800 p-5 md:float-right">
            <SocialMediaComponent />
          </figure>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
