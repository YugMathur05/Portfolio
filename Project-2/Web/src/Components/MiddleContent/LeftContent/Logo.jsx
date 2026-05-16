const Logo = () => {
    return (
        <div id="about" className="flex items-center gap-6 mb-8">

            {/* Instagram */}
            <a
                href="https://instagram.com/yug_mathur05"
                className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-md"
            >
                <img
                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                    src="https://images.icon-icons.com/2972/PNG/512/instagram_logo_icon_186894.png"
                    alt="instagram"
                />
            </a>

            {/* LinkedIn */}
            <a
                href="https://www.linkedin.com/in/yug-mathur-710612381"
                className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-md"
            >
                <img
                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/3840px-LinkedIn_icon_circle.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
                    alt="linkedin"
                />
            </a>

            {/* GitHub */}
            <a
                href="https://github.com/YugMathur05"
                className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-md"
            >
                <img
                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="github"
                />
            </a>

        </div>
    )
}

export default Logo