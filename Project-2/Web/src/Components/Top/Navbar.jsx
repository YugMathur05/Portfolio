const Navbar = ({ darkMode, setDarkMode }) => {

    return (

        <div
            id="home"
            className="w-full px-4 md:px-8 py-4 bg-white dark:bg-gray-900 shadow-md transition duration-300"
        >

            <ul className="flex flex-wrap items-center gap-4 md:gap-6 list-none">

                {/* Logo */}
                <li className="text-2xl font-bold text-black dark:text-white mr-auto cursor-pointer">
                    Portfolio.
                </li>

                {/* Nav Links */}
                <li className="text-gray-800 dark:text-gray-200 font-medium cursor-pointer hover:text-blue-600 transition duration-300">
                    <a href="#home">Home</a>
                </li>

                <li className="text-gray-800 dark:text-gray-200 font-medium cursor-pointer hover:text-blue-600 transition duration-300">
                    <a href="#about">About</a>
                </li>

                <li className="text-gray-800 dark:text-gray-200 font-medium cursor-pointer hover:text-blue-600 transition duration-300">
                    <a href="#project">Project</a>
                </li>

                <li className="text-gray-800 dark:text-gray-200 font-medium cursor-pointer hover:text-blue-600 transition duration-300">
                    <a href="#Skill">Skills</a>
                </li>

                <li className="text-gray-800 dark:text-gray-200 font-medium cursor-pointer hover:text-blue-600 transition duration-300">
                    <a
                        href="https://instagram.com/yug_mathur05"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Contact
                    </a>
                </li>

                {/* Dark Mode Button */}
                <li className="w-full sm:w-auto">

                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="w-full sm:w-auto px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black font-medium hover:scale-105 transition duration-300"
                    >

                        {darkMode ? "Light Mode" : "Dark Mode"}

                    </button>

                </li>

                {/* Hire Me Button */}
                <li className="w-full sm:w-auto">

                    <button className="w-full sm:w-auto px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-300">

                        <a href="mailto:yug.m0578@gmail.com">
                            Hire Me
                        </a>

                    </button>

                </li>

            </ul>

        </div>

    )
}

export default Navbar