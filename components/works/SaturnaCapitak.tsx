import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";


const SaturnaCapital = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Junior Software Developer <span className="text-textGreen tracking-wide">@Saturna Capital</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        July 2022 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Designed and implemented scalable APIs and databases to efficiently manage client&apos;s personally identifiable information
          and transaction data, ensuring to maintain data integrity and security.
        </li>
        
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Designed and developmed a new event-driven open architecture financial services product, using modern technologies such as 
          NestJS, PostgreSQL, React, and Hasura to deliver a robust and scalable solution.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implemented efficient Continuous Integration/Deployment pipelines by using Docker containers and environment
          decoupling techniques to significantly reduce build times and enhance deployment efficiency.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implemented comprehensive unit and end-to-end testing strategies with JestJs.
        </li>

      </ul>
    </motion.div>
  )
};

export default SaturnaCapital;
