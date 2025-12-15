const Skills = () => {
  const skills = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS']

  return (
    <section id="skills" className="py-20 px-10 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map(skill => (
            <div key={skill} className="bg-gray-800 p-4 rounded-lg">
              <p className="text-lg">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills