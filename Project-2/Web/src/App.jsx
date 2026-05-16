import { useState } from "react"

import Section1 from './Components/Top/Section1'
import Section2 from "./Components/MiddleContent/Section2"
import Section3 from './Components/Bottom/Section3'

function App() {

    const [darkMode, setDarkMode] = useState(false)

    return (

        <div className={darkMode ? "dark" : ""}>

            <div className="min-h-screen bg-white dark:bg-black transition duration-300">

                <Section1
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                />

                <Section2 />

                <Section3 />

            </div>

        </div>
    )
}

export default App