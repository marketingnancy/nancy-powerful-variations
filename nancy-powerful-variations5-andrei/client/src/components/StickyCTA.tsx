import { useState, useEffect } from 'react';
import { NeoButton } from "@/components/NeoBrutalComponents";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

const CHECKOUT_URL = "https://hellonancy.com/products/lem";

function trackConversionAndNavigate(url: string = CHECKOUT_URL) {
  if (window.fbq) {
    window.fbq('track', 'InitiateCheckout', {
      content_name: 'Nancy LEM',
      content_category: 'Wellness',
      value: 89.00,
      currency: 'USD',
    });
  }
  if (window.gtag_report_conversion) {
    window.gtag_report_conversion(url);
  } else {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

export const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 15, seconds: 0 });
  const [endTime] = useState(() => {
    const date = new Date();
    date.setMinutes(date.getMinutes() + 15);
    return date;
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollPosition / (docHeight - windowHeight)) * 100;

      if (scrollPercentage > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Timer logic
    const timer = setInterval(() => {
      const now = new Date();
      const diff = +endTime - +now;
      
      if (diff > 0) {
        setTimeLeft({
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-black p-3 z-50 shadow-[0px_-4px_10px_rgba(0,0,0,0.1)] animate-in slide-in-from-bottom duration-300">
      <div className="container flex items-center justify-between gap-3 max-w-4xl mx-auto">
        
        {/* Left Side: Pricing & Timer */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-black text-primary">$89</span>
            <span className="text-xs font-bold text-gray-400 line-through">$159</span>
            <span className="text-xs font-bold bg-destructive text-white px-1.5 py-0.5 rounded-sm">SAVE $70</span>
          </div>
          <div className="flex items-center gap-1 text-xs font-mono font-bold text-gray-600">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Ends in {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </div>
        </div>
        
        {/* Right Side: Button with conversion tracking */}
        <div onClick={() => trackConversionAndNavigate()} className="cursor-pointer" role="link">
          <NeoButton
            size="sm"
            className="bg-black text-white hover:bg-primary hover:text-white border-2 border-black shadow-none text-sm px-4 py-2 h-auto whitespace-nowrap"
          >
            Get It Now <Zap className="ml-1.5 h-3.5 w-3.5 fill-current" />
          </NeoButton>
        </div>
      </div>
    </div>
  );
};
