interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="flex justify-between p-3">
      <span>
        <a href="#home" className="inline-block mx-3 btn btn-effect">
          Home
        </a>
      </span>
      <span>
        <a href="#skills" className="inline-block mx-3 btn btn-effect">
          Skills
        </a>
        <a href="#projects" className="inline-block mx-3 btn btn-effect">
          Projects
        </a>
      </span>
    </nav>
  );
};

export default Navbar;
