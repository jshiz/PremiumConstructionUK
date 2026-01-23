"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consented = localStorage.getItem("cookieConsent");
        if (!consented) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookieConsent", "true");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-4 md:p-6 z-50 shadow-2xl">
            <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-300 text-sm md:text-base text-center md:text-left">
                    We use cookies to improve your experience and analyze site traffic. By continuing, you agree to our use of cookies.
                    <a href="/legal/cookies" className="text-secondary hover:underline ml-1">Read Policy</a>.
                </p>
                <div className="flex gap-4">
                    <Button variant="outline" className="text-sm border-white text-white hover:bg-white hover:text-primary" onClick={() => setIsVisible(false)}>
                        Decline
                    </Button>
                    <Button variant="secondary" onClick={acceptCookies} className="font-bold">
                        Accept All
                    </Button>
                </div>
            </div>
        </div>
    );
}
