const Hero = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">John Doe</h1>
        <p className="text-xl mb-8">JavaScript/TypeScript/MERN Stack/Next.js Developer</p>
        <p className="text-lg mb-8">Building amazing web applications with modern technologies.</p>
        <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">Get In Touch</a>
      </div>
    </section>
  )
}

export default Hero