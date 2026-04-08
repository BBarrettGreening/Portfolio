import Link from "next/link";

const NavLink = ({ href, title }) => {
    return (
        <Link
            href={href}
            className="px-4 py-2 text-sm font-medium text-os-text-dim hover:text-os-text hover:bg-os-surface rounded transition-all duration-150"
        >
            {title}
        </Link>
    );
}

export default NavLink;
