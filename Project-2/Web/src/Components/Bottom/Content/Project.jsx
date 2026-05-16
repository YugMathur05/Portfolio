const Project = () => {
  return (
    <div>
      <div id="project" className="w-full px-4 md:px-10 py-10">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          My Projects
        </h2>

      
        <div className="bg-white shadow-lg rounded-2xl p-6 mb-8 hover:shadow-2xl transition duration-300">

          <h3 className="text-2xl font-semibold text-blue-600 mb-4">
            <a href="#">Portfolio Website</a>
          </h3>

          <p className="text-gray-600 text-base md:text-lg leading-8">
            Built a responsive personal portfolio using HTML and CSS.
            Designed clean UI to showcase skills, projects, and contact
            information. Improved understanding of responsive web design
            and front-end fundamentals.
          </p>

        </div>

   
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300">

          <h3 className="text-2xl font-semibold text-blue-600 mb-4">
            <a href="#">AI Restaurant Menu Generator</a>
          </h3>

          <p className="text-gray-600 text-base md:text-lg leading-8">
            Developed a web-based application using HTML, CSS, and
            JavaScript. Implemented dynamic menu generation logic to
            create customized restaurant menus with an interactive user
            interface.
          </p>

        </div>

      </div>
    </div>
  )
}

export default Project