export default function About() {
  return (
    <section className="border p-5 rounded-lg">
      <h2 className="text-xl font-semibold mb-3 border-b border-neutral-400 pb-1">
        About
      </h2>

      <p className="text-lg leading-relaxed">
        Hi 👋 I’m a{" "}
        <span className="font-semibold">Backend-focused Full Stack Developer</span>{" "}
        who enjoys designing reliable, scalable, and secure server-side
        systems. I primarily work with{" "}
        <span className="font-semibold">
          Node.js, Express.js, PostgreSQL
        </span>{" "}
        and modern backend architectures, while using{" "}
        <span className="font-semibold">React and Next.js</span> to deliver clean
        and efficient user interfaces.
      </p>

      <p className="text-lg leading-relaxed mt-4">
        I care deeply about system design, data flow, performance, and
        maintainability. I enjoy breaking down complex backend problems and
        building APIs and services that scale well in real-world applications.
      </p>
    </section>
  );
}
