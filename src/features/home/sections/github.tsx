export default function GitHub() {
  return (
    <section className="border p-5 rounded-lg">
      <h2 className="text-xl font-semibold border-b border-neutral-400 mb-3">
        GitHub Contributions
      </h2>

      <div className="w-full flex justify-center mt-4">
        <img
          src="https://ghchart.rshah.org/johnvesslyalti"
          alt="Johnvessly's GitHub Contribution Chart"
          width="100%"
        />
      </div>
    </section>
  );
}