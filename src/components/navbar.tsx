interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="flex justify-between p-3">
      <span>
        <a href="#home">Home</a>
      </span>
      <span>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </span>
    </nav>
  );
};

export default Navbar;
