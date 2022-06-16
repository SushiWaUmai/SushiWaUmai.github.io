import type { NextPage } from "next";
import HeadTags from "../components/HeadTags";
import Layout from "../components/layout";
import Link from "next/link";
import Footer from "../views/footer";

const Home: NextPage = () => {
  return (
    <>
      <HeadTags />
      <Layout>
        <div className="flex flex-col h-full">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#041f1e"
                fillOpacity="1"
                d="M0,256L48,245.3C96,235,192,213,288,218.7C384,224,480,256,576,224C672,192,768,96,864,80C960,64,1056,128,1152,138.7C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
          </div>

          {/* Center Text */}
          <div className="flex-grow mx-auto container mt-8 text-center">
            <h1 className="text-5xl xl:text-8xl">404</h1>
            <span className="text-xl text-tumbleweed md:text-3xl xl:text-5xl">
              Page not found
            </span>

            <br />

            <div className="m-4 btn">
              <Link href="/" passHref>
                <a className="m-5 select-none">
                  <span className="bg-jungle py-1 px-2">Back to Home</span>
                </a>
              </Link>
            </div>
          </div>
          <Footer footerClass="bg-jungle" curveColor="#1e2d2f" />
        </div>
      </Layout>
    </>
  );
};
export default Home;
