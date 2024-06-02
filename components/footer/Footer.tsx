import Link from "next/link";
import { GithubIcon, LinkedInIcon } from "../icons/Icons";

const Footer = () => {
  const list = ["About", "Projects", "Blog"];
  return (
    <footer className="text-slate-100 mt-40 text-center flex flex-col justify-center items-center gap-8 pb-20 md:pb-24 md:flex-row max-w-[1250px] md:justify-between md:mx-auto">
      <div className="md:flex md:items-center">
        <Link
          className="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 lg:hover:text-yellow-400 block mb-1"
          href="/"
        >
          Beka Lomsadze
        </Link>
        <span className="hidden mx-4 text-4xl font-thin leading-[0] text-slate-400 md:inline">
          /
        </span>
        <small className="text-sm text-slate-300 ">© 2024 Beka Lomsadze</small>
      </div>
      <nav>
        <ul className="flex justify-center items-center gap-4">
          {list.map((i) => (
            <li
              className="flex items-center gap-4 py-1 text-base font-bold text-slate-100 transition-colors duration-150 lg:hover:text-yellow-400"
              key={i}
            >
              <Link href={"/" + i.toLowerCase()}>{i}</Link>
              {i !== "Blog" && (
                <span className="text-4xl font-thin leading-[0] text-slate-400 md:inline">
                  /
                </span>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center justify-center gap-4">
        <GithubIcon />
        <LinkedInIcon />
      </div>
    </footer>
  );
};

export default Footer;
