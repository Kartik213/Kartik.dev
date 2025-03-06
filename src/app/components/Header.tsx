import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-xs z-20 py-4 border-b border-[#1a2536]">
      <nav className="flex flex-row justify-end items-center px-0 xl:px-72 lg:px-48 sm:px-8 md:px-24">
        <Link
          href="https://drive.google.com/file/d/1CDw8ta544O29qNaaxHNICQDykxZE5JaK/view?usp=sharing"
          target="_black"
          className="rounded-lg bg-foreground text-md transition-all duration-200 text-background p-1 px-2 flex flex-row items-center gap-1"
        >
            Resume
            <TbExternalLink className="h-4 w-4" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
