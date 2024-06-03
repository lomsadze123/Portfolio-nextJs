"use client";
import Image from "next/image";
import Me from "../../assets/me.png";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Avatar = () => {
  const component = useRef(null);

  useGSAP(() => {
    gsap.context(() => {
      gsap.fromTo(
        ".avatar",
        {
          opacity: 0,
          scale: 1.4,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.3,
          ease: "power3.inOut",
        }
      );
    });

    window.onmousemove = (e) => {
      if (!component.current) return;
      const componentRoot = (
        component.current as HTMLElement
      ).getBoundingClientRect();
      const componentCenterX = componentRoot.left + componentRoot.width / 2;

      let componentParent = {
        x: (e.clientX - componentCenterX) / componentRoot.width / 2,
      };

      let distFromCenter = 1 - Math.abs(componentParent.x);

      gsap
        .timeline({
          defaults: {
            duration: 0.5,
            overwrite: "auto",
            ease: "power3.out",
          },
        })
        .to(
          ".avatar",
          {
            rotation: gsap.utils.clamp(-2, 2, 5 * componentParent.x),
            duration: 0.5,
          },
          0
        )
        .to(
          ".highlight",
          {
            opacity: distFromCenter - 0.7,
            x: (-10 + 20) & componentParent.x,
            duration: 0.5,
          },
          0
        ),
        component;
    };
  });

  return (
    <div
      ref={component}
      className="relative h-full w-full row-start-1 max-w-sm md:col-start-2 md:row-end-3"
    >
      <div className="avatar aspect-square overflow-hidden rounded-3xl border-2 border-slate-700 opacity-0">
        <Image
          src={Me}
          alt={"My profile image"}
          width={743}
          height={743}
          className="h-full w-full object-fill"
          priority={true}
        />
      </div>
      <div className="highlight absolute inset-0 hidden w-full scale-110 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 md:block"></div>
    </div>
  );
};

export default Avatar;
