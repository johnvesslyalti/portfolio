import "@/styles/Hero.css";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      <div className="typewriter-container text-2xl md:text-5xl font-bold text-purple-300 mb-4">
        <span className="typewriter-text">Hi! I'm Johnvessly Alti</span>
      </div>
      <p className="text-lg md:text-xl text-purple-100 max-w-xl">
        Full Stack Developer | MERN | Next JS <br />
        Building Scalable Web Apps 
      </p>
    </section>
  );
}
