import { PageHero } from "@/components/features/PageHero";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function KitchenBathroomPage() {
    return (
        <div>
            <PageHero
                title="Kitchen & Bathroom Renovations"
                subtitle="Luxury suites and bespoke cabinetry designed for modern living."
            />

            <section className="py-20">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto space-y-16">

                        {/* Kitchens */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1 bg-gray-100 rounded-xl h-64 flex items-center justify-center text-gray-400">
                                <span className="text-2xl">🍽️ Kitchen Image</span>
                            </div>
                            <div className="order-1 md:order-2">
                                <h2 className="text-3xl font-bold text-primary mb-4">Bespoke Kitchens</h2>
                                <p className="text-gray-600 mb-6">
                                    The heart of the home deserves the finest attention to detail. We design and install premium kitchens that blend functionality with stunning aesthetics.
                                    From shaker-style cabinetry to ultra-modern handleless designs, we source and fit to your exact specifications.
                                </p>
                                <Link href="/contact">
                                    <Button variant="outline">Request Brochure</Button>
                                </Link>
                            </div>
                        </div>

                        {/* Bathrooms */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-primary mb-4">Luxury Bathrooms</h2>
                                <p className="text-gray-600 mb-6">
                                    Create a spa-like retreat in your own home. We specialize in wet rooms, master en-suites, and family bathrooms featuring high-end sanitaryware and precision tiling.
                                    We handle all waterproofing and plumbing to ensure long-lasting quality.
                                </p>
                                <Link href="/contact">
                                    <Button variant="outline">Get a Quote</Button>
                                </Link>
                            </div>
                            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center text-gray-400">
                                <span className="text-2xl">🚿 Bathroom Image</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
