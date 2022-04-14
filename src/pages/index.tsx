import type { NextPage } from "next";
import Intro from "../views/intro";
import Skills from "../views/skills";
import Navbar from "../components/navbar";
import Layout from "../components/layout";
import Footer from "../views/footer";
import Projects from "../views/projects";
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
        </main>
        <Footer />
      </Layout>
    </>
  );
};

export default Home;
