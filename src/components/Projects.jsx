import ProjectCard from "./ProjectCard";

function Projects() {
const projects = [
  {
    title: "Caridfy",
    description:
      "A digital event card platform that simplifies wedding and event invitations through personalized, shareable digital cards. Built for speed, scale, and design flexibility.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "InterLynk",
    description:
      "A social platform that bridges hobbies and professional networking — blending Pinterest’s discovery experience with LinkedIn’s community depth to connect niche interest groups.",
    tech: ["Next.js", "Convex", "Firebase", "ShadCN UI"],
    link: "#",
  },
  {
    title: "FH Store Dashboard",
    description:
      "An analytics dashboard built for FH Group to visualize orders, revenue, and inventory using dynamic charts and automated data flows. Designed for executive clarity and operational speed.",
    tech: ["React", "Recharts", "Express.js", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Hillcrest Real Estate",
    description:
      "A clean and responsive real estate web application designed to showcase luxury listings with high-impact visuals and smooth navigation.",
    tech: ["React", "Node.js", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Business Process Engineering (Pfizer Automation)",
    description:
      "A process automation web project that digitized 10 Pfizer workflows, integrating MongoDB APIs and modular frontends to streamline operational processes.",
    tech: ["HTML", "CSS", "MongoDB", "JavaScript"],
    link: "#",
  },
  {
    title: "FiveDev Landing Page",
    description:
      "A dynamic landing page for my development brand — optimized for conversions, scroll performance, and creative visual presentation of services.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "#",
  },
 
];


  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-blue-950 to-black px-8 py-20 text-blue-100"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Featured <span className="text-blue-400">Projects</span>
        </h2>
        <p className="max-w-2xl mx-auto text-blue-300 text-lg">
          A collection of products and experiments I’ve built blending design,
          logic, and scalability to solve real-world problems.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
