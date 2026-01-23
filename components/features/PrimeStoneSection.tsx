"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PrimeStoneSection() {
    return (
        <section className="py-20 lg:py-28 bg-primary text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pattern-dots" /> {/* Abstract pattern placeholder */}

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <motion.div
                        className="flex-1 space-y-6 text-center lg:text-left"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-secondary font-bold tracking-widest uppercase">Parent Company</span>
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                            Backed by <br />
                            <span className="text-secondary">PrimeStone Property Group</span>
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Premium Construction operates as the specialized renovation arm of PrimeStone Property Group.
                            This synergy ensures that every project benefits from deep industry funding,
                            strategic property acquisition expertise, and architectural development rigor.
                        </p>
                        <ul className="space-y-3 text-gray-200 inline-block text-left">
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                                Property Acquisition & Development Funding
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                                Architectural Planning & Compliance
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                                End-to-End Project Management
                            </li>
                        </ul>
                        <div className="pt-4 flex justify-center lg:justify-start">
                            <Link href="/primestone">
                                <Button size="lg" variant="secondary" className="font-semibold">
                                    Visit PrimeStone Group
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex-1 w-full relative"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white/5">
                            {/* Professional PrimeStone image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('/images/primestone.png')" }}
                            />
                            <div className="absolute inset-0 bg-primary/20" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
