"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
    title: string;
    subtitle: string;
    image?: string;
}

export function PageHero({ title, subtitle, image = "/images/placeholder.svg" }: PageHeroProps) {
    return (
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-primary">
            <div className="absolute inset-0">
                <div
                    className="w-full h-full opacity-40 bg-cover bg-center"
                    style={{ backgroundImage: `url('${image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
            </div>

            <div className="container-custom relative z-10 text-center text-white px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light">
                        {subtitle}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
