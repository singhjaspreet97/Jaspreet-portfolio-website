import { styles } from "../styles";
import nameImage from "../assets/name.jpg";
import { SectionWrapper } from "../hoc";

const Hero = () => {
  return (
    <div className={`${styles.paddingX} w-full flex flex-col md:flex-row items-center gap-5`}>
      {/* Left Section - Text */}
      <div className="flex flex-row gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Jaspreet</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop software, user interfaces,<br className="sm:block hidden" />
            web applications and provide <br className="sm:block hidden" />
            Technical Support
          </p>
        </div>
      </div>

      {/* Right Section - Profile Image */}
      <div className="xl:flex-1 flex justify-center items-center mt-10 md:mt-0">
        <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#915EFF] shadow-card">
          <img src={nameImage} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Hero, "");