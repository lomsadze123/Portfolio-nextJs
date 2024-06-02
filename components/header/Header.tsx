import Link from "next/link";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <header className="bg-white font-bold w-full max-w-[1250px] mx-auto px-4 py-2 rounded-xl fixed left-0 right-0 top-4 z-10 flex items-center justify-between">
      <Link
        href="/"
        className="text-xl font-extrabold tracking-tighter text-slate-900"
      >
        Beka Lomsadze
      </Link>
      <nav>
        <ul className="flex items-center gap-1">
          <NavLink href="/about" name="About" />
          <span className="text-4xl font-thin leading-[0] text-slate-400 md:inline">
            /
          </span>
          <NavLink href="/projects" name="Projects" />
          <span className="text-4xl font-thin leading-[0] text-slate-400 md:inline">
            /
          </span>
          <NavLink href="/blog" name="Blog" />
          <li>
            <Link
              className="group relative overflow-hidden flex items-center justify-center gap-2 border-2 border-slate-900 px-4 rounded-md py-2 ml-3 transition-transform ease-out hover:scale-105"
              href="/contact"
            >
              <span className="absolute inset-0 z-0 h-full bg-yellow-300 transition-transform duration-300 ease-in-out translate-y-9 group-hover:translate-y-0"></span>
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
    </header>
  );
};

export default Header;
