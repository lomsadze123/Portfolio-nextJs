import AboutMe from "@/components/about-me/AboutMe";
import WhatIUse from "@/components/about-me/WhatIUse";

export const metadata = {
  title: "About me",
  description: "Learn more about me and my history.",
};

const About = () => {
  return (
    <main className="max-w-[1250px] mx-auto pt-40 text-slate-300 flex flex-col gap-24">
      <AboutMe />
      <WhatIUse />
    </main>
  );
};

export default About;
