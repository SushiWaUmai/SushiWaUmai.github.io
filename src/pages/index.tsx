import type { NextPage } from "next";
import Intro from "../components/sections/intro";
import Skills from "../components/sections/skills";
import Navbar from "../components/navbar";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Projects from "../components/sections/projects";
import Contact from "../components/sections/contact";

const Home: NextPage = () => {
  return (
    <Layout>
      <Navbar />
      <Intro />
      <main>
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </Layout>
  );
};

export default Home;
