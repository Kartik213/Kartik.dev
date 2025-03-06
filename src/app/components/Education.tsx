const Education = () => {
  return (
    <section className="px-4 py-8" id="Education">
      <h2 className="text-2xl font-semibold mb-6">Education</h2>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <img
            src="/iiitp.jpg"
            alt="IIIT Pune logo"
            className="w-20 h-20 rounded-full object-contain transition-transform duration-300 scale-90"
          />
          <div>
            <h3 className="text-lg font-semibold transition-colors duration-200 group-hover:text-primary">
              Indian Institute of Information Technology, Pune
            </h3>
            <div className="text-muted-foreground flex items-center gap-3 flex-nowrap">
              BTech
              {/* <span>•</span> */}
              {/* <span>Electronics and Communication Engineering</span> */}
            </div>
            <div className="text-muted-foreground flex items-center gap-3 flex-nowrap">
              {/* BTech */}
              {/* <span>•</span> */}
              {/* <span> */}
                Electronics and Communication Engineering
                {/* </span> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start md:items-end text-muted-foreground text-nowrap">
          <div>2024</div>
          <div>
            7.46 <span className="text-sm">CGPA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
