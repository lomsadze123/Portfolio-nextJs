"use client";
import Image from "next/image";
import Me from "../../assets/me.png";
import useScroll from "@/hooks/scroll/useScroll";

const Avatar = () => {
  const { component } = useScroll();

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
