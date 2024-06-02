"use client";

import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect, useRef } from "react";

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const nameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
          delay: 0.5,
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
  }, []);

  const renderLetters = (name: string, key: string) => {
    if (!name) return [];
    return name.split("").map((letter, index) => (
      <span
        key={`${key}-${index}`}
        className={`name-animation name-animation-${key} inline-block opacity-0`}
      >
        {letter}
      </span>
    ));
  };

  return (
    <div>
      <div ref={nameRef}>
        <h1 className="text-9xl leading-[110px] text-slate-300 font-bold">
          <span>{renderLetters("Beka", "firstname")}</span> <br />
          <span>{renderLetters("Lomsadze", "lastname")}</span>
        </h1>
        <p className="job-title bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl mt-6">
          Fullstack Developer
        </p>
      </div>
    </div>
  );
};

export default Hero;
