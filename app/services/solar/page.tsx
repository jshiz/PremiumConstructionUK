import { PageHero } from "@/components/features/PageHero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sun } from "lucide-react";

export default function SolarPage() {
    return (
        <div>
            <PageHero
                title="Solar & Renewables"
                subtitle="Sustainable energy solutions for modern British homes."
            />

            <section className="py-20">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                                <Sun className="text-secondary" /> Solar PV & Battery Storage
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Reduce your carbon footprint and energy bills with our renewable energy installations. We design systems tailored to your roof orientation and energy usage patterns.
                            </p>

                            <div className="space-y-6 mb-8">
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Solar PV Panels</h3>
                                    <p className="text-gray-600 text-sm">High-efficiency sleek black panels that integrate seamlessly with your roof aesthetics.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Battery Storage</h3>
                                    <p className="text-gray-600 text-sm">Store excess energy generated during the day to use at night.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">EV Charging</h3>
                                    <p className="text-gray-600 text-sm">Smart chargers compatible with all major electric vehicle brands.</p>
                                </div>
                            </div>

                            <Link href="/contact">
                                <Button size="lg">Start Your Green Journey</Button>
                            </Link>
                        </div>

                        {/* Sidebar / Badge */}
                        <div className="bg-primary/5 p-8 rounded-xl border border-primary/10 text-center">
                            <div className="w-32 h-32 bg-green-600 text-white mx-auto rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg">
                                MCS
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-2">MCS Certified</h3>
                            <p className="text-sm text-gray-600">
                                Fully certified Microgeneration Certification Scheme (MCS) installations.
                                <br /><span className="text-xs italic text-gray-500">(Placeholder Badge)</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
