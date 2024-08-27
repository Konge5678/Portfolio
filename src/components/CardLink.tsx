import { MdOutlineArrowOutward } from "react-icons/md";

interface CardLinkProps {
  title: string;
  link: string;
  newTab?: boolean; 
}

const CardLink = ({ title, link, newTab = false }: CardLinkProps) => {
  return (
    <a
      href={link}
      target={newTab ? "_blank" : "_self"} 
      rel={newTab ? "noopener noreferrer" : undefined} 
      className="text-white w-[600px] p-6 hover:text-yellow-300 transition-colors duration-500"
    >
      <h1 className="text-2xl font-semibold flex items-center">
        {title} <MdOutlineArrowOutward className="ml-2" />
      </h1>
    </a>
  );
};

export default CardLink;
