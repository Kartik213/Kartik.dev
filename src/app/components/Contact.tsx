import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineGithub, AiOutlineX } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="mt-16 pb-16 px-3" id="Contact">
      <p className="text-2xl font-semibold">Get in touch</p>

      <div className="mt-8 mb-6 flex flex-row justify-center items-center">
        <Link
          href="https://github.com/Kartik213"
          target="_black"
          className="rounded-lg p-2 mx-2 text-4xl transition-all duration-200"
        >
          <AiOutlineGithub className="text-muted-foreground hover:text-primary" />
        </Link>
        <Link
          href="https://x.com/kartik2jan"
          target="_black"
          className="rounded-lg p-2 mx-2 text-4xl transition-all duration-200"
        >
          <AiOutlineX className="text-muted-foreground hover:text-primary" />
        </Link>

        <Link
          href="https://www.linkedin.com/in/kartikgupta02/"
          target="_black"
          className="rounded-lg p-2 mx-2 text-4xl transition-all duration-200"
        >
          <GrLinkedinOption className="text-muted-foreground hover:text-primary" />
        </Link>

        <Link
          href="mailto:kartikg02013@gmail.com"
          target="_black"
          className="rounded-lg p-2 mx-2 text-4xl transition-all duration-200"
        >
          <IoMdMail className="text-muted-foreground hover:text-primary " />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
