function ProjectCard({ title, description, tech }) {
  return (
    <div className="bg-gradient-to-b from-blue-950 to-blue-900 border border-blue-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-700/30 hover:-translate-y-1 transition-all duration-300">
      <h3 className="text-2xl font-semibold text-blue-300 mb-3">{title}</h3>
      <p className="text-blue-200 text-base mb-4 leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span
            key={index}
            className="text-sm bg-blue-800/50 text-blue-200 px-3 py-1 rounded-full border border-blue-700"
          >
            {item}
          </span>
        ))}
      </div>
   
    </div>
  );
}

export default ProjectCard;
