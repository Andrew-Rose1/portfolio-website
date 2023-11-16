import { useState } from "react";
import SectionTitle from "./SectionTitle";
import SaturnaCapital from "./works/SaturnaCapitak";
import SwinomishCasino from "./works/Swinomish";

const Experience = () => {
  const [workSaturna, setWorkSaturna] = useState(true);
  const [workSwinomish, setWorkSwinomish] = useState(false);

  const handleSaturna = () => {
    setWorkSaturna(true);
    setWorkSwinomish(false);
  };
  const handleSwinomish = () => {
    setWorkSaturna(false);
    setWorkSwinomish(true);
  };

  return (
    <div>
      <section
        id="experience"
        className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
      >
        <SectionTitle title="Where I Have Worked" titleNo="02" />
        <div className="w-full my-10 flex flex-col md:flex-row gap-16">
          <ul className="md:w-32 flex flex-col">
            <li
              onClick={handleSaturna}
              className={`${
                workSaturna
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            >
              Saturna Capital
            </li>
            <li
              onClick={handleSwinomish}
              className={`${
                workSwinomish
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            >
              Swinomish Casino
            </li>
          </ul>
          {workSaturna && <SaturnaCapital />}
          {workSwinomish && <SwinomishCasino />}
        </div>
      </section>
    </div>
  );
};

export default Experience;
