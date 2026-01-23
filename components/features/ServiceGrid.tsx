"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Hammer, Zap, Flame, Sun, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
    {
        icon: Home,
        title: "Whole House Renovation",
        description: "Complete structural and aesthetic transformation of your property.",
        link: "/services/whole-house",
    },
    {
        icon: Hammer,
        title: "Kitchen & Bathroom",
        description: "Luxury installations and bespoke cabinetry for modern living.",
        link: "/services/kitchen-bathroom",
    },
    {
        icon: Zap,
        title: "Electrical Services",
        description: "NICEIC certified rewiring, lighting, and smart home solutions.",
        link: "/services/electrical",
    },
    {
        icon: Flame,
        title: "Gas & Heating",
        description: "Gas Safe registered boiler installs and central heating systems.",
        link: "/services/gas",
    },
    {
        icon: Sun,
        title: "Solar Installation",
        description: "MCS certified renewable energy solutions for a greener home.",
        link: "/services/solar",
    },
];

export function ServiceGrid() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Expertise</h2>
                    <p className="text-gray-600 text-lg">
                        From focused upgrades to complete property overhauls, we deliver excellence in every trade.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
                        >
                            <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                            <Link href={service.link} className="inline-flex items-center text-secondary font-semibold hover:text-secondary/80 transition-colors">
                                Learn More <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
