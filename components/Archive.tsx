import React, { useState } from "react";
import ArchiveCard from "./ArchiveCards";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        {/* <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p> */}
      </div>
      <div className="grid gir-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Trading Bot"
          description="A program to automatically buy and sell equities based on user defined trading strategies. Includes the ability to backtest straategies."
          listItem={["Python", "Pandas", "IB API"]}
          link="https://github.com/Andrew-Rose1/algorithmic-trading-bot"
        />
        <ArchiveCard
          title="Sudoko Solver"
          description="A simple tool to solve any (solvable) sudoko puzzle using backtracking recursion."
          listItem={["Java", "", ""]}
          link="https://github.com/Andrew-Rose1/sudoko-solver"
        />
        <ArchiveCard
          title="Number Guessing Mobile App"
          description="A mobile game against an AI, where the computer attempts to guess your secret number."
          listItem={["React Native", "Javascript", "CSS"]}
          link="https://github.com/Andrew-Rose1/mobile-number-guessing-game"
        />
        <ArchiveCard
          title="Word Guessing Game"
          description="A 2-player CLI based word guessing game, where one player chooses a word while the othe rplayer attempt to guess."
          listItem={["C", "", ""]}
          link="https://github.com/Andrew-Rose1/word-guess-game"
        />
        <ArchiveCard
          title="Hangman"
          description="A 2-player CLI based hangman game that utilizes sockets to connect hosts."
          listItem={["C", "", ""]}
          link="https://github.com/Andrew-Rose1/hangman"
        />
        <ArchiveCard
          title="To Do Mobile App"
          description="A IOS/Android app to keep track of your goals and tasks."
          listItem={["React native", "Javascript", "CSS"]}
          link="https://github.com/Andrew-Rose1/to-do-app"
        />

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              // transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Project 1"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                libero tortor, pulvinar at tristique in, sodales ac sapien. Nam ut
                malesuada ex, at pharetra lorem."
                listItem={["Reactjs", "Tailwind CSS", "PostgreSQL"]}
                link="https://google.com"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Project 1"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                libero tortor, pulvinar at tristique in, sodales ac sapien. Nam ut
                malesuada ex, at pharetra lorem."
                listItem={["Reactjs", "Tailwind CSS", "PostgreSQL"]}
                link="https://google.com"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Project 1"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                libero tortor, pulvinar at tristique in, sodales ac sapien. Nam ut
                malesuada ex, at pharetra lorem."
                listItem={["Reactjs", "Tailwind CSS", "PostgreSQL"]}
                link="https://google.com"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Project 1"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                libero tortor, pulvinar at tristique in, sodales ac sapien. Nam ut
                malesuada ex, at pharetra lorem."
                listItem={["Reactjs", "Tailwind CSS", "PostgreSQL"]}
                link="https://google.com"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Project 1"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                libero tortor, pulvinar at tristique in, sodales ac sapien. Nam ut
                malesuada ex, at pharetra lorem."
                listItem={["Reactjs", "Tailwind CSS", "PostgreSQL"]}
                link="https://google.com"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Project 1"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                libero tortor, pulvinar at tristique in, sodales ac sapien. Nam ut
                malesuada ex, at pharetra lorem."
                listItem={["Reactjs", "Tailwind CSS", "PostgreSQL"]}
                link="https://google.com"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Project 1"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                libero tortor, pulvinar at tristique in, sodales ac sapien. Nam ut
                malesuada ex, at pharetra lorem."
                listItem={["Reactjs", "Tailwind CSS", "PostgreSQL"]}
                link="https://google.com"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Project 1"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                libero tortor, pulvinar at tristique in, sodales ac sapien. Nam ut
                malesuada ex, at pharetra lorem."
                listItem={["Reactjs", "Tailwind CSS", "PostgreSQL"]}
                link="https://google.com"
              />
            </motion.div>
          </>
        )}
      </div>
      {/* Uncomment to include more projects */}
      {/* <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div> */}
    </div>
  );
};

export default Archive;
