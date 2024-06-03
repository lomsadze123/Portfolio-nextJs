import { ArrowIcon } from "../icons/Icons";
import Avatar from "./Avatar";

const AboutMe = () => {
  return (
    <div className="flex justify-between items-start gap-24">
      <div>
        <h1 className="font-bold leading-tight tracking-tight text-7xl md:text-9xl col-start-1">
          About Beka
        </h1>
        <p className="prose prose-xl prose-slate prose-invert col-start-1 text-xl mt-6">
          Hey, I'm Beka! I grew up in the Pacific Northwest and love all things
          creative. From the misty forests to the vibrant city streets, my
          surroundings have always fueled my passion for design and coding.
          <br />
          <br />
          As a self-taught developer, I found my calling in blending artistic
          flair with technical skill. My journey has led me to specialize in
          front-end development, where I craft interactive experiences that are
          not just functional, but also visually stunning.
          <br />
          <br />
          When I'm not coding, you'll find me experimenting with digital art or
          exploring the latest in web animation.
          <br />
          <br />
          Join me as I continue to push the boundaries of what's possible in the
          digital world!
        </p>
        <button className="group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 mt-6 px-4 py-2 font-bold transition-transform ease-out hover:scale-105">
          <span className="absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0"></span>
          <span className="relative flex items-center justify-center gap-2 text-slate-900">
            Resume
            <ArrowIcon />
          </span>
        </button>
      </div>
      <Avatar />
    </div>
  );
};

export default AboutMe;
