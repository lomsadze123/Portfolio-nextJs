import Link from "next/link";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="bg-white font-bold w-full max-w-[1250px] mx-auto p-4 md:py-2 rounded-b-lg md:rounded-xl md:fixed left-0 right-0 top-4 z-10 flex items-center justify-between">
      <Link
        href="/"
        className="text-xl font-extrabold tracking-tighter text-slate-900"
      >
        Beka Lomsadze
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
