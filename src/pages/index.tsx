import type { NextPage } from "next";
import Intro from "../components/sections/intro";
import Skills from "../components/sections/skills";
import Navbar from "../components/navbar";
import Layout from "../components/layout";
import Footer from "../components/sections/footer";
import Projects from "../components/sections/projects";
import HeadTags from "../components/HeadTags";

const Home: NextPage = () => {
  return (
    <>
      <HeadTags />
      <Layout>
        <Navbar />
        <Intro />
        <main>
          <Skills />
          <Projects />
          {/* <Contact /> */}
        </main>
        <Footer />
      </Layout>
    </>
  );
};

export default Home;
