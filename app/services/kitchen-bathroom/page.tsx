import { PageHero } from "@/components/features/PageHero";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function KitchenBathroomPage() {
    return (
        <div>
            <PageHero
                title="Kitchen & Bathroom Renovations"
                subtitle="Luxury suites and bespoke cabinetry designed for modern living."
                image="/images/kitchen.png"
            />

            <section className="py-20">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto space-y-16">

                        {/* Kitchens */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1 relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg shadow-primary/5 max-w-xl mx-auto lg:max-w-none w-full">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: "url('/images/kitchen.png')" }}
                                />
                            </div>
                            <div className="order-1 lg:order-2 text-center lg:text-left">
                                <h2 className="text-3xl font-bold text-primary mb-4">Bespoke Kitchens</h2>
                                <p className="text-gray-600 mb-6">
                                    The heart of the home deserves the finest attention to detail. We design and install premium kitchens that blend functionality with stunning aesthetics.
                                    From shaker-style cabinetry to ultra-modern handleless designs, we source and fit to your exact specifications.
                                </p>
                                <div className="flex justify-center lg:justify-start">
                                    <Link href="/contact">
                                        <Button variant="outline">Request Brochure</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Bathrooms */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="text-center lg:text-left">
                                <h2 className="text-3xl font-bold text-primary mb-4">Luxury Bathrooms</h2>
                                <p className="text-gray-600 mb-6">
                                    Create a spa-like retreat in your own home. We specialize in wet rooms, master en-suites, and family bathrooms featuring high-end sanitaryware and precision tiling.
                                    We handle all waterproofing and plumbing to ensure long-lasting quality.
                                </p>
                                <div className="flex justify-center lg:justify-start">
                                    <Link href="/contact">
                                        <Button variant="outline">Get a Quote</Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg shadow-primary/5 max-w-xl mx-auto lg:max-w-none w-full">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: "url('/images/bathroom.png')" }}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
