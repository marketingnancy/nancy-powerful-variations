import { NeoButton, NeoCard, NeoBadge, NeoAccordion } from "@/components/NeoBrutalComponents";
import { CountdownTimer } from "@/components/CountdownTimer";
import { StickyCTA } from "@/components/StickyCTA";
import { Star, Check, ShieldCheck, Zap, Heart, Wind, VolumeX, Droplets } from "lucide-react";
import { useState } from "react";

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

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState<1 | 2 | 3>(2);

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-foreground overflow-x-hidden">
      {/* Top Bar */}
      <div className="bg-black text-white py-2 px-4 text-center text-xs md:text-sm font-bold uppercase tracking-widest border-b-4 border-primary">
        <span className="mx-2">🤐 Discreet Packaging</span> | 
        <span className="mx-2">✈️ Free Worldwide Shipping</span> | 
        <span className="mx-2">🛡️ 30-Day Satisfaction Guarantee</span>
      </div>

      {/* Hero Section */}
      <header className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-[#FAFF00] border-b-4 border-black">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-left">
              <NeoBadge className="bg-primary text-white border-black">New & Improved V2.0</NeoBadge>
              <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                Unlock the <span className="text-primary bg-white px-2 border-2 border-black inline-block transform -rotate-2">Most Powerful</span> Orgasms of Your Life
              </h1>
              <p className="text-xl md:text-2xl font-medium max-w-lg leading-relaxed border-l-4 border-black pl-6">
                Nancy's Award-Winning LEM™ uses medically-backed air suction technology to deliver mind-blowing pleasure.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton size="lg" className="text-xl px-8 py-8 h-auto w-full sm:w-auto" onClick={scrollToPricing}>
                  Get Yours Now <Zap className="ml-2 h-6 w-6 fill-current" />
                </NeoButton>
                <div className="flex items-center gap-2 font-bold text-sm p-4 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex -space-x-2">
                    {[5, 9, 10, 26].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-black overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <span>500,000+ Happy Users</span>
                </div>
              </div>

              <ul className="space-y-3 font-bold text-lg">
                {[
                  "Effortless Satisfaction in Minutes",
                  "100% Body-Safe Medical Silicone",
                  "Whisper-Quiet & Discreet",
                  "10 Intensity Levels"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="bg-black text-white p-1"><Check size={16} strokeWidth={4} /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary transform rotate-3 border-4 border-black translate-x-4 translate-y-4 z-0"></div>
              <div className="relative z-10 bg-white border-4 border-black p-2">
                <img 
                  src="/images/pdp6.jpg" 
                  alt="Nancy LEM Device" 
                  className="w-full h-auto object-cover border-2 border-black"
                />
                <div className="absolute -bottom-6 -left-6 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-3">
                  <div className="flex gap-1 text-primary mb-1">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} fill="currentColor" size={20} />)}
                  </div>
                  <p className="font-bold text-sm">"Best purchase of 2025!"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Problem/Agitation Section - Direct Response Optimized */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container max-w-4xl mx-auto text-center space-y-12">
          <NeoBadge className="bg-destructive text-white border-black mb-4">WARNING: The Truth About Your Pleasure</NeoBadge>
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
            Why 80% of Women <span className="bg-black text-white px-2">Fake It</span> (And Why It's Not Your Fault)
          </h2>
          <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto">
            You've been sold a lie. Traditional vibrators are designed for <i>surface</i> stimulation. But 90% of your pleasure nerves are hidden deep inside.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "The 'Numbness' Trap",
                desc: "Buzzing vibrators overstimulate the surface, leading to numbness instead of climax. It's frustrating and exhausting.",
                icon: <Wind className="w-10 h-10" />
              },
              {
                title: "The 'Clunky' Design",
                desc: "Most toys are loud, heavy, and awkward. Nothing kills the mood faster than a motor that sounds like a lawnmower.",
                icon: <VolumeX className="w-10 h-10" />
              },
              {
                title: "The 'Dead Battery' Nightmare",
                desc: "Right when you're close... it dies. Cheap batteries ruin the moment. You deserve reliability.",
                icon: <Zap className="w-10 h-10" />
              }
            ].map((item, i) => (
              <NeoCard key={i} className="p-8 bg-[#F0F0F0] hover:bg-[#FAFF00] transition-colors group border-black">
                <div className="mb-6 bg-white border-2 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-1 group-hover:translate-y-1 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase">{item.title}</h3>
                <p className="font-medium leading-relaxed">{item.desc}</p>
              </NeoCard>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Educational Section - The Anatomy of Pleasure */}
      <section className="py-20 bg-[#FAFF00] border-b-4 border-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
        <div className="container grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            <h3 className="text-3xl font-black uppercase mb-6 border-b-4 border-primary pb-2 inline-block">The "Iceberg" Effect</h3>
            <p className="text-lg font-medium mb-6">
              Did you know the visible part of the clitoris is just the tip of the iceberg? The legs (crura) extend deep into your body.
            </p>
            <ul className="space-y-4">
              <li className="flex flex-col sm:flex-row items-start gap-3">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <div className="bg-black text-white p-1 shrink-0"><Check size={14} strokeWidth={4} /></div>
                  <span className="font-bold sm:hidden">Standard Vibes:</span>
                </div>
                <div>
                  <span className="font-bold hidden sm:inline">Standard Vibes:</span> Only vibrate the tiny visible tip. Result? Weak, shallow orgasms.
                </div>
              </li>
              <li className="flex flex-col sm:flex-row items-start gap-3">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <div className="bg-primary text-white p-1 shrink-0"><Check size={14} strokeWidth={4} /></div>
                  <span className="font-bold sm:hidden">The LEM Difference:</span>
                </div>
                <div>
                  <span className="font-bold hidden sm:inline">The LEM Difference:</span> Uses Air-Pulse Technology to create a vacuum. This stimulates the <i>entire</i> structure, deep inside. Result? Full-body, toe-curling release.
                </div>
              </li>
            </ul>
          </div>
          <div className="space-y-8">
            <NeoBadge className="bg-black text-white">Science-Backed Pleasure</NeoBadge>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
              Stop Tickling. <br/><span className="text-primary bg-white px-2 border-2 border-black">Start Stimulating.</span>
            </h2>
            <p className="text-xl font-medium">
              The LEM doesn't just buzz. It mimics the sensation of oral sex using gentle waves of air pressure. It's contactless, meaning no numbness, just pure, building intensity.
            </p>
            <NeoButton size="lg" className="text-xl px-8 py-6 w-full md:w-auto" onClick={scrollToPricing}>
              Experience The Difference <Zap className="ml-2 h-6 w-6 fill-current" />
            </NeoButton>
          </div>
        </div>
      </section>

      {/* NEW: Science of Air Suction Section */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <NeoBadge className="bg-secondary text-secondary-foreground border-black mb-4">The Science of Sensation</NeoBadge>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none mb-6">
              Why Air Suction <span className="bg-black text-white px-2">Changes Everything</span>
            </h2>
            <p className="text-xl font-medium max-w-3xl mx-auto">
              It's not magic. It's fluid dynamics. Traditional vibration scatters energy. Air suction focuses it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard className="p-8 border-black bg-[#F0F0F0]">
              <div className="bg-white border-2 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                <Wind className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4">The Vacuum Effect</h3>
              <p className="font-medium leading-relaxed">
                The LEM creates a seal around the clitoris. Rapid changes in air pressure gently pull blood into the erectile tissue (the glans and crura), increasing sensitivity by up to 200% within seconds.
              </p>
            </NeoCard>

            <NeoCard className="p-8 border-black bg-white transform md:-translate-y-4 shadow-[8px_8px_0px_0px_var(--color-hot-pink)] z-10">
              <div className="bg-primary text-white border-2 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                <Droplets className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4">Contactless Waves</h3>
              <p className="font-medium leading-relaxed">
                Direct contact can desensitize nerves over time (the "numbness" effect). Air pulses stimulate the nerves <i>without</i> touching them directly, allowing you to reach peak after peak without irritation.
              </p>
            </NeoCard>

            <NeoCard className="p-8 border-black bg-[#F0F0F0]">
              <div className="bg-white border-2 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4">Deep Tissue Reach</h3>
              <p className="font-medium leading-relaxed">
                Vibration stays on the skin. Air pressure waves penetrate deeper, reaching the 8,000+ nerve endings hidden below the surface. This triggers a "whole-body" orgasm response rather than a localized one.
              </p>
            </NeoCard>
          </div>
          
          <div className="mt-12 p-6 bg-black text-white border-4 border-[#FAFF00] text-center max-w-3xl mx-auto shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
            <p className="font-bold text-lg uppercase tracking-widest mb-2">Clinical Insight</p>
            <p className="text-xl font-medium italic">
              "Vacuum clitoral therapy significantly increases clitoral blood flow, enhancing sensation and engorgement."
            </p>
            <p className="mt-4 text-sm text-gray-400 uppercase font-bold">- Journal of Sexual Medicine (Adapted from findings)</p>
          </div>
        </div>
      </section>

      {/* NEW: The "First-Timer" Anxiety Dissolver */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
             <div className="relative">
                <div className="absolute inset-0 bg-primary transform translate-x-4 translate-y-4 border-4 border-black"></div>
                <div className="relative z-10 bg-white border-4 border-black p-2">
                  <img src="/images/pdp1.jpg" alt="Beginner Friendly" className="w-full h-auto object-cover border-2 border-black" />
                  <div className="absolute bottom-8 left-8 right-8 bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h3 className="text-2xl font-black uppercase mb-2">"I was scared to try it..."</h3>
                    <p className="text-lg font-medium italic mb-4">
                      "I'm 42 and never owned a toy. The LEM changed my life. It's so cute and friendly, not scary at all."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-black overflow-hidden">
                        <img src="https://i.pravatar.cc/100?img=5" alt="User" />
                      </div>
                      <div>
                        <div className="font-bold text-sm">Sarah J.</div>
                        <div className="text-xs text-gray-500">First-Time User</div>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <NeoBadge className="bg-[#FAFF00] text-black border-black">Beginner Friendly</NeoBadge>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
              Not Scary. <br/><span className="bg-black text-white px-2">Just Fun.</span>
            </h2>
            <p className="text-xl font-medium">
              The LEM is designed to be approachable. One button. Soft silicone. No complicated manuals. It's as easy to use as your electric toothbrush, but way more fun.
            </p>
            <ul className="space-y-3 font-bold text-lg">
              <li className="flex items-center gap-3"><Check className="text-primary" /> Simple 2-Button Control</li>
              <li className="flex items-center gap-3"><Check className="text-primary" /> Fits in the Palm of Your Hand</li>
              <li className="flex items-center gap-3"><Check className="text-primary" /> Cute, Non-Intimidating Design</li>
            </ul>
          </div>
        </div>
      </section>

      {/* NEW: Lifestyle Gallery Section */}
      <section className="py-20 bg-black text-white border-b-4 border-white overflow-hidden">
        <div className="container">
          <div className="text-center mb-16">
            <NeoBadge className="bg-primary text-white border-white mb-4">Your New Best Friend</NeoBadge>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none text-[#FAFF00]">
              Designed For <span className="bg-white text-black px-2">Your Life</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 relative group overflow-hidden border-4 border-white">
              <img src="/images/pdp11.jpg" alt="Lifestyle" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <h3 className="text-3xl font-black uppercase text-white">Waterproof &<br/>Bath Ready</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden border-4 border-white aspect-square">
              <img src="/images/pdp4.jpg" alt="Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="relative group overflow-hidden border-4 border-white aspect-square">
              <img src="/images/pdp9.jpg" alt="Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="col-span-2 relative group overflow-hidden border-4 border-white aspect-[2/1]">
              <img src="/images/pdp17.jpg" alt="Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-black uppercase text-white">Premium Magnetic Charging</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Unboxing Experience Section */}
      <section className="py-20 bg-[#FAFF00] border-b-4 border-black">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <NeoBadge className="bg-black text-white border-black">What's In The Box</NeoBadge>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
              A Gift <br/><span className="bg-white px-2 border-2 border-black">For Yourself</span>
            </h2>
            <p className="text-xl font-medium">
              Unboxing the LEM feels like opening a present. Premium packaging, discreet design, and everything you need to get started immediately.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <img src="/images/pdp7.jpg" className="w-full h-32 object-cover mb-2 border border-black" />
                <div className="font-bold uppercase text-sm">The LEM Device</div>
              </div>
              <div className="bg-white p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <img src="/images/pdp12.jpg" className="w-full h-32 object-cover mb-2 border border-black" />
                <div className="font-bold uppercase text-sm">Magnetic Charger</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-black transform translate-x-4 translate-y-4 border-4 border-black"></div>
            <img src="/images/pdp14.jpg" alt="Unboxing" className="relative z-10 w-full h-auto border-4 border-black" />
          </div>
        </div>
      </section>

      {/* NEW: The "Whisper-Quiet" Privacy Guarantee */}
      <section className="py-16 bg-black text-white border-b-4 border-white">
        <div className="container text-center max-w-4xl">
          
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-8">
            Powerful Enough to Curl Toes. <br/><span className="text-primary">Quiet Enough to Keep a Secret.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Your pleasure is your business. Even at max power, the LEM hums quieter than a library whisper. Use it with roommates next door or family down the hall—zero anxiety, 100% bliss.
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4 border-2 border-gray-700 rounded bg-gray-900">
              <div className="text-3xl font-black mb-2">60dB</div>
              <div className="text-xs uppercase font-bold text-gray-400">Conversation</div>
            </div>
            <div className="p-4 border-2 border-gray-700 rounded bg-gray-900">
              <div className="text-3xl font-black mb-2">50dB</div>
              <div className="text-xs uppercase font-bold text-gray-400">Electric Toothbrush</div>
            </div>
            <div className="p-4 border-4 border-[#FAFF00] rounded bg-black transform scale-110 shadow-[0px_0px_20px_rgba(250,255,0,0.5)]">
              <div className="text-4xl font-black mb-2 text-[#FAFF00]">&lt;40dB</div>
              <div className="text-xs uppercase font-bold text-white">Nancy LEM™</div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: The "Partner Play" Unlock */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <NeoBadge className="bg-secondary text-secondary-foreground border-black">Relationship Hack</NeoBadge>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-none">
              The "Third Wheel" You'll <span className="bg-primary text-white px-2">Actually Want</span>
            </h2>
            <p className="text-lg font-medium leading-relaxed">
              The LEM isn't just for solo sessions. It's the ultimate wingman. Introducing a toy can be vulnerable, but LEM's friendly design makes it the perfect icebreaker.
            </p>
            <ul className="space-y-4 font-bold">
              <li className="flex items-center gap-3">
                <Heart className="text-primary fill-current" /> Use during foreplay to build insane anticipation
              </li>
              <li className="flex items-center gap-3">
                <Heart className="text-primary fill-current" /> Blend orgasms during intercourse
              </li>
              <li className="flex items-center gap-3">
                <Heart className="text-primary fill-current" /> Take the pressure off your partner to "perform"
              </li>
            </ul>
          </div>
          <div className="relative">
             <div className="bg-[#F0F0F0] border-4 border-black p-8 transform rotate-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
               <h3 className="text-2xl font-black uppercase mb-4 text-center">"Saved Our Sex Life"</h3>
               <p className="text-lg font-medium italic text-center">
                 "My husband bought this for me. I was hesitant, but we used it together and... WOW. It took the pressure off him and let us just have fun again. We're closer than ever."
               </p>
               <div className="mt-6 text-center font-bold uppercase">- Emily & Mark, Married 12 Years</div>
             </div>
          </div>
        </div>
      </section>

      {/* NEW: The "Battery Anxiety" Eliminator */}
      <section className="py-16 bg-[#FAFF00] border-b-4 border-black">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-4xl font-black uppercase mb-4">Ready When You Are. <br/>Every. Single. Time.</h2>
            <p className="text-xl font-medium">
              Nothing kills the mood like a dead battery. The LEM packs a massive <strong>120-minute runtime</strong>. That's weeks of daily use on a single charge.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-white border-4 border-black px-8 py-4 flex items-center gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Zap className="w-12 h-12 fill-black" />
              <div className="text-left">
                <div className="text-sm font-bold uppercase text-gray-500">Battery Life</div>
                <div className="text-4xl font-black">120 MINS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Price vs Value Reframing */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-12">
            Cheaper Than a Massage. <br/>Better Than Therapy.
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-100 border-4 border-gray-300 p-8 opacity-60">
              <h3 className="text-2xl font-bold uppercase mb-4">1 Hour Massage</h3>
              <div className="text-5xl font-black text-gray-500 mb-4">$120</div>
              <p className="font-bold text-gray-500">Lasts: 1 Day</p>
            </div>
            <div className="bg-white border-4 border-black p-8 transform scale-110 shadow-[8px_8px_0px_0px_var(--color-hot-pink)] relative z-10">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 font-bold uppercase text-sm border-2 border-black">Smart Choice</div>
              <h3 className="text-2xl font-black uppercase mb-4">Nancy LEM™</h3>
              <div className="text-5xl font-black text-black mb-4">$89</div>
              <p className="font-bold text-black">Lasts: Years of Bliss</p>
            </div>
          </div>
          <p className="mt-12 text-xl font-medium max-w-2xl mx-auto">
            The LEM isn't an expense; it's an investment in your mental health. Endorphins lower stress and boost sleep. Can you really put a price on feeling this good?
          </p>
        </div>
      </section>

      {/* Social Proof / Authority - Moved after Problem Section */}
      <section className="py-8 md:py-16 bg-primary border-b-4 border-black overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-80 grayscale mix-blend-multiply">
            {/* Placeholder logos using text for now */}
            {["VOGUE", "COSMOPOLITAN", "Refinery29", "Women's Health", "Forbes"].map((logo, i) => (
              <span key={i} className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter">{logo}</span>
            ))}
          </div>
          
          <div className="mt-10 md:mt-16 max-w-4xl mx-auto bg-white border-4 border-black p-6 pt-10 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 font-bold uppercase tracking-widest border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,0,153,1)]">
              Expert Endorsement
            </div>
            <blockquote className="text-lg md:text-3xl font-bold leading-tight text-center mb-6 md:mb-8">
              "I frequently recommend the LEM as a high-quality, beginner-friendly suction toy. It’s particularly useful for women who sometimes find they become less responsive to vibration after menopause or cancer."
            </blockquote>
            <div className="text-center border-t-2 border-black pt-6">
              <cite className="not-italic font-bold text-lg uppercase block">Dr. Angela Wright</cite>
              <span className="text-sm font-medium text-gray-600">GP, Menopause Specialist & Clinical Sexologist</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#FAFF00] border-b-4 border-black">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-black transform translate-x-4 translate-y-4"></div>
                <img src="/images/feature_air_suction.png" alt="Air Suction Technology" className="relative z-10 border-4 border-black w-full" />
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-12">
              <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
                Your Journey to <br/><span className="text-white bg-black px-2">Effortless Pleasure</span>
              </h2>
              
              <div className="space-y-8">
                {[
                  { step: "01", title: "Awaken Your Senses", desc: "A single press brings LEM to life. Soft, medical-grade silicone feels warm and inviting." },
                  { step: "02", title: "Discover Your Bliss", desc: "Explore 10 intensity levels. Air-suction surrounds your clitoris for deep satisfaction." },
                  { step: "03", title: "Unleash Your Orgasm", desc: "Feel the waves build. Consistent stimulation leads to longer, more powerful releases." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-5xl font-black text-transparent stroke-text-black" style={{ WebkitTextStroke: "2px black" }}>
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold uppercase mb-2">{item.title}</h3>
                      <p className="font-medium leading-relaxed max-w-md">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-16">
            Don't Settle For <span className="line-through decoration-4 decoration-primary">Regular</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <NeoCard className="bg-[#F0F0F0] p-8 opacity-70">
              <h3 className="text-2xl font-black uppercase mb-8 text-center border-b-2 border-black pb-4">Regular Toys</h3>
              <ul className="space-y-4">
                {[
                  "Inconsistent results",
                  "Noisy & clunky",
                  "Questionable materials",
                  "Shallow stimulation",
                  "Frustrating experience"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-gray-600">
                    <div className="bg-gray-400 text-white p-1 rounded-full"><VolumeX size={14} /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </NeoCard>

            <NeoCard className="bg-white p-8 transform md:-translate-y-4 md:scale-105 z-10 border-primary shadow-[8px_8px_0px_0px_var(--color-hot-pink)]">
              
              <h3 className="text-2xl font-black uppercase mb-8 text-center border-b-2 border-black pb-4 text-primary">The Nancy LEM™</h3>
              <ul className="space-y-4">
                {[
                  "Effortless, powerful orgasms",
                  "Whisper-quiet & discreet",
                  "100% Medical-grade silicone",
                  "Deep, targeted pleasure",
                  "Empowering & confident"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-black">
                    <div className="bg-primary text-white p-1 rounded-full"><Check size={14} strokeWidth={4} /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* NEW: The "Price vs. Value" Reframing */}
      <section className="py-20 bg-[#FAFF00] border-b-4 border-black">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-12">
            Cheaper Than A <br/><span className="bg-white px-2 border-2 border-black">Bad Date</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] opacity-50 grayscale hover:grayscale-0 transition-all">
              <h3 className="text-2xl font-black uppercase mb-4">Dinner & Drinks</h3>
              <div className="text-5xl font-black mb-4 text-gray-400">$150+</div>
              <ul className="text-left space-y-2 font-medium text-gray-500">
                <li>❌ Awkward conversation</li>
                <li>❌ 50/50 chance of fun</li>
                <li>❌ Over in 2 hours</li>
                <li>❌ No guarantee of... you know</li>
              </ul>
            </div>

            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_var(--color-hot-pink)] transform scale-105 relative z-10">
              <div className="absolute -top-4 -right-4 bg-destructive text-white px-4 py-1 font-bold uppercase border-2 border-black transform rotate-3">
                Best Value
              </div>
              <h3 className="text-2xl font-black uppercase mb-4">The LEM™</h3>
              <div className="text-5xl font-black mb-4 text-primary">$69</div>
              <ul className="text-left space-y-2 font-bold">
                <li className="flex items-center gap-2"><Check className="text-primary" size={20} /> Guaranteed satisfaction</li>
                <li className="flex items-center gap-2"><Check className="text-primary" size={20} /> Lasts for years</li>
                <li className="flex items-center gap-2"><Check className="text-primary" size={20} /> Available 24/7</li>
                <li className="flex items-center gap-2"><Check className="text-primary" size={20} /> 100% success rate</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Visual Reviews Section */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-8 h-8 fill-[#FAFF00] text-black" strokeWidth={2} />
              ))}
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-4">
              Real People. <span className="bg-black text-white px-2">Real Climaxes.</span>
            </h2>
            <p className="text-xl font-medium text-gray-600">Join 10,000+ happy customers who found their bliss.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { img: "/images/review1.jpg", text: "Best purchase ever!" },
              { img: "/images/review2.jpg", text: "So cute & powerful" },
              { img: "/images/review3.jpg", text: "Tiny but mighty" },
              { img: "/images/review4.jpg", text: "Love the packaging" },
              { img: "/images/review5.jpg", text: "Game changer" },
              { img: "/images/review6.jpg", text: "Highly recommend" },
              { img: "/images/review7.jpg", text: "Worth every penny" },
              { img: "/images/review8.jpg", text: "My new favorite" },
            ].map((review, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_var(--color-hot-pink)] transition-all cursor-pointer">
                <img src={review.img} alt="Customer Review" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white border-2 border-black px-3 py-1 font-bold text-sm uppercase rotate-[-2deg]">
                    {review.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard className="p-6 bg-[#F0F0F0] border-black">
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} className="fill-black text-black" />)}
              </div>
              <h4 className="font-black uppercase text-lg mb-2">"Finally, something that works!"</h4>
              <p className="text-sm font-medium text-gray-600 mb-4">
                "I've tried so many toys and nothing got me there. The LEM did it in under 3 minutes. I'm actually in shock. The air suction is totally different from vibration."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-black overflow-hidden">
                  <img src="/images/review9.jpg" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-sm">Sarah M.</div>
                  <div className="text-xs text-green-600 font-bold flex items-center gap-1"><Check size={10} /> Verified Buyer</div>
                </div>
              </div>
            </NeoCard>

            <NeoCard className="p-6 bg-white border-black transform md:-translate-y-4 shadow-[8px_8px_0px_0px_var(--color-hot-pink)]">
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} className="fill-primary text-primary" />)}
              </div>
              <h4 className="font-black uppercase text-lg mb-2">"My husband loves it too"</h4>
              <p className="text-sm font-medium text-gray-600 mb-4">
                "We use it together during foreplay and it has completely changed our intimacy. It's small enough not to get in the way but powerful enough to... well, you know."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-black overflow-hidden">
                  <img src="/images/review10.jpg" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-sm">Jessica K.</div>
                  <div className="text-xs text-green-600 font-bold flex items-center gap-1"><Check size={10} /> Verified Buyer</div>
                </div>
              </div>
            </NeoCard>

            <NeoCard className="p-6 bg-[#F0F0F0] border-black">
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} className="fill-black text-black" />)}
              </div>
              <h4 className="font-black uppercase text-lg mb-2">"Quiet and discreet"</h4>
              <p className="text-sm font-medium text-gray-600 mb-4">
                "I live with roommates so noise was a big concern. This thing is whisper quiet! Plus it looks so cute on my nightstand, doesn't look like a toy at all."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-black overflow-hidden">
                  <img src="/images/review1.jpg" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-sm">Emily R.</div>
                  <div className="text-xs text-green-600 font-bold flex items-center gap-1"><Check size={10} /> Verified Buyer</div>
                </div>
              </div>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-black text-white border-b-4 border-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#333 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-destructive text-white px-4 py-1 font-bold uppercase text-sm border-2 border-white mb-6 animate-pulse">
              Limited Time Offer Ends Soon
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 text-[#FAFF00]">
              Choose Your Pleasure
            </h2>
            <CountdownTimer className="mb-8" />
            <p className="text-xl font-medium text-gray-300">30-Day Risk-Free Guarantee. Free Discreet Shipping.</p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-[#FAFF00] text-black border-4 border-white p-8 relative transform hover:scale-105 transition-transform duration-300 shadow-[0px_0px_40px_rgba(250,255,0,0.5)]">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-2 font-bold uppercase text-sm border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap">
                Best Seller
              </div>
              <h3 className="text-4xl font-black uppercase mb-2 text-center">Starter</h3>
              <div className="text-7xl font-black mb-4 text-center">$89</div>
              <div className="flex justify-center mb-8">
                <div className="text-lg font-bold bg-white border-2 border-black inline-block px-4 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Save $70</div>
              </div>
              <ul className="space-y-4 mb-10 font-bold text-lg">
                <li className="flex items-center gap-3"><div className="bg-black text-white p-1 rounded-full"><Check size={16} strokeWidth={4} /></div> 1x Nancy LEM™</li>
                <li className="flex items-center gap-3"><div className="bg-black text-white p-1 rounded-full"><Check size={16} strokeWidth={4} /></div> Magnetic Charger</li>
                <li className="flex items-center gap-3"><div className="bg-black text-white p-1 rounded-full"><Check size={16} strokeWidth={4} /></div> Self-Love Manual</li>
              </ul>
              <div
                onClick={() => trackConversionAndNavigate()}
                className="block w-full cursor-pointer"
                role="link"
              >
                <NeoButton className="w-full text-xl py-8 uppercase tracking-wider" variant="default">
                  Select <Zap className="ml-2 h-6 w-6 fill-current" />
                </NeoButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-black uppercase text-center mb-12">Frequently Asked Questions</h2>
          <NeoAccordion items={[
            { title: "Is the LEM safe to use?", content: "Absolutely. The LEM is made from 100% medical-grade, non-porous silicone. It's hypoallergenic, phthalate-free, and completely body-safe. It's also IPX7 waterproof." },
            { title: "How does the air-suction technology work?", content: "Unlike traditional vibrators, the LEM uses rhythmic pulses of air to create a gentle suction effect around the clitoris. This stimulates the entire clitoris, leading to a deeper, more intense experience." },
            { title: "Is it discreet?", content: "Yes! The LEM is whisper-quiet and features a clever, unassuming lemon design. We also ship all our products in discreet, unbranded packaging." },
            { title: "Will it work for me if I'm a beginner?", content: "The LEM is perfect for beginners! It features 12 intensity levels, so you can start slow and find the perfect setting for your body." },
            { title: "What is the return policy?", content: "We offer a 30-day satisfaction guarantee. If you're not happy, just contact us for a hassle-free return." }
          ]} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F0F0F0] py-12 border-t-4 border-black">
        <div className="container text-center space-y-8">
          <div className="text-3xl font-black uppercase tracking-tighter">NANCY</div>
          <div className="flex justify-center gap-8 font-bold text-sm uppercase">
            <a href="#" className="hover:text-primary">Shop</a>
            <a href="#" className="hover:text-primary">About</a>
            <a href="#" className="hover:text-primary">Contact</a>
            <a href="#" className="hover:text-primary">Privacy</a>
          </div>
          <p className="text-gray-500 text-sm font-medium">© 2025 Nancy Wellness. All rights reserved.</p>
        </div>
      </footer>
      
      <StickyCTA />
    </div>
  );
}
