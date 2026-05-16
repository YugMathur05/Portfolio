const Skills = () => {
    return (
        <div className="py-10 flex items-center justify-center">
            <div className="bg-white  rounded-2xl p-8 w-[90%] max-w-xl">
                <h1 id="Skill" className="text-3xl font-bold text-center text-gray-600 mb-6">
                    My Skills
                </h1>

                <ul className="space-y-4">
                    <li className="bg-blue-950 text-white px-4 py-3 rounded-lg shadow-sm hover:bg-blue-700 transition">
                        Frontend Development (HTML, CSS, JavaScript, React.js)
                    </li>

                    <li className="bg-emerald-900 text-white px-4 py-3 rounded-lg shadow-sm hover:bg-emerald-700 transition">
                        C++ Programming
                    </li>

                    <li className="bg-cyan-900 text-white px-4 py-3 rounded-lg shadow-sm hover:bg-cyan-700 transition">
                        Data Structures & Algorithms (DSA)
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Skills;