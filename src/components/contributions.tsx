import GitHubCalendar from "react-github-calendar";

const Contributions = () => {
  return (
    <div className="p-4 rounded-2xl shadow-md w-full">
      <div className="overflow-x-hidden">
        <GitHubCalendar
          username="johnvesslyalti"
          blockSize={12}
          blockMargin={4}
          fontSize={14}
        />
      </div>
    </div>
  );
};

export default Contributions;
