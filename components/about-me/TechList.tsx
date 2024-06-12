"use client";
import techStacks from "@/data/stacks/techStacks";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const TechList = () => {
  const component = useRef(null);

  useGSAP(() => {
    gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          markers: true,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: "power1.inOut",
        }
      );
    }, component);
  });

  return (
    <section ref={component}>
      <ul className="tech-row mb-8 flex flex-wrap items-center justify-between gap-4 gap-x-20 -ml-[600px] text-slate-700 w-[4200px] overflow-hidden">
        {techStacks.map((stack, index) => (
          <li
            className="tech-item text-5xl md:text-8xl font-extrabold uppercase tracking-tighter list-disc"
            key={Object.keys(stack)[0] + index}
            style={{ color: stack[Object.keys(stack)[0]] }}
          >
            {Object.keys(stack)[0]}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TechList;
