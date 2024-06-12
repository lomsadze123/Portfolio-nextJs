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
        time="2024 - Present"
        place="Brain House"
        review="One standout project is the driver's license application I'm leading at Bain House. This platform enables users to purchase practice test videos and monitor their progress, unlocking new content upon achieving milestones. My responsibilities span both frontend and backend development. A key challenge involved implementing robust authorization and authentication mechanisms, for which I utilized Google Cloud and PassportJS.."
      />
      <Achievements
        title="Education"
        job="Bachelor of Information Technology"
        time="2020 - 2025"
        place="BTU"
        review=" I have focused on building a strong foundation in computer science, emphasizing programming fundamentals, deep learning algorithms, and core computer science principles."
      />
    </div>
  );
};

export default WhatIUse;
