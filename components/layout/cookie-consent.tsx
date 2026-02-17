"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl animate-in fade-in slide-in-from-bottom-5 duration-700">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 shadow-2xl">
                {/* Glow effect */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/20 blur-[80px] pointer-events-none" />

                <div className="relative flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-lg font-semibold text-white mb-2">Cookie Preferences</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            We use cookies to enhance your experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <Button
                            variant="outline"
                            onClick={handleDecline}
                            className="flex-1 md:flex-none bg-white/5 border-white/10 hover:bg-white/10 text-white rounded-full transition-all duration-300"
                        >
                            Decline
                        </Button>
                        <Button
                            onClick={handleAccept}
                            className="flex-1 md:flex-none bg-white text-black hover:bg-gray-200 rounded-full px-8 transition-all duration-300 font-medium"
                        >
                            Accept
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
}
