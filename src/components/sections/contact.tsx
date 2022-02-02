interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <section id="contact" className="bg-charleston">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#041f1e"
          fillOpacity="1"
          d="M0,192L80,208C160,224,320,256,480,245.3C640,235,800,181,960,170.7C1120,160,1280,192,1360,208L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      <div className="container mx-auto">
        <h2 className="text-3xl xl:text-5xl">Contact</h2>
      </div>
    </section>
  );
};

export default Contact;
