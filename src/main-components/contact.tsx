import { FaDiscord, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  const contact = [
    { name: "X", link: "https://x.com/johnvesslyalti", icon: <FaXTwitter /> },
    { name: "LinkedIn", link: "https://linkedin.com/in/johnvesslyalti", icon: <FaLinkedin /> },
    { name: "GitHub", link: "https://github.com/johnvesslyalti", icon: <FaGithub /> },
    { name: "LeetCode", link: "https://leetcode.com/johnvesslyalti", icon: <SiLeetcode /> },
    { name: "YouTube", link: "https://youtube.com/@johnvesslyalti", icon: <FaYoutube /> },
    { name: "Discord", link: "https://discord.com/users/johnvesslyalti", icon: <FaDiscord /> },
  ];

  const quotes = [
    { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
    { text: "Innovation grows when curiosity leads.", author: "Steve Jobs" },
    { text: "Good software is born from clear minds.", author: "Bill Gates" },
    { text: "Focus on users, the rest follows soon.", author: "Larry Page" },
    { text: "Move fast, learn fast, build even faster.", author: "Mark Zuckerberg" },
    { text: "Stay simple; complexity kills progress.", author: "Dennis Ritchie" },
    { text: "Great tools empower great developers.", author: "Anders Hejlsberg" },
    { text: "Every idea scales when passion fuels it.", author: "Elon Musk" },
    { text: "Precision matters; craft code with care.", author: "Ken Thompson" },
    { text: "Create value first, optimize it later.", author: "Jeff Bezos" },
    { text: "Small steps daily make giant tech leaps.", author: "Linus Torvalds" },
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <section className="flex flex-col gap-5 sm:flex-row sm:justify-between items-center border p-5 rounded-lg">
      <div className="flex flex-wrap gap-3">
        {contact.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            className="relative group text-2xl hover:text-neutral-700 dark:hover:text-neutral-300"
          >
            {item.icon}

            {/* Tooltip */}
            <span
              className="absolute left-1/2 -translate-x-1/2 -top-9
                         px-3 py-1 text-xs font-medium
                         bg-white dark:bg-neutral-900
                         text-black dark:text-white
                         rounded-md shadow-lg border border-neutral-200 dark:border-neutral-700
                         opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                         transition-all duration-150 whitespace-nowrap pointer-events-none">
              {item.name}
            </span>
          </a>
        ))}
      </div>

      <div className="text-center leading-tight opacity-80">
        <p className="text-sm">“{randomQuote.text}”</p>
        <p className="text-xs mt-1">{randomQuote.author}</p>
      </div>
    </section>
  );
}
