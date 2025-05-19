"use client";

import { Card, CardContent } from "@/styles/components/ui/card";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';

export default function Contact() {
    const contacts = [
        { id: 1, name: "Email", href: "mailto:altijohnvessly@gmail.com", icon: <MdEmail />},
        { id: 2, name: "LinkedIn", href: "https://www.linkedin.com/in/johnvesslyalti", icon: <FaLinkedin /> },
        { id: 3, name: "GitHub", href: "https://github.com/johnvesslyalti", icon: <FaGithub /> },
    ];

    return (
        <div className="h-screen p-10 flex flex-col items-center justify-center">
            <div>
                <motion.div 
                    initial={{ opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.4, delay: 1 * 0.05}}
                    viewport={{ once: false }}
                    ><h1 className="text-5xl font-bold text-center mb-8">Contact</h1></motion.div>
                <div className="flex flex-col gap-4">
                {contacts.map((contact) => (
                    <motion.div
                    key={contact.id}
                    initial={{ opacity: 0, y: 30}}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.4, delay: contact.id * 0.05}}
                    viewport={{ once: false }}
                    >
                        <Card className="backdrop-blur-2xl bg-black/20 shadow-xl border-white/30">
                        <CardContent className="flex justify-center items-center gap-3">
                        <div className="text-3xl">{contact.icon}</div>
                        <a
                        key={contact.id}
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg"
                        >
                        {contact.name}
                        </a>
                        </CardContent>
                        </Card>
                    </motion.div>
                ))}
                </div>
            </div>
        </div>
    );
}
