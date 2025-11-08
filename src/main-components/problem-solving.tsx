import { BadgeCarousel } from "@/components/badges-carousel";

export default function ProblemSolving() {
  return (
    <section className="border p-5 rounded-lg">
      <h2 className="text-xl font-semibold border-b border-neutral-400 mb-3">
        Problem Solving
      </h2>
      <p className="text-lg leading-relaxed">
        I love solving problems and exploring{" "}
        <span className="font-semibold">Data Structures & Algorithms</span>.
        Regular practice on <span className="font-semibold">LeetCode</span> has
        helped me sharpen my problem-solving skills and improve coding
        efficiency.
      </p>
      <BadgeCarousel />
    </section>
  );
}
