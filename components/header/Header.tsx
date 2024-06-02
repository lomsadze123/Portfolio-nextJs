import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white w-full max-w-[1250px] mx-auto px-4 py-2 rounded-xl fixed left-0 right-0 top-4 z-10 flex items-center justify-between">
      <Link href="/" className="font-bold text-lg">
        Beka Lomsadze
      </Link>
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/about">About</Link>
          </li>
          <span className="text-4xl font-thin leading-[0] text-slate-400 md:inline">
            /
          </span>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <span className="text-4xl font-thin leading-[0] text-slate-400 md:inline">
            /
          </span>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link
              className="flex items-center justify-center gap-2 border-2 border-black rounded-md p-2 w-[117px] ml-2"
              href="/contact"
            >
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
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
