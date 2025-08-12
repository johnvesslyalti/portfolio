export default function SkillCard({ title, content }: { title: string; content: string }) {
  return (
    <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">{content}</p>
    </div>
  );
}
