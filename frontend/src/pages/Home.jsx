import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <motion.h1
                    className="text-5xl mb-5 text-gray-300"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    Hi! I am Johnvessly Alti
                </motion.h1>
                <motion.p
                    className="text-gray-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    I specialize in building dynamic and scalable web applications using the<br />
                    MERN stack (MongoDB, Express, React, Node.js). I have hands-on experience <br />
                    in both front-end and back-end development, enabling me to create seamless,<br />
                    end-to-end solutions.
                </motion.p>
            </motion.div>
        </div>
    );
}
