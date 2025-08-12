export default function About() {
  return (
    <section id="about" className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800">
        <h3 className="text-xl font-semibold">About Me</h3>
        <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
          I’m a Full Stack Developer passionate about creating high-quality,
          user-focused web applications. I enjoy owning features end-to-end:
          designing data models, building APIs, crafting frontend experiences,
          and shipping to production. I practice DSA regularly to keep my
          problem-solving sharp.
        </p>
        <div className="mt-4 text-sm space-y-2">
          <p><strong>Education</strong></p>
          <p>
            B.Sc in Computer Science (2021–2024) — Aditya Degree College, Vizianagaram
          </p>
        </div>
      </div>

      <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800">
        <h3 className="text-xl font-semibold">Problem Solving</h3>
        <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
          Active on LeetCode (Python). Following NeetCode 150 for DSA fundamentals and interview prep.
        </p>
      </div>
    </section>
  );
}
