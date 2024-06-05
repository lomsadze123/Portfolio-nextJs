import Achievements from "./Achievements";
import TechList from "./TechList";

const WhatIUse = () => {
  return (
    <div className="overflow-hidden">
      <h2 className="max-w-[1250px] mx-auto font-bold leading-tight tracking-tight text-slate-300 text-7xl md:text-9xl mb-24">
        What I use
      </h2>
      <TechList />
      <Achievements
        title="Experience"
        job="Fullstack (MERN) Developer"
        time="2019 - Present"
        place="Google"
        review="Led the design team in creating visually stunning and interactive web
        experiences. Implemented cutting-edge UI/UX designs, collaborated with
        developers to bring concepts to life, and ensured brand consistency
        across digital platforms."
      />
      <Achievements
        title="Education"
        job="Bachelor of Information Technology"
        time="2020 - 2025"
        place="BTU"
        review="Pursued a Master's degree in Human-Computer Interaction, specializing in designing user-friendly interfaces and conducting user research. Gained expertise in creating seamless digital experiences that prioritize user needs and preferences."
      />
    </div>
  );
};

export default WhatIUse;
