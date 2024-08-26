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
        <h1 className="max-w-6-screen mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:mx-10 text-white text-5xl">All Projects
        </h1>
        <ProjectList projects={projects} />;
        <div>
      
        </div>
      </div>
    );
  }   