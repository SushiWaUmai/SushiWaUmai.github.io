interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-charleston">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#041f1e"
          fillOpacity="1"
          d="M0,224L80,218.7C160,213,320,203,480,202.7C640,203,800,213,960,197.3C1120,181,1280,139,1360,117.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      <div className="p-5">
        <div className="container mx-auto">SushiWaUmai 2020</div>
      </div>
    </footer>
  );
};

export default Footer;
