import Link from "next/link";
import AnimateSpan from "./AnimateSpan";

const NavLink = ({ href, name }: { href: string; name: string }) => {
  return (
    <li>
      <Link
        href={href}
        className="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900"
      >
        <AnimateSpan path={href} />
        <span className="relative">{name}</span>
      </Link>
    </li>
  );
};

export default NavLink;
