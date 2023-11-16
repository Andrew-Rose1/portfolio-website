import React from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { expenseTrackerImage, idleGameImage, numberGuessingImage, profile, ticketDisplayImage } from "@/public/assets";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import config from '../config/index.json';

const Projects = () => {
  const {featured_1, featured_2, featured_3} = config.projects;
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I Have Built" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* Project one */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://github.com/Andrew-Rose1/finance-tracker"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={expenseTrackerImage}
                  alt="projectoneimage"
                />
                <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Expense Tracker</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                A full stack web application that integrates with user&apos;s bank accounts using the <span className="text-textGreen">Plaid API</span>.
                Users can view their transactions and check their balance, while keeping track of their spending and saving habits.
                {/* Amazon clone website for visualizing personalized Amazon
                website. View your products, Add your Account with{" "}
                <span className="text-textGreen">0-auth</span> and then make the
                purchase using <span className="text-textGreen">stripe</span>. */}
              </p>
              <ul className="text-xs md:text-sm font-titleFond tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>NextJs</li>
                <li>Typescript</li>
                <li>Tailwind CSS</li>
                <li>Plaid</li>
                <li>PostgreSQL</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href=""
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                {/* <a
                  className="hover:text-textGreen duration-300"
                  href="https://google.com"
                  target="_blank"
                >
                  <AiOutlineYoutube />
                </a> */}
                {/* <a
                  className="hover:text-textGreen duration-300"
                  href="https://google.com"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* Project two */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://github.com/Andrew-Rose1/swinomish-ticket-display"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={ticketDisplayImage}
                  alt="projectoneimage"
                />
              </div>
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Support Ticket Dashboard</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 xl:-mr-16 rounded-md">
                An organized dashboard to display IT support tickets for the Swinomish Casino and Lodge.
                Tickets are stored in a <span className="text-textGreen">MySQL</span> database and displayed in order based on due date and priority. 
                
                {/* An Amazon clone website for visualizing personalized Amazon
                website. View your products, Add your Account with{" "}
                <span className="text-textGreen">0-auth</span> and then make the
                purchase using <span className="text-textGreen">stripe</span>. */}
              </p>
              <ul className="text-xs md:text-sm font-titleFond tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Python</li>
                <li>Tkinter</li>
                <li>MySQL</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Andrew-Rose1/swinomish-ticket-display"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                {/* <a
                  className="hover:text-textGreen duration-300"
                  href="https://google.com"
                  target="_blank"
                >
                  <AiOutlineYoutube />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://google.com"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* Project three */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://github.com/Andrew-Rose1/endless-space"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={idleGameImage}
                  alt="projectoneimage"
                />
                <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Incremental Idle Game</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                A web based incremental game created with <span className="text-textGreen">HTML</span>, <span className="text-textGreen">Javascript</span>, 
                and <span className="text-textGreen">CSS</span>. THe player first peforms manual clicks to gain currency, and later purchases upgrades to auto click for them.
              </p>
              <ul className="text-xs md:text-sm font-titleFond tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              {/* {config.projects.featured_1.technologies.map((item, i) => (
                <li key={i}>{item}</li>
              ))} */}
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Andrew-Rose1/endless-space"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                {/* <a
                  className="hover:text-textGreen duration-300"
                  href="https://google.com"
                  target="_blank"
                >
                  <AiOutlineYoutube />
                </a> */}
                {/* <a
                  className="hover:text-textGreen duration-300"
                  href="https://google.com"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
