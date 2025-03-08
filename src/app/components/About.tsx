'use client'
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineGithub, AiOutlineX } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";

const About = () => {
  return (
    <section className="my-8 flex flex-row items-center justify-between px-3">
      <div>
        <h1 className="text-4xl font-bold">Kartik Gupta</h1>
        <div className="flex flex-row items-end gap-4 py-4">
          <Link
            href="https://github.com/Kartik213"
            target="_black"
            className="rounded-lg text-4xl transition-all duration-200"
          >
            <AiOutlineGithub className="text-muted-foreground hover:text-primary h-6 w-6" />
          </Link>
          <Link
            href="https://x.com/kartik2jan"
            target="_black"
            className="rounded-lg text-4xl transition-all duration-200"
          >
            <AiOutlineX className="text-muted-foreground hover:text-primary h-6 w-6" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/kartikgupta02/"
            target="_black"
            className="rounded-lg text-4xl transition-all duration-200"
          >
            <GrLinkedinOption className="text-muted-foreground hover:text-primary h-6 w-6" />
          </Link>

          <Link
            href="mailto:kartikg02013@gmail.com"
            onClick={(e) => {
              window.open("mailto:kartikg02013@gmail.com", "_blank");
              e.preventDefault(); // Prevent default navigation behavior
            }}
            className="rounded-lg text-4xl transition-all duration-200"
          >
            <IoMdMail className="text-muted-foreground hover:text-primary h-6 w-6" />
          </Link>
        </div>
        <p className="mt-2 text-lg">
          Building Web apps, proficient in Frontend.
        </p>
        <p className="mt-4 text-gray-400">
          Software Engineer from India with experience in React, Tailwind,
          Next.js and more. Solving problems where design and engineering
          intersect. Currently exploring blockchain development. Always open to
          exciting opportunities. Let's connect!
        </p>
      </div>
      <div className="hidden md:block">
        <img
          className="h-[200px] w-[200px] object-cover rounded-full"
          alt=""
          src="/pfp.jpg"
        />
      </div>
    </section>
  );
};

export default About;
