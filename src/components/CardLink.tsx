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
      className="text-white flex items-center gap-4 p-6 hover:text-yellow-300 transition-colors duration-500">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <MdOutlineArrowOutward className="w-6 h-6 min-w-6 min-h-6" />
    </a>
  );
};

export default CardLink;
