"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-primary">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero-luxury.png"
                    alt="Luxury Home Renovation"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-primary/20" />
            </div>

            <div className="container-custom relative z-10 text-center text-white px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="block text-secondary font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
                        Premium Construction UK
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        Premium Whole House <br className="hidden md:block" />
                        <span className="text-secondary">Renovations</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 font-light">
                        Transforming properties across the United Kingdom with expert craftsmanship, architectural precision, and premium finishes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base">Get a Free Quote</Button>
                        </Link>
                        <Link href="/services/whole-house">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base border-white text-white hover:bg-white hover:text-primary">
                                View Our Work
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
