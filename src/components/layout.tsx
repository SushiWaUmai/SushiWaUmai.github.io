interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0">{children}</div>
  );
};

export default Layout;
