"use client";
import { PageHero } from "@/components/features/PageHero";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";

export default function ContactPage() {
    return (
        <div>
            <PageHero
                title="Contact Us"
                subtitle="Get in touch to discuss your next project."
                image="/images/hero-luxury.png"
            />

            <section className="py-20">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Contact Details */}
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-8">Get In Touch</h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center text-secondary shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary mb-1">Email Us</h3>
                                        <p className="text-gray-600 text-sm mb-1">For quotes and general enquiries:</p>
                                        <a href="mailto:Contact@PremiumConstruction.uk" className="text-lg font-semibold text-secondary hover:underline">Contact@PremiumConstruction.uk</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center text-secondary shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary mb-1">Call Us</h3>
                                        <p className="text-gray-600 text-sm mb-1">Monday - Friday, 9am - 6pm</p>
                                        <a href="tel:+4407453969777" className="text-lg font-semibold text-primary hover:text-secondary">+44 07453 969777</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center text-secondary shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary mb-1">Office</h3>
                                        <p className="text-gray-600 text-sm">
                                            69 Roundhedge Way<br />
                                            Enfield, EN2 8LD
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-4 flex flex-wrap gap-4">
                                    <a href="https://www.facebook.com/premiumconstructionuk/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full text-primary hover:bg-secondary hover:text-white transition-all text-sm font-semibold">
                                        <Facebook className="w-4 h-4" /> Facebook
                                    </a>
                                    <a href="https://www.instagram.com/premiumconstruction_uk/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full text-primary hover:bg-secondary hover:text-white transition-all text-sm font-semibold">
                                        <Instagram className="w-4 h-4" /> Instagram
                                    </a>
                                    <a href="https://share.google/kKCAifZmTPhDh4QWq" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full text-primary hover:bg-secondary hover:text-white transition-all text-sm font-semibold">
                                        <span className="w-4 h-4 flex items-center justify-center font-bold text-[10px] border border-current rounded-full">G</span> Google Profile
                                    </a>
                                </div>
                            </div>

                            <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
                                <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-secondary" /> Opening Hours
                                </h3>
                                <div className="space-y-2 text-sm text-gray-600">
                                    <div className="flex justify-between"><span>Monday - Friday</span> <span>08:00 - 18:00</span></div>
                                    <div className="flex justify-between"><span>Saturday</span> <span>09:00 - 14:00</span></div>
                                    <div className="flex justify-between"><span>Sunday</span> <span>Closed</span></div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col justify-center text-center">
                            <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center text-secondary mx-auto mb-6">
                                <Mail className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-2">Send us a Message</h3>
                            <p className="text-gray-600 mb-8 max-w-sm mx-auto">
                                We'd love to hear about your project. Copy our email address below to send us your enquiries and plans.
                            </p>

                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <span className="font-mono text-gray-800 font-medium break-all">
                                    Contact@PremiumConstruction.uk
                                </span>
                                <Button
                                    onClick={() => {
                                        navigator.clipboard.writeText("Contact@PremiumConstruction.uk");
                                        const btn = document.getElementById('copy-btn');
                                        if (btn) {
                                            const originalText = btn.innerText;
                                            btn.innerText = "Copied!";
                                            setTimeout(() => {
                                                btn.innerText = originalText;
                                            }, 2000);
                                        }
                                    }}
                                    id="copy-btn"
                                    variant="secondary"
                                    size="sm"
                                    className="shrink-0 font-bold"
                                >
                                    Copy Email
                                </Button>
                            </div>

                            <p className="mt-8 text-sm text-gray-500">
                                We aim to respond to all enquiries within 24 hours.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
