import { MoveRight } from "lucide-react";

const Skills = () => {
  return (
    <section className="my-16 px-3" id="Skills">
      <p className="text-2xl font-semibold">Skills</p>
      <div className="text-md md:text-xl my-6 flex flex-col gap-4">
        <p className="flex flex-row flex-wrap gap-2 border-b-[0.1px] py-1 border-gray-500 items-center cursor-pointer group transition-all duration-300">
          <MoveRight className="w-8 h-8 group-hover:scale-120 transition-all duration-300" />
          <span className="font-semibold group-hover:pl-3 transition-all duration-300">
            Javascript, Typescript, C++
          </span>
        </p>
        <p className="flex flex-row flex-wrap gap-2 border-b-[0.1px] py-1 border-gray-500 items-center cursor-pointer group transition-all duration-300">
          <MoveRight className="w-8 h-8 group-hover:scale-120 transition-all duration-300" />
          <span className="font-semibold group-hover:pl-3 transition-all duration-300">
            HTML, CSS, Next.js, React.js
          </span>
        </p>
        <p className="flex flex-row flex-wrap gap-2 border-b-[0.1px] py-1 border-gray-500 items-center cursor-pointer group transition-all duration-300">
          <MoveRight className="w-8 h-8 group-hover:scale-120 transition-all duration-300" />
          <span className="font-semibold group-hover:pl-3 transition-all duration-300">Tailwind CSS, Shadcn</span>
        </p>
        {/* <p className='flex flex-row flex-wrap gap-2 border-b-[0.1px] py-1 border-gray-500 items-center cursor-pointer group transition-all duration-300' >
          <MoveRight className='w-8 h-8 group-hover:scale-120 transition-all duration-300'/>
          <span className='font-semibold group-hover:pl-3 transition-all duration-300'>Context API and Redux toolkit</span>
          &nbsp;as my State Management tool
        </p> */}
        <p className="flex flex-row flex-wrap gap-2 border-b-[0.1px] py-1 border-gray-500 items-center cursor-pointer group transition-all duration-300">
          <MoveRight className="w-8 h-8 group-hover:scale-120 transition-all duration-300" />
          <span className="font-semibold group-hover:pl-3 transition-all duration-300">
            ExpressJs
          </span>
        </p>
        <p className="flex flex-row flex-wrap gap-2 border-b-[0.1px] py-1 border-gray-500 items-center cursor-pointer group transition-all duration-300">
          <MoveRight className="w-8 h-8 group-hover:scale-120 transition-all duration-300" />
          <span className="font-semibold group-hover:pl-3 transition-all duration-300">
            Prisma, Mongoose
          </span>
        </p>
        <p className="flex flex-row flex-wrap gap-2 border-b-[0.1px] py-1 border-gray-500 items-center cursor-pointer group transition-all duration-300">
          <MoveRight className="w-8 h-8 group-hover:scale-120 transition-all duration-300" />
          <span className="font-semibold group-hover:pl-3 transition-all duration-300">
            MongoDB, PostgreSQL
          </span>
        </p>
      </div>
    </section>
  );
}

export default Skills;
