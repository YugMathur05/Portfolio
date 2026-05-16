const Navbar = () => {
    return (
        <div>
            <div id="home" className="w-full px-4 md:px-8 py-4 bg-white ">

                <ul className="flex flex-wrap items-center gap-4 md:gap-6 list-none">

                    <li className="text-2xl font-bold text-black mr-auto cursor-pointer">
                        Portfolio.
                    </li>

                    <li className="text-gray-800 font-medium cursor-pointer hover:text-blue-600 transition duration-300">
                        <a href="#home">Home</a>
                    </li>

                    <li className="text-gray-800 font-medium cursor-pointer hover:text-blue-600 transition duration-300">
                        <a href="#about">About</a>
                    </li>

                    <li className="text-gray-800 font-medium cursor-pointer hover:text-blue-600 transition duration-300">
                        <a href="#project">Project</a>
                    </li>

                    <li className="text-gray-800 font-medium cursor-pointer hover:text-blue-600 transition duration-300">
                        <a href="#Skill">Skills</a>
                    </li>

                    <li className="text-gray-800 font-medium cursor-pointer hover:text-blue-600 transition duration-300">
                        <a href="https://instagram.com/yug_mathur05">Contact</a>
                    </li>

                    <li className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-4 py-2 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition duration-300">
                            Dark Mode
                        </button>
                    </li>

                    <li className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-300">
                            <a href="mailto:yug.m0578@gmail.com">Hire Me</a>
                        </button>
                    </li>

                </ul>

            </div>
        </div>
    )
}

export default Navbar