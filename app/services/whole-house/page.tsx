import { PageHero } from "@/components/features/PageHero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function WholeHousePage() {
    return (
        <div>
            <PageHero
                title="Whole House Renovations"
                subtitle="Complete property transformation managed by a single expert team."
                image="/images/wholehouse.png"
            />

            <section className="py-20">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl font-bold text-primary mb-6">Reimagine Your Living Space</h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Unlock the full potential of your property with our comprehensive whole-house renovation services.
                                Whether you just purchased a fixer-upper or want to modernize your forever home, we handle every aspect of the project.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                From structural reconfigurations to the final coat of paint, our integrated approach ensures consistent quality and a stress-free experience.
                                We coordinate all trades, manage the timeline, and ensure compliance with UK building regulations.
                            </p>
                            <ul className="space-y-3 mb-8 inline-block text-left">
                                {[
                                    "Structural alterations and extension integration",
                                    "Full electrical rewiring and plumbing overhaul",
                                    "Plastering, flooring, and decorating",
                                    "Window and door replacement",
                                    "Project management from start to finish"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-4 flex justify-center lg:justify-start">
                                <Link href="/contact">
                                    <Button size="lg">Discuss Your Project</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl shadow-primary/5 max-w-xl mx-auto lg:max-w-none">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('/images/wholehouse.png')" }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
