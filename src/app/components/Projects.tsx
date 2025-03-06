import EmblaCarousel from "./carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

type ProjectsType = {
  img: string;
  title: string;
  description: string;
  github: string;
  demo?: string;
  techStack: string[];
};

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
const PROJECTS: ProjectsType[] = [
  {
    img: "/Truefeedback.png",
    title: "TrueFeedback",
    description:
      "Enabled anonymous messaging through unique shareable links, with features for viewing and deleting messages.",
    github: "https://github.com/Kartik213/trueFeedback",
    techStack: ["ReactJs", "ExpressJs", "TailwindCSS", "Mongoose", "MongoDB"],
  },
  {
    img: "/DivideExpert.png",
    title: "Divide Expert",
    description: "Developed a bill-splitting app with secure authentication, group management, and optimized debt settlement.",
    github: "https://github.com/Kartik213/DivideXpert",
    techStack: ["ReactJs", "ExpressJs", "TailwindCSS", "Mongoose", "MongoDB"],
  },
  {
    img: "/Yelpcamp.png",
    title: "Yelpcamp",
    description:
      "Built a campsite listing web app enabling users to upload campsites, post reviews, and perform CRUD operations.",
    github: "https://github.com/Kartik213/yelpCamp",
    techStack: ["ExpressJs", "EJS", "Mongoose", "MongoDB"],
  },
];

const Projects = () => {
  return (
    <section className="px-4 py-8" id="Projects">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <EmblaCarousel projects={PROJECTS} options={OPTIONS} />
    </section>
  );
};

export default Projects;
