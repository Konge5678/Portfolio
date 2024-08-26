import ProjectList from "@/components/ProjectList";

const projects = [
  {
    year: '2023-2024',
    projectName: 'Kjempe kult prosjekt',
    organization: 'Inmeta',
    technologies: ['Next.js', 'TypeScript', 'SCSS', 'Contentful'],
    link: 'https://KULLINK.COM',
  },
  {
    year: '2023-2024',
    projectName: 'Kjempe kult prosjekt',
    organization: 'Inmeta',
    technologies: ['Next.js', 'TypeScript', 'SCSS', 'Contentful'],
    link: 'https://KULLINK.COM',
  },
  {
    year: '2023-2024',
    projectName: 'Kjempe kult prosjekt',
    organization: 'Inmeta',
    technologies: ['Next.js', 'TypeScript', 'SCSS', 'Contentful'],
    link: 'https://KULLINK.COM',
  },
  
];

export default function Projects() {
    return (
      <div>
        <h1 className="text-white text-6xl ml-16">All Projects
        </h1>
        <ProjectList projects={projects} />;
        <div>
      
        </div>
      </div>
    );
  }   