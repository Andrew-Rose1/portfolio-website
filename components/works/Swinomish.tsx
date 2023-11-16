import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";


const SwinomishCasino = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        AV/IT Technician II <span className="text-textGreen tracking-wide">@Swinomish Casino & Lodge</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2019 - July 2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implemented automation techniques using Bash and Python scripts, streamlining network job processes and minimizing errors.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Decreased deployment time for operating system and software updates by employing Powershell scripts,
          leading to improved workstation performance and enhanced security measures.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Managed Linux (Ubuntu) servers and internal MySQL databases.
        </li>

      </ul>
    </motion.div>
  )
};

export default SwinomishCasino;
