import { PageHero } from "@/components/features/PageHero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Zap } from "lucide-react";
import Image from "next/image";

export default function ElectricalPage() {
    return (
        <div>
            <PageHero
                title="Electrical Services"
                subtitle="Fully certified electrical installations and smart home integration."
                image="/images/electrical.png"
            />

            <section className="py-20">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-12 items-center">
                        <div className="lg:col-span-2 text-center lg:text-left">
                            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3 justify-center lg:justify-start">
                                <Zap className="text-secondary" /> Expert Electrical Solutions
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Safety and compliance are paramount in our electrical work. Our team of qualified electricians handles everything from full house rewires to the installation of modern lighting schemes and EV charging points.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6 mb-8 text-left">
                                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                    <h3 className="font-bold text-primary mb-2">Domestic</h3>
                                    <ul className="text-sm text-gray-600 space-y-2">
                                        <li>• Full & Partial Rewires</li>
                                        <li>• Consumer Unit Upgrades</li>
                                        <li>• LED Lighting Design</li>
                                        <li>• Garden Lighting</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                    <h3 className="font-bold text-primary mb-2">Smart Home</h3>
                                    <ul className="text-sm text-gray-600 space-y-2">
                                        <li>• Home Automation</li>
                                        <li>• Smart Thermostats</li>
                                        <li>• Security Systems & CCTV</li>
                                        <li>• Data Cabling</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex justify-center lg:justify-start mt-8">
                                <Link href="/contact">
                                    <Button size="lg">Book an Electrician</Button>
                                </Link>
                            </div>
                        </div>

                        <div className="space-y-8 max-w-xl mx-auto lg:max-w-none w-full">
                            <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl shadow-primary/5">
                                <Image
                                    src="/images/electrical.png"
                                    alt="Electrical Services"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Sidebar / Badge */}
                            <div className="bg-primary/5 p-8 rounded-xl border border-primary/10 text-center">
                                <div className="w-24 h-24 bg-yellow-400 mx-auto rounded-full flex items-center justify-center text-primary font-bold text-lg mb-4 shadow-lg">
                                    NICEIC
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">NICEIC Certified</h3>
                                <p className="text-sm text-gray-600">
                                    All works are carried out to BS 7671 standards and notified to building control where required.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
