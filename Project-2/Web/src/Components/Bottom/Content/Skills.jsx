const Skills = () => {
    return (
        <div className="py-10 flex items-center justify-center bg-white dark:bg-black transition duration-300">

            <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-8 w-[90%] max-w-xl shadow-lg transition duration-300">

                <h1
                    id="Skill"
                    className="text-3xl font-bold text-center text-gray-700 dark:text-white mb-6"
                >
                    My Skills
                </h1>

                <ul className="space-y-4">

                    <li className="bg-blue-950 text-white px-4 py-3 rounded-lg shadow-sm hover:bg-blue-700 transition duration-300">
                        Frontend Development (HTML, CSS, JavaScript, React.js)
                    </li>

                    <li className="bg-emerald-900 text-white px-4 py-3 rounded-lg shadow-sm hover:bg-emerald-700 transition duration-300">
                        C++ Programming
                    </li>

                    <li className="bg-cyan-900 text-white px-4 py-3 rounded-lg shadow-sm hover:bg-cyan-700 transition duration-300">
                        Data Structures & Algorithms (DSA)
                    </li>

                </ul>

            </div>

        </div>
    );
};

export default Skills