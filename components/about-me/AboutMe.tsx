import { ArrowIcon } from "../icons/Icons";
import Avatar from "./Avatar";

const AboutMe = () => {
  return (
    <div className="max-w-[1250px] mx-auto flex flex-col-reverse md:flex-row justify-between items-start gap-6 md:gap-24">
      <div>
        <h1 className="font-bold leading-tight tracking-tight text-7xl md:text-9xl col-start-1">
          About Beka
        </h1>
        <p className="prose prose-xl prose-slate prose-invert col-start-1 text-xl mt-6">
          Hey, I&apos;m Beka! I grew up in the Pacific Northwest and love all
          things creative. From the misty forests to the vibrant city streets,
          my surroundings have always fueled my passion for design and coding.
          <br />
          <br />
          As a student at the Business and Technology University, I&apos;m
          pursuing a degree in Information Technology. I focus on building a
          strong foundation in computer science, emphasizing programming
          fundamentals, deep learning algorithms, and core computer science
          principles.
          <br />
          <br />
          When I&apos;m not coding, you&apos;ll find me experimenting with
          digital art or exploring the latest in web animation.
          <br />
          <br />
          Join me as I continue to push the boundaries of what&apos;s possible
          in the digital world!
        </p>
        <a href="./Beka Lomsadze.pdf">
          <button className="group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 mt-6 px-4 py-2 font-bold transition-transform ease-out hover:scale-105">
            <span className="absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0"></span>
            <span className="relative flex items-center justify-center gap-2 text-slate-900">
              Resume
              <ArrowIcon />
            </span>
          </button>
        </a>
      </div>
      <Avatar />
    </div>
  );
};

export default AboutMe;
