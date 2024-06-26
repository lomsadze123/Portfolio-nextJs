import AboutMe from "@/components/about-me/AboutMe";
import WhatIUse from "@/components/about-me/WhatIUse";

export const metadata = {
  title: "About me",
  description: "Learn more about me and my history.",
};

const About = () => {
  return (
    <main className="pt-10 px-6 md:px-0 md:pt-40 text-slate-300 flex flex-col gap-24 overflow-hidden">
      <AboutMe />
      <WhatIUse />
    </main>
  );
};

export default About;
