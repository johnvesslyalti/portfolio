import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { motion } from "framer-motion";

export default function Contact() {
    const contactLinks = [
        {
            href: "https://x.com/johnvesslyalti",
            icon: <FaXTwitter className="text-2xl text-gray-950" />,
        },
        {
            href: "mailto:altijohnvessly@gmail.com",
            icon: <IoIosMail className="text-2xl text-gray-950" />,
        },
        {
            href: "https://github.com/johnvesslyalti",
            icon: <FaGithub className="text-2xl text-gray-950" />,
        },
        {
            href: "https://www.linkedin.com/in/johnvesslyalti/",
            icon: <FaLinkedin className="text-2xl text-gray-950" />,
        },
    ];

    return (
        <motion.div
            className="min-h-screen flex items-center justify-center p-5 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
        >
            <div>
                <motion.h1
                    className="text-3xl mb-10 font-bold text-gray-300"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    Contact Me!
                </motion.h1>

                <ul className="flex flex-col gap-5">
                    {contactLinks.map((link, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.2 }}
                            viewport={{ once: false }}
                        >
                            <a
                                target="_blank"
                                href={link.href}
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-5 p-2 bg-gray-500 text-lg rounded-xl"
                            >
                                {link.icon}
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}
