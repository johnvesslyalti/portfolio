import { SpotifyWidget } from "@/components/spotify-widget";
import { FaDiscord, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  const contact = [
    { name: "x", link: "https://x.com/johnvesslyalti", icon: <FaXTwitter /> },
    {
      name: "linkedin",
      link: "https://linkedin.com/in/johnvesslyalti",
      icon: <FaLinkedin />,
    },
    {
      name: "github",
      link: "https://github.com/johnvesslyalti",
      icon: <FaGithub />,
    },
    {
      name: "leetcode",
      link: "https://leetcode.com/johnvesslyalti",
      icon: <SiLeetcode />,
    },
    {
      name: "youtube",
      link: "https://youtube.com/@johnvesslyalti",
      icon: <FaYoutube />,
    },
    {
      name: "discord",
      link: "https://discord.com/users/johnvesslyalti",
      icon: <FaDiscord />,
    },
  ];
  return (
    <section className="flex flex-col gap-5 sm:flex-row sm:justify-between items-center border p-5 rounded-lg">
      <div className="flex flex-wrap gap-3">
        {contact.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            className="text-xl underline hover:text-neutral-700 dark:hover:text-neutral-300"
          >
            {item.icon}
          </a>
        ))}
      </div>
      <SpotifyWidget />
    </section>
  );
}
