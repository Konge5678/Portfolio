import ExperienceTag from "../Buttons/ExperienceCardTag";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: { tag: string; link: string }[];
  image: string;
  date: string;
}

const ProjectCard = ({ title, description, tags, image, date }: ProjectCardProps) => {
  return (
    <div className="text-white w-[600px] p-6 bg-indigo-950 rounded-lg">
      <div className="flex justify-between items-start">
        <p className="text-lg text-zinc-400">{date}</p>
        <div className="ml-4">
          <h1 className="text-xl font-semibold">
            {title}
          </h1>
        </div>
      </div>
      <div className="mt-4 flex">
        <img src={image} alt={title} className="w-1/3 rounded-lg mr-4" />
        <p className="text-zinc-300 text-justify">{description}</p>
      </div>
      <div className="flex space-x-2 mt-6">
        {tags.map((tagItem, index) => (
          <ExperienceTag key={index} tag={tagItem.tag} link={tagItem.link} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
