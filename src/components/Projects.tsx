const Projects = () => {
  const projects = [
    { title: 'Project 1', description: 'A web app built with Next.js', link: '#' },
    { title: 'Project 2', description: 'MERN stack application', link: '#' },
    { title: 'Project 3', description: 'TypeScript utility library', link: '#' },
  ]

  return (
    <section id="projects" className="py-20 px-10 bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.title} className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-400 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects