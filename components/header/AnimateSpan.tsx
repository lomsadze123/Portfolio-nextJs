"use client";
import { usePathname } from "next/navigation";

const AnimateSpan = ({ path }: { path: string }) => {
  const pathname = usePathname();
  const isActive = pathname === path;
  return (
    <span
      className={`absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0 ${
        isActive
          ? "translate-y-7 md:translate-y-6"
          : "translate-y-16 md:translate-y-8"
      }`}
    ></span>
  );
};

export default AnimateSpan;
