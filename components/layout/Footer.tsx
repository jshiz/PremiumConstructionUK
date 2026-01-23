"use client";

import Link from "next/link";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 tracking-tight">PREMIUM <span className="text-secondary">CONSTRUCTION</span></h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Expert whole house renovations and property development across the United Kingdom.
                            Part of the PrimeStone Property Group.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/premiumconstructionuk/" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-primary transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-secondary">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-secondary shrink-0" />
                                <a href="mailto:Contact@PremiumConstruction.uk" className="hover:text-white transition-colors">Contact@PremiumConstruction.uk</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                                <span>Operating Nationwide<br />Head Office: London, UK</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-secondary">Services</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/services/whole-house" className="hover:text-white transition-colors">Whole House Renovation</Link></li>
                            <li><Link href="/services/kitchen-bathroom" className="hover:text-white transition-colors">Kitchen & Bathroom</Link></li>
                            <li><Link href="/services/electrical" className="hover:text-white transition-colors">Electrical Services</Link></li>
                            <li><Link href="/services/gas" className="hover:text-white transition-colors">Gas & Heating</Link></li>
                            <li><Link href="/services/solar" className="hover:text-white transition-colors">Solar Installation</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-secondary">Legal & Portal</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/portal" className="hover:text-white transition-colors font-semibold text-secondary">Client Portal (Pay Invoice)</Link></li>
                            <li><Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/legal/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                            <li><Link href="/legal/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
                            <li><Link href="/legal/accessibility" className="hover:text-white transition-colors">Accessibility Statement</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 mt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                    <p>&copy; {currentYear} Premium Construction UK. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 flex flex-col md:items-end gap-1">
                        <p>PrimeStone Property Group Ltd. Registered in England & Wales.</p>
                        <p>Company No: [00000000] | VAT No: [GB 000 0000 00]</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
