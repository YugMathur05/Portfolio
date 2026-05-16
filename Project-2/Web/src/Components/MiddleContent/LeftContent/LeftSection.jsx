import Logo from './Logo'
import TextContent from './TextContent'

const LeftSection = () => {
  return (

    <div className="w-full px-10 py-16 flex flex-col justify-center bg-white dark:bg-black transition duration-300">

      <Logo />

      <TextContent />

    </div>

  )
}

export default LeftSection