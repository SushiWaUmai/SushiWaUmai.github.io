interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="flex justify-between p-3">
      <span>
        <a href="#home">Home</a>
      </span>
      <span>
        <a href="#skills" className="m-3">
          Skills
        </a>
        <a href="#projects" className="m-3">
          Projects
        </a>
        <a href="#contact" className="m-3">
          Contact
        </a>
      </span>
    </nav>
  );
};

export default Navbar;
