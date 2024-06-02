"use client";
import Link from "next/link";
import MenuButton from "./MenuButton";
import NavLink from "./NavLink";
import useResize from "@/hooks/resize/useResize";

const Navigation = () => {
  const { hide, setHide } = useResize();

  return !hide ? (
    <nav
      onClick={() => setHide(true)}
      className={`absolute top-0 left-0 bottom-0 right-0 bg-white z-10 text-right p-6 md:p-0 md:static md:bg-transparent md:text-left ${
        hide ? "" : "menu-enter"
      }`}
    >
      <MenuButton hide={hide} setHide={setHide} />
      <ul className="md:flex md:items-center md:gap-1">
        <NavLink href="/about" name="About" />
        <span className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline">
          /
        </span>
        <NavLink href="/projects" name="Projects" />
        <span className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline">
          /
        </span>
        <NavLink href="/blog" name="Blog" />
        <li>
          <Link
            className="group relative overflow-hidden max-w-[118px] ml-auto flex items-center justify-center gap-2 border-2 border-slate-900 px-4 rounded-md py-2 md:ml-3 transition-transform ease-out lg:hover:scale-105"
            href="/contact"
          >
            <span className="absolute inset-0 z-0 h-full bg-yellow-300 transition-transform duration-300 ease-in-out translate-y-9 lg:group-hover:translate-y-0"></span>
            <span className="relative flex items-center justify-center gap-2">
              Contact
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="inline-block"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
              </svg>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  ) : (
    <MenuButton hide={hide} setHide={setHide} />
  );
};

export default Navigation;
