import GitHubCalendar from "react-github-calendar";

export default function GitHub() {
  // Define the URL. You can add a timestamp to force refresh if needed, 
  // but your API already handles caching headers.
  const streakUrl = "https://johnvesslyalti-streakforge.vercel.app/api?user=johnvesslyalti";

  return (
    <section className="border p-5 rounded-lg">
      <h2 className="text-xl font-semibold border-b border-neutral-400 mb-3">
        GitHub Contributions
      </h2>

      <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-2">
        Tracking my GitHub contributions and open-source activity over the past year.
      </p>

      {/* 1. The Calendar */}
      <div className="github-calendar-wrapper w-full flex justify-center">
        <GitHubCalendar
          username="johnvesslyalti"
          blockSize={12}
          blockMargin={4}
          fontSize={14}
        />
      </div>

      {/* 2. Your Streak Stats (Use an img tag!) */}
      <div className="mt-6 w-full flex justify-center">
        <img
          src={streakUrl}
          alt="GitHub Streak Stats"
          className="w-full max-w-[520px] h-auto rounded-lg shadow-sm"
          // Optional: Add loading="lazy" for performance
          loading="lazy"
        />
      </div>
    </section>
  );
}