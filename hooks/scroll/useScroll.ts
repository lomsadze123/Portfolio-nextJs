import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const useScroll = () => {
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
  return { component };
};

export default useScroll;
