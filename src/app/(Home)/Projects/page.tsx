import ProjectList from "@/components/ProjectList";

const projects = [
  {
    year: '2023-2024',
    projectName: 'Awesome Project X',
    organization: 'Inmeta',
    technologies: ['React.js', 'JavaScript', 'CSS', 'Firebase'],
    link: 'https://ProjectX.com',
},
{
    year: '2023-2024',
    projectName: 'Creative Web Solutions',
    organization: 'Inmeta',
    technologies: ['Next.js', 'GraphQL', 'Styled Components', 'Contentful'],
    link: 'https://CreativeWeb.com',
},
{
    year: '2023-2024',
    projectName: 'Innovative Design Hub',
    organization: 'Inmeta',
    technologies: ['Vue.js', 'TypeScript', 'SCSS', 'Prismic'],
    link: 'https://DesignHub.com',
},
{
    year: '2023-2024',
    projectName: 'Dynamic Content Platform',
    organization: 'Inmeta',
    technologies: ['Angular', 'JavaScript', 'LESS', 'Strapi'],
    link: 'https://ContentPlatform.com',
},
{
    year: '2023-2024',
    projectName: 'Modern Web Architecture',
    organization: 'Inmeta',
    technologies: ['Svelte', 'TypeScript', 'CSS Modules', 'Sanity'],
    link: 'https://WebArchitecture.com',
},
{
    year: '2023-2024',
    projectName: 'Next-Gen Interface',
    organization: 'Inmeta',
    technologies: ['Next.js', 'TypeScript', 'SCSS', 'Storyblok'],
    link: 'https://NextGenInterface.com',
},
{
    year: '2023-2024',
    projectName: 'Cutting-Edge Tech Portal',
    organization: 'Inmeta',
    technologies: ['Gatsby', 'JavaScript', 'Tailwind CSS', 'DatoCMS'],
    link: 'https://TechPortal.com',
},
  
];

export default function Projects() {
    return (
      <div className="min-h-screen">
        <h1 className="max-w-6-screen mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:mx-10 text-white text-5xl">All Projects
        </h1>
        <ProjectList projects={projects} />;
        <div>
      
        </div>
      </div>
    );
  }   