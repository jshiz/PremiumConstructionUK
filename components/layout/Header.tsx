"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, Facebook, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, cn } from "@/components/ui/button";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [serviceOpen, setServiceOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="w-full relative z-50">
            {/* Top Bar */}
            <div className="bg-primary text-white py-2 text-xs md:text-sm">
                <div className="container-custom flex justify-between items-center">
                    <div className="flex gap-4 sm:gap-6">
                        <a href="mailto:Contact@PremiumConstruction.uk" className="flex items-center gap-2 hover:text-secondary transition-colors">
                            <Mail className="w-4 h-4" />
                            <span className="hidden sm:inline">Contact@PremiumConstruction.uk</span>
                            <span className="sm:hidden">Email Us</span>
                        </a>
                        <a href="https://www.facebook.com/premiumconstructionuk/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-secondary transition-colors">
                            <Facebook className="w-4 h-4" />
                            <span className="hidden sm:inline">Follow us</span>
                        </a>
                    </div>
                    <div className="hidden sm:block">
                        <span className="text-gray-300">Mon - Fri: 8:00 - 18:00</span>
                    </div>
                </div>
            </div>

            {/* Main Nav */}
            <nav className="bg-white shadow-md sticky top-0">
                <div className="container-custom py-4 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <motion.div
                            whileHover={{ rotate: 5, scale: 1.05 }}
                            className="bg-primary p-1.5 rounded-lg shadow-inner"
                        >
                            <img
                                src="/favicon/favicon.svg"
                                alt="Premium Construction Logo"
                                className="w-8 h-8 md:w-10 md:h-10 invert brightness-0"
                                style={{ filter: 'brightness(0) invert(1)' }}
                            />
                        </motion.div>
                        <div className="flex flex-col">
                            <span className="text-xl md:text-2xl font-bold text-primary tracking-tight leading-none">PREMIUM</span>
                            <span className="text-[10px] md:text-xs text-secondary font-bold tracking-[0.2em] uppercase">Construction</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/" className={cn("text-sm font-medium hover:text-primary transition-colors", pathname === "/" ? "text-primary" : "text-gray-600")}>
                            Home
                        </Link>

                        {/* Services Dropdown */}
                        <div className="relative group" onMouseEnter={() => setServiceOpen(true)} onMouseLeave={() => setServiceOpen(false)}>
                            <button className={cn("flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors", pathname.startsWith("/services") ? "text-primary" : "text-gray-600")}>
                                Services <ChevronDown className="w-4 h-4" />
                            </button>

                            <AnimatePresence>
                                {serviceOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full -left-4 w-64 bg-white shadow-xl rounded-md border border-gray-100 py-2 mt-0"
                                    >
                                        <Link href="/services/whole-house" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">Whole House Renovation</Link>
                                        <Link href="/services/kitchen-bathroom" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">Kitchen & Bathroom</Link>
                                        <Link href="/services/electrical" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">Electrical</Link>
                                        <Link href="/services/gas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">Gas & Heating</Link>
                                        <Link href="/services/solar" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">Solar Installation</Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link href="/primestone" className={cn("text-sm font-medium hover:text-primary transition-colors", pathname === "/primestone" ? "text-primary" : "text-gray-600")}>
                            Development (PrimeStone)
                        </Link>

                        <Link href="/contact" className={cn("text-sm font-medium hover:text-primary transition-colors", pathname === "/contact" ? "text-primary" : "text-gray-600")}>
                            Contact
                        </Link>

                        <Link href="/contact">
                            <Button variant="secondary" className="shadow-sm">Get a Quote</Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
                    </button>
                </div>

                {/* Mobile Nav */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                        >
                            <div className="container-custom py-4 flex flex-col gap-4">
                                <Link href="/" onClick={() => setIsOpen(false)} className="text-sm font-medium text-gray-700">Home</Link>
                                <div className="space-y-2 pl-4 border-l-2 border-primary/20">
                                    <p className="text-xs font-semibold text-gray-400 uppercase">Services</p>
                                    <Link href="/services/whole-house" onClick={() => setIsOpen(false)} className="block text-sm text-gray-600">Whole House</Link>
                                    <Link href="/services/kitchen-bathroom" onClick={() => setIsOpen(false)} className="block text-sm text-gray-600">Kitchen & Bathroom</Link>
                                    <Link href="/services/electrical" onClick={() => setIsOpen(false)} className="block text-sm text-gray-600">Electrical</Link>
                                    <Link href="/services/gas" onClick={() => setIsOpen(false)} className="block text-sm text-gray-600">Gas</Link>
                                    <Link href="/services/solar" onClick={() => setIsOpen(false)} className="block text-sm text-gray-600">Solar</Link>
                                </div>
                                <Link href="/primestone" onClick={() => setIsOpen(false)} className="text-sm font-medium text-gray-700">Development</Link>
                                <Link href="/contact" onClick={() => setIsOpen(false)} className="text-sm font-medium text-gray-700">Contact</Link>
                                <Link href="/contact" onClick={() => setIsOpen(false)}>
                                    <Button className="w-full">Get a Quote</Button>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
