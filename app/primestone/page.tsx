import { PageHero } from "@/components/features/PageHero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Building2, TrendingUp, Briefcase } from "lucide-react";

export default function PrimeStonePage() {
    return (
        <div>
            <PageHero
                title="PrimeStone Property Group"
                subtitle="Investment, Acquisition, and Development."
                image="/images/primestone.png"
            />

            <section className="py-20">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-primary mb-6">Synergy in Construction & Development</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Premium Construction is the dedicated operational arm of PrimeStone Property Group.
                            While PrimeStone focuses on the strategic acquisition of high-yield assets and development funding,
                            Premium Construction executes the physical transformation of these assets.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            This vertical integration allows us to deliver projects with higher efficiency, guaranteed financial backing,
                            and an acute understanding of what drives property value in the current UK market.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <Building2 className="w-10 h-10 text-secondary mb-4" />
                            <h3 className="text-xl font-bold text-primary mb-3">Acquisition</h3>
                            <p className="text-gray-600">Sourcing high-potential residential and commercial properties across the UK.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <TrendingUp className="w-10 h-10 text-secondary mb-4" />
                            <h3 className="text-xl font-bold text-primary mb-3">Development Funding</h3>
                            <p className="text-gray-600">Providing the capital structure required for large-scale renovations and builds.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <Briefcase className="w-10 h-10 text-secondary mb-4" />
                            <h3 className="text-xl font-bold text-primary mb-3">Asset Management</h3>
                            <p className="text-gray-600">Long-term portfolio management and yield optimization.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-20">
                <div className="container-custom text-center">
                    <h2 className="text-3xl font-bold text-primary mb-6">Looking for Investment Opportunities?</h2>
                    <p className="max-w-2xl mx-auto text-gray-600 mb-8">
                        We partner with private investors and land owners. Contact our investment team to discuss current opportunities.
                    </p>
                    <Link href="/contact">
                        <Button size="lg">Contact PrimeStone</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
