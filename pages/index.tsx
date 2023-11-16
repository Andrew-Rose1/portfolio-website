import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar";
import Head from "next/head";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import { delay, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Archive from "@/components/Archive";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import LazyLoad from "@/components/LazyLoad";

const inter = Inter({ subsets: ["latin"] });

/**
 * TO DO:
 *  - Setup domain on vercel: https://www.andrewrose-portfolio.com
 *  - Allow all 3 divs to be be scrollable (on the main page, left, banner, right)
 *  - Add prodile picture
 *  - [DONE] Swap out 3rd featured project
 *  - Export email address to config constant | use andrejrose99@gmail.com
 *  - [DONE] Add archive porjects
 *  - [DONE] Finish experience section
 *  - [DONE] Add correct resume
 *  - [DONE] Change or remove banner logo | Change favicon
 *  - Change and remove social links
 * 
 *  - Push to github & Deploy website
 *  - Add website to resume
 *  - Add website to linkedIn
 */

export default function Home() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures the animation happens only once
  });

  // Define your animation properties
  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Update animation controls based on whether the section is in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <Head>
        <title>Andrew Rose</title>
        <meta name="description" content="Protfolio Website | Andrew Rose" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/a-sm.png" />
      </Head>
      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
        <NavBar />
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
          >
            <LeftSide />
          </motion.div>
          <div className="h-[88vh] w-full mx-auto p-4">
            {/* Main sections */}
            <Banner />
            <LazyLoad>
              <About />
            </LazyLoad>
            <LazyLoad>
              <Experience />
            </LazyLoad>
            <LazyLoad>
              <Projects />
            </LazyLoad>
            <LazyLoad>
              <Archive />
            </LazyLoad>
            <LazyLoad>
              <Contact />
              <Footer />
            </LazyLoad>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
          >
            <RightSide />
          </motion.div>
        </div>
      </main>
    </>
  );
}
