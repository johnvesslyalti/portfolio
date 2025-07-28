"use client";

import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/styles/components/ui/card";

export default function Contact() {
    const contacts = [
        {
            id: 1,
            name: "Email",
            href: "mailto:altijohnvessly@gmail.com",
            icon: <MdEmail className="text-red-400" />,
            aria: "Send an email to Johnvessly Alti"
        },
        {
            id: 2,
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/johnvesslyalti",
            icon: <FaLinkedin className="text-blue-500" />,
            aria: "View Johnvessly's LinkedIn profile"
        },
        {
            id: 3,
            name: "GitHub",
            href: "https://github.com/johnvesslyalti",
            icon: <FaGithub className="text-white" />,
            aria: "Visit Johnvessly's GitHub profile"
        },
        {
            id: 4,
            name: "LeetCode",
            href: "https://leetcode.com/johnvesslyalti/",
            icon: <FaCode className="text-yellow-400" />,
            aria: "Check out Johnvessly's LeetCode profile"
        }
    ];

    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-5 py-20">
            {/* Title */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <h2 className="text-5xl font-bold text-white relative inline-block">
                    Contact
                    <motion.div
                        layoutId="underline"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mt-2 rounded-full"
                    />
                </h2>
                <p className="text-gray-400 mt-4 text-lg max-w-md mx-auto">
                    Let’s connect — whether you have a question, a project, or just want to say hi!
                </p>
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 w-full max-w-2xl">
                {contacts.map((contact, index) => (
                    <motion.div
                        key={contact.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <a
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={contact.aria}
                            className="block w-full"
                        >
                            <Card className="w-full hover:scale-[1.04] transition-transform duration-300 bg-white/10 border border-white/20 shadow-md">
                                <CardContent className="flex items-center gap-4 py-5 px-6">
                                    <motion.div
                                        whileHover={{ rotate: 10, scale: 1.2 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                        className="text-3xl"
                                    >
                                        {contact.icon}
                                    </motion.div>
                                    <p className="text-lg font-semibold text-white">
                                        {contact.name}
                                    </p>
                                </CardContent>
                            </Card>
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
