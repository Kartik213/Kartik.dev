import Image from "next/image";
import About from "./components/About";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";
import Education from "./components/Education";
import { RiReactjsFill, RiNextjsLine, RiTailwindCssLine } from "react-icons/ri";

export default function Home() {
  return (
    <div className="text-font-primary">
      <Header />
      <div className="px-0 xl:px-72 lg:px-32 md:px-10">
        <main>
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
      <footer className="border-t border-[#1d283a] px-0 xl:px-72 lg:px-48 sm:px-8 md:px-24 py-4 text-center flex sm:flex-row flex-col gap-4 justify-between items-center">
        <Link
          href="https://github.com/Kartik213/Kartik.dev"
          target="_black"
          className="rounded-lg p-2 mx-2 text-4xl transition-all duration-200"
        >
          <AiOutlineGithub className="text-muted-foreground hover:text-primary" />
        </Link>
        <div>
          <h5 className="text-center">Made with</h5>
          <div className="flex flex-row justify-center items-center py-1 gap-2 max-w-52 flex-wrap mx-auto">
            <Link
              href={"https://nextjs.org/"}
              target="_blank"
              className="w-fit px-3 py-1 flex flex-row items-center gap-2 bg-primary/10 text-primary text-sm rounded-full transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              <RiNextjsLine />
              NextJs
            </Link>
            <Link
              href={"https://react.dev/"}
              target="_blank"
              className="w-fit px-3 py-1 flex flex-row items-center gap-2 bg-primary/10 text-primary text-sm rounded-full transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              <RiReactjsFill />React
            </Link>
            <Link
              href={"https://tailwindcss.com/"}
              target="_blank"
              className="w-fit px-3 py-1 flex flex-row items-center gap-2 bg-primary/10 text-primary text-sm rounded-full transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              <RiTailwindCssLine />
              TailwindCSS
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-center text-primary">
          © {new Date().getFullYear()} Kartik Gupta
        </div>
      </footer>
    </div>
  );
}
