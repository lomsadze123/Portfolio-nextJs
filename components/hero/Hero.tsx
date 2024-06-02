"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";
import RenderLetters from "./RenderLetters";

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const nameRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".name-animation",
        {
          x: -100,
          opacity: 0,
          rotate: -10,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease: "elastic.out(1,0.3)",
          duration: 1,
          transformOrigin: "left top",
          delay: 0.2,
          stagger: {
            each: 0.1,
            from: "random",
          },
        }
      );

      tl.fromTo(
        ".job-title",
        {
          y: 20,
          opacity: 0,
          scale: 1.2,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "elastic.out(1,0.3)",
        }
      );
    }, nameRef);
  });

  return (
    <>
      <div ref={nameRef}>
        <h1 className="text-6xl md:text-9xl md:leading-[110px]  font-bold">
          <span className="text-slate-300">
            <RenderLetters name="Beka" keyword="firstname" />
          </span>{" "}
          <br />
          <span className="text-slate-500">
            <RenderLetters name="Lomsadze" keyword="lastname" />
          </span>
        </h1>
        <p className="job-title bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl mt-6">
          Fullstack Developer
        </p>
      </div>
    </>
  );
};

export default Hero;
