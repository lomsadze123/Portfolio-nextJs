"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowIcon } from "../icons/Icons";
import gsap from "gsap";
import me from "../../assets/me.png";
import { useGSAP } from "@gsap/react";

const ProjectHover = () => {
  const component = useRef(null);
  const [currentItem, setCurrentItem] = useState<null | number>(null);
  const revealRef = useRef(null);
  const textRef = useRef(null);
  const lastMousePos = useRef({ x: 0, y: 0 });

  const onMouseEnter = (index: number) => {
    setCurrentItem(index);
    gsap.to(revealRef.current, { opacity: 1, duration: 0.5 });
  };

  const onMouseLeave = () => {
    setCurrentItem(null);
    gsap.to(revealRef.current, { opacity: 0, duration: 0.5 });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mousePos = { x: e.clientX, y: e.clientY - window.scrollY };
      const speed = Math.sqrt(Math.pow(mousePos.x - lastMousePos.current.x, 2));

      if (currentItem !== null) {
        const maxY = window.innerHeight - 350;
        const maxX = window.innerWidth - 250;

        gsap.to(revealRef.current, {
          x: gsap.utils.clamp(0, maxX, mousePos.x - 110),
          y: gsap.utils.clamp(0, maxY, mousePos.y - 160),
          rotation: speed * (mousePos.x > lastMousePos.current.x ? 1 : -1),
          ease: "back.out(2)",
          duration: 1.3,
        });

        lastMousePos.current = mousePos;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [currentItem]);

  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      {
        translateY: 100,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
      }
    );
  });

  return (
    <section ref={component}>
      <div
        ref={textRef}
        className="border-y border-y-slate-100 py-10 flex items-center justify-between cursor-pointer"
        onMouseEnter={() => onMouseEnter(1)}
        onMouseLeave={onMouseLeave}
      >
        <div>
          <h2 className="text-3xl font-bold">Next.js Todo App</h2>
          <h3 className="text-yellow-400">Next.js</h3>
        </div>
        <button className="ml-auto flex items-center gap-2 text-xl font-medium md:ml-0">
          <span>View Project</span>
          <ArrowIcon />
        </button>
      </div>
      <div
        ref={revealRef}
        className="pointer-events-none absolute left-0 top-0 -z-10 h-[320px] w-[220px] rounded-lg bg-cover bg-center opacity-0 transition-[background] duration-300"
        style={{ backgroundImage: `url(${me.src})` }}
      ></div>
    </section>
  );
};

export default ProjectHover;