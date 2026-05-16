import LeftSection from './LeftContent/LeftSection'
import RightSection from './RightContent/RightSection'

const Section2 = () => {
    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row">

            {/* Left Side */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
                <LeftSection />
            </div>

            {/* Right Side */}
            <div className="w-full md:w-1/2  flex items-center justify-center">
                <RightSection />
            </div>

        </div>
    )
}

export default Section2