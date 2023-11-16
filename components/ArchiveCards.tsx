import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import React from "react";

interface ArchiveCardProps {
  title: string;
  description: string;
  listItem: string[];
  link: string;
}

// const ArchiveCard = ({ title, description, listItem, link}) => {
const ArchiveCard: React.FC<ArchiveCardProps> = ({
  title,
  description,
  listItem,
  link,
}) => {
  return (
    <a href={link} target="_blank">
      <div className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-start gap-6 hover:-translate-y-2 transition-transform duration-300 group">
        {/* <div className="justify-start"> */}
          <div className="flex justify-between items-center">
            <FaRegFolder className="text-4xl hover:text-textGreen" />
            {/* <RxOpenInNewWindow className="text-4xl hover:text-textGreen" /> */}
          </div>
          <div>
            <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
              {title}
            </h2>
            <p className="text-sm mt-3">{description}</p>
          </div>
        {/* </div> */}
        <ul className="text-sm mdl:text-sm text-textDark flex items-end gap-2 justify-between flex-wrap mt-auto">
          {listItem.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </a>
  );
};

export default ArchiveCard;
