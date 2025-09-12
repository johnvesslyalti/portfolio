export default function SkillCard({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div
      className="p-6 rounded-2xl bg-white/40 dark:bg-gray-900/40
        backdrop-blur-xl border border-white/20 shadow-md"
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        {content}
      </p>
    </div>
  );
}
