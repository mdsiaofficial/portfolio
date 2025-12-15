const Contact = () => {
  return (
    <section id="contact" className="py-20 px-10 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <p className="text-lg mb-8">Let's work together!</p>
        <div className="flex justify-center space-x-6">
          <a href="mailto:john@example.com" className="text-blue-400 hover:underline">Email</a>
          <a href="https://github.com/johndoe" className="text-blue-400 hover:underline">GitHub</a>
          <a href="https://linkedin.com/in/johndoe" className="text-blue-400 hover:underline">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}

export default Contact