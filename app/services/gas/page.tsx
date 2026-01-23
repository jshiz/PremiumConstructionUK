import { PageHero } from "@/components/features/PageHero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Flame } from "lucide-react";
import Image from "next/image";

export default function GasPage() {
    return (
        <div>
            <PageHero
                title="Gas & Heating Services"
                subtitle="Reliable heating solutions and boiler installations by Gas Safe engineers."
                image="/images/gas.png"
            />

            <section className="py-20">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-12 items-center">
                        <div className="lg:col-span-2 text-center lg:text-left">
                            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3 justify-center lg:justify-start">
                                <Flame className="text-secondary" /> Heating & Plumbing
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Stay warm and safe with our comprehensive heating services. We install high-efficiency boilers and underfloor heating systems designed to reduce energy bills and improve comfort.
                            </p>
                            <ul className="space-y-4 mb-8 inline-block text-left">
                                <li className="p-4 bg-gray-50 rounded-lg border-l-4 border-secondary">
                                    <strong className="text-primary block">Boiler Installation & Servicing</strong>
                                    <span className="text-sm text-gray-600">We fit leading brands like Worcester Bosch and Vaillant with extended warranties available.</span>
                                </li>
                                <li className="p-4 bg-gray-50 rounded-lg border-l-4 border-secondary">
                                    <strong className="text-primary block">Underfloor Heating</strong>
                                    <span className="text-sm text-gray-600">Efficient wet and electric systems for bathrooms, kitchens, and open-plan living.</span>
                                </li>
                                <li className="p-4 bg-gray-50 rounded-lg border-l-4 border-secondary">
                                    <strong className="text-primary block">Central Heating Power flushing</strong>
                                    <span className="text-sm text-gray-600">Restore your system's efficiency and extend its lifespan.</span>
                                </li>
                            </ul>
                            <div className="flex justify-center lg:justify-start mt-8">
                                <Link href="/contact">
                                    <Button size="lg">Get a Heating Quote</Button>
                                </Link>
                            </div>
                        </div>

                        <div className="space-y-8 max-w-xl mx-auto lg:max-w-none w-full">
                            <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl shadow-primary/5">
                                <Image
                                    src="/images/gas.png"
                                    alt="Gas & Heating Services"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Sidebar / Badge */}
                            <div className="bg-primary/5 p-8 rounded-xl border border-primary/10 text-center">
                                <div className="w-24 h-24 bg-yellow-400 mx-auto relative flex items-center justify-center text-primary font-bold text-lg mb-4 shadow-lg overflow-hidden">
                                    <div className="absolute inset-x-0 top-0 h-3 bg-black"></div>
                                    <span className="mt-2 text-xs">GAS SAFE</span>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">Gas Safe Registered</h3>
                                <p className="text-sm text-gray-600">
                                    Our engineers are fully registered and carry ID cards for your peace of mind.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
