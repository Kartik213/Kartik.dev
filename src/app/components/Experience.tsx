const Experience = () => {
  return (
    <section className="px-4 py-8" id="Experience">
      <h2 className="text-2xl font-semibold mb-6">Experience</h2>
      <div className="space-y-8">
        <div className="relative flex flex-col md:flex-row gap-4 pb-8 last:pb-0 group">
          <div className="md:opacity-100 opacity-0 absolute left-[19px] top-12 bottom-0 w-px bg-[#1d283a] md:left-[35px]"></div>
          <div className="z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white md:w-[72px] md:h-[72px] transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg overflow-hidden border-2 border-secondary group-hover:border-primary">
            <img
              src="/chainscorehq_logo.jpeg"
              alt="Chainscore logo"
              className="w-full h-full object-contain transition-transform duration-300"
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
              <div>
                <h3 className="text-lg font-semibold transition-colors duration-200 group-hover:text-primary">
                  Software Development Engineer
                </h3>
                <div className="text-muted-foreground flex items-center gap-3 flex-wrap">
                  Chainscore
                  <span>•</span>
                  <span>Pune, Maharashtra</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-calendar w-4 h-4"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                <span>April'24 - Present</span>
              </div>
            </div>
            <ul className="mt-4 space-y-1">
              <li className="flex items-start gap-2 group/item">
                <span className="w-1 h-1 mt-2.5 rounded-full bg-foreground transition-all duration-200 group-hover/item:scale-150 group-hover/item:bg-primary"></span>
                <span className="flex-1 transition-colors duration-200 group-hover/item:text-foreground">
                  Developed frontend interface for a centralized crypto exchange and a NFT questing platform.
                </span>
              </li>
              <li className="flex items-start gap-2 group/item">
                <span className="w-1 h-1 mt-2.5 rounded-full bg-foreground transition-all duration-200 group-hover/item:scale-150 group-hover/item:bg-primary"></span>
                <span className="flex-1 transition-colors duration-200 group-hover/item:text-foreground">
                  Implemented user authentication using Auth0 API's ensuring seamless
                  user experience, security, and performance.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative flex flex-col md:flex-row gap-4 pb-8 last:pb-0 group">
          <div className="md:opacity-100 opacity-0 absolute left-[19px] top-12 bottom-0 w-px bg-[#1d283a] md:left-[35px]"></div>
          <div className="z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white md:w-[72px] md:h-[72px] transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg overflow-hidden border-2 border-secondary group-hover:border-primary">
            <img
              src="/meghplat_logo.jpeg"
              alt="Meghplat logo"
              className="w-full h-full object-contain transition-transform duration-300 scale-135"
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
              <div>
                <h3 className="text-lg font-semibold transition-colors duration-200 group-hover:text-primary">
                  SDE Intern
                </h3>
                <div className="text-muted-foreground flex items-center gap-3 flex-wrap">
                  Meghplat Analytics
                  <span>•</span>
                  <span>Remote</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-calendar w-4 h-4"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                <span>January'24 - April'24</span>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2 group/item">
                <span className="mt-2.5 w-1 h-1 rounded-full bg-foreground transition-all duration-200 group-hover/item:scale-150 group-hover/item:bg-primary"></span>
                <span className="flex-1 transition-colors duration-200 group-hover/item:text-foreground">
                  Designed and developed a seamless e-commerce frontend and a
                  centralized platform for managing multiple stores, optimizing
                  user experience and operational efficiency.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative flex flex-col md:flex-row gap-4 pb-8 last:pb-0 group">
          <div className="md:opacity-100 opacity-0 absolute left-[19px] top-12 bottom-0 w-px h-24 bg-[#1d283a] md:left-[35px]"></div>
          <div className="z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white md:w-[72px] md:h-[72px] transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg overflow-hidden border-2 border-secondary group-hover:border-primary">
            <img
              src="/talenoid_logo.jpeg"
              alt="Talenoid logo"
              className="w-full h-full object-contain transition-transform duration-300"
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
              <div>
                <h3 className="text-lg font-semibold transition-colors duration-200 group-hover:text-primary">
                  Full-Stack Intern
                </h3>
                <div className="text-muted-foreground flex items-center gap-3 flex-wrap">
                  Talenoid
                  <span>•</span>
                  <span>Remote</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-calendar w-4 h-4"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                <span>November'23 - January'24</span>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2 group/item">
                <span className="mt-2.5 w-1 h-1 rounded-full bg-foreground transition-all duration-200 group-hover/item:scale-150 group-hover/item:bg-primary"></span>
                <span className="flex-1 transition-colors duration-200 group-hover/item:text-foreground">
                  Developed a dynamic admin dashboard with a robust seven-tier
                  role-based authentication system, enhancing security and
                  access control, while streamlining development with
                  well-documented APIs.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
