const Footer = () => {
  return (
    <div>

      <footer className="w-full bg-gray-900 text-white py-8 mt-10">

        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-6">

          <p className="text-sm md:text-base text-center text-gray-300">
            © 2025 MyPortfolio | All Rights Reserved
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">

            <a
              href="mailto:yug.m0578@gmail.com"
              className="hover:text-blue-400 transition duration-300"
            >
              📩 yug.m0578@gmail.com
            </a>

            <a
              href="https://instagram.com/yug_mathur05"
              target="_blank"
              className="hover:text-pink-400 transition duration-300"
            >
              📸 Instagram
            </a>

            <a
              href="https://www.linkedin.com/in/yug-mathur-710612381"
              target="_blank"
              className="hover:text-blue-500 transition duration-300"
            >
              💼 LinkedIn
            </a>

            <a
              href="https://github.com/YugMathur05"
              target="_blank"
              className="hover:text-gray-400 transition duration-300"
            >
              💻 GitHub
            </a>

            <a
              href="tel:"
              className="hover:text-green-400 transition duration-300"
            >
              📞 Contact
            </a>

          </div>

        </div>

      </footer>

    </div>
  )
}

export default Footer