import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main className="max-w-6xl mx-auto px-6 pb-24">
        <Hero />
      </main>
    </div>
  );
}
