"use client";

import { PageHero } from "@/components/features/PageHero";
import { Button } from "@/components/ui/button";
import { Lock, CreditCard, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function PortalPage() {
    const [amount, setAmount] = useState("");

    return (
        <div>
            <PageHero
                title="Client Portal"
                subtitle="Secure Invoice Payment"
            />

            <section className="py-20 bg-gray-50">
                <div className="container-custom">
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                        {/* Header */}
                        <div className="bg-primary p-6 text-white text-center">
                            <h2 className="text-xl font-bold mb-2">Payment Gateway</h2>
                            <p className="text-primary-foreground/80 text-sm">Pay your Premium Construction invoice simply and securely.</p>
                        </div>

                        {/* Form */}
                        <div className="p-8 space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Invoice Number</label>
                                <input
                                    type="text"
                                    placeholder="INV-XXXXXXX"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary/50 uppercase tracking-widest"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Amount (£)</label>
                                <input
                                    type="number"
                                    placeholder="0.00"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary/50 text-lg font-semibold"
                                />
                            </div>

                            {/* Klarna Section */}
                            <div className="bg-[#FFB3C7]/10 border border-[#FFB3C7] rounded-lg p-4 space-y-3">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-bold text-[#171717] flex items-center gap-2">
                                        <span className="font-serif italic font-extrabold text-xl">Klarna.</span>
                                    </h3>
                                    <span className="text-xs bg-black text-white px-2 py-1 rounded-full font-bold">Recommended</span>
                                </div>

                                <p className="text-xs text-gray-600 mb-2">Split your payment into 3 interest-free installments or pay in 30 days.</p>

                                <div className="grid grid-cols-2 gap-2">
                                    <div className="flex flex-col items-center justify-center p-2 bg-white rounded border border-gray-200">
                                        <span className="font-bold text-sm">Pay in 3</span>
                                        <span className="text-[10px] text-gray-500">Interest-free</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-2 bg-white rounded border border-gray-200">
                                        <span className="font-bold text-sm">Pay in 30 days</span>
                                        <span className="text-[10px] text-gray-500">Delay payment</span>
                                    </div>
                                </div>
                            </div>

                            <Button className="w-full h-12 text-lg" size="lg">
                                <Lock className="w-4 h-4 mr-2" /> Pay Now
                            </Button>

                            <div className="flex items-center justify-center gap-4 text-xs text-gray-400 pt-2">
                                <div className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> SSL Secure</div>
                                <div className="flex items-center gap-1"><CreditCard className="w-3 h-3" /> Encrypted</div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
