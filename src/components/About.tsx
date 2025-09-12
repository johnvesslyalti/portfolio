export default function About() {
  return (
    <section
      id="about"
      className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
    >
      {/* About Me */}
      <div
        className="p-8 rounded-2xl 
        bg-white/40 dark:bg-gray-900/40
        backdrop-blur-xl border border-white/20 dark:border-white/10
        shadow-md relative overflow-hidden"
      >
        {/* Gloss overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/40 to-transparent opacity-10 pointer-events-none" />

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white relative z-10">
          About Me
        </h3>
        <p className="mt-4 text-base text-gray-700 dark:text-gray-300 leading-relaxed relative z-10">
          I’m a <span className="font-semibold">Full Stack Developer</span>{" "}
          passionate about creating high-quality, user-focused web applications.  
          I enjoy owning features end-to-end: designing data models, building APIs,  
          crafting frontend experiences, and shipping to production.  
          I also practice DSA regularly to keep my problem-solving sharp.
        </p>

        <div className="mt-6 text-sm space-y-2 relative z-10">
          <p className="font-semibold text-gray-900 dark:text-gray-200">
            🎓 Education
          </p>
          <p className="text-gray-700 dark:text-gray-400">
            B.Sc in Computer Science (2021–2024) —{" "}
            <span className="font-medium">Aditya Degree College, Vizianagaram</span>
          </p>
        </div>
      </div>

      {/* Problem Solving */}
      <div
        className="p-8 rounded-2xl 
        bg-white/40 dark:bg-gray-900/40
        backdrop-blur-xl border border-white/20 dark:border-white/10
        shadow-md relative overflow-hidden"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/40 to-transparent opacity-10 pointer-events-none" />

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white relative z-10">
          Problem Solving
        </h3>
        <p className="mt-4 text-base text-gray-700 dark:text-gray-300 leading-relaxed relative z-10">
          Actively solving problems on{" "}
          <span className="font-semibold">LeetCode (Python)</span>.  
          Currently following <span className="font-medium">NeetCode 150</span>{" "}
          to strengthen fundamentals and prepare for technical interviews.
        </p>
      </div>
    </section>
  );
}
