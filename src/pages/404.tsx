import type { NextPage } from "next";
import HeadTags from "../components/HeadTags";
import Layout from "../components/layout";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <HeadTags />
      <Layout>
        {/* Center Text */}
        <div className="mx-auto container mt-8 text-center">
          <h1 className="text-5xl xl:text-8xl">404</h1>
          <span className="text-xl text-tumbleweed md:text-3xl xl:text-5xl">
            Page not found
          </span>

          <br />

          <div className="m-4 btn">
            <Link href="/" passHref>
              <a className="m-5 select-none">
                <div className="inline bg-jungle py-1 px-2">Back to Home</div>
              </a>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Home;
