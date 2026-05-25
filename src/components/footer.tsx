export default function Footer() {
  return (
    <footer className="hidden sm:block fixed bottom-4 right-4 z-50">
      <div className="flex items-center gap-1.5 px-3 py-2 rounded-full
                      bg-white/10 dark:bg-white/5
                      backdrop-blur-xl
                      border border-white/20 dark:border-white/10
                      shadow-[0_8px_32px_rgba(0,0,0,0.12)]
                      text-sm text-neutral-500 dark:text-neutral-400
                      select-none">
        <span className="text-neutral-700 dark:text-neutral-300 font-medium">Johnvessly Alti</span>
        <span className="text-neutral-300 dark:text-neutral-600">·</span>
        <span>AI Engineer</span>
      </div>
    </footer>
  );
}
