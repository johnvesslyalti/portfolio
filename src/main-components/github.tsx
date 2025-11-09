import GitHubCalendar from "react-github-calendar";

export default function GitHub() {
  return (
    <section className="border p-5 rounded-lg">
      <h2 className="text-xl font-semibold border-b border-neutral-400 mb-3">
        GitHub Contributions
      </h2>

      <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-2">
        Track of my GitHub contributions and open-source activity over the past
        year.
      </p>
      <div className="github-calendar-wrapper w-full">
        <GitHubCalendar
          username="johnvesslyalti"
          blockSize={12}
          blockMargin={4}
          fontSize={14}
        />
      </div>
    </section>
  );
}
