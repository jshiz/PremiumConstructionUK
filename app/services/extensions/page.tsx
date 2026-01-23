import { PageHero } from "@/components/features/PageHero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function ExtensionsPage() {
    return (
        <div>
            <PageHero
                title="House Extensions"
                subtitle="Expand your living space with seamless architectural integrations."
                image="/images/wholehouse.png"
            />

            <section className="py-20">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl font-bold text-primary mb-6">Expert Space Creation</h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                A well-designed extension doesn't just add space—it adds significant value to your property and transforms how you live.
                                At Premium Construction, we specialize in creating seamless additions that look like they've always been part of your home.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                From initial architectural planning and navigating UK planning permissions to the final structural build and interior finishing,
                                we provide a complete turnkey solution for all types of extensions.
                            </p>
                            <ul className="space-y-3 mb-8 inline-block text-left">
                                {[
                                    "Rear and side-return extensions",
                                    "Double-storey additions",
                                    "Wrap-around property extensions",
                                    "Glass-fronted contemporary spaces",
                                    "Full planning and building regulation support"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-4 flex justify-center lg:justify-start">
                                <Link href="/contact">
                                    <Button size="lg">Request a Consultation</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="relative h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden shadow-xl shadow-primary/5 max-w-xl mx-auto lg:max-w-none">
                            <Image
                                src="/images/wholehouse.png"
                                alt="House Extension"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
