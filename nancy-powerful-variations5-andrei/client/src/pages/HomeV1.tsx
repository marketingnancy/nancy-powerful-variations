import { NeoButton, NeoCard, NeoBadge, NeoAccordion } from "@/components/NeoBrutalComponents";
import { CountdownTimer } from "@/components/CountdownTimer";
import { StickyCTAV1 } from "@/components/StickyCTAV1";
import { Star, Check, ShieldCheck, Zap, Heart, Wind, VolumeX, Droplets, X, AlertTriangle } from "lucide-react";
import { useState } from "react";

// Declare global types for tracking pixels
declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

/**
 * VARIATION 1: "The Broken Promise" — Pain-First Angle
 *
 * CRO Hypothesis: Leading with emotional pain + identity validation
 * ("you're not broken") will increase scroll depth 15-25% and CVR 8-12%
 * by capturing the frustrated/skeptical segment that bounces on benefit-first promises.
 *
 * Psychological Triggers: Loss aversion, identity validation, shame dissolution
 * Primary KPI: Scroll depth, time-on-page, CTR on pricing CTA
 */

const CHECKOUT_URL = "https://hellonancy.com/products/lem";

/** Fire Google Ads + Meta Pixel conversion events, then navigate */
function trackConversionAndNavigate(url: string = CHECKOUT_URL) {
  // Meta Pixel: InitiateCheckout
  if (window.fbq) {
    window.fbq('track', 'InitiateCheckout', {
      content_name: 'Nancy LEM',
      content_category: 'Wellness',
      value: 89.00,
      currency: 'USD',
    });
  }

  // Google Ads conversion
  if (window.gtag_report_conversion) {
    window.gtag_report_conversion(url);
  } else {
    // Fallback if gtag hasn't loaded yet
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

export default function HomeV1() {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-foreground overflow-x-hidden">
      {/* Top Bar - Same trust signals, reordered for pain-first (guarantee first) */}
      <div className="bg-black text-white py-2 px-4 text-center text-xs md:text-sm font-bold uppercase tracking-widest border-b-4 border-primary">
        <span className="mx-2">🛡️ 30-Day No-Questions Guarantee</span> |
        <span className="mx-2">🤐 Discreet Packaging</span> |
        <span className="mx-2">✈️ Free Worldwide Shipping</span>
      </div>

      {/* ============================================ */}
      {/* HERO — Pain-First: Lead with frustration     */}
      {/* ============================================ */}
      <header className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-[#FAFF00] border-b-4 border-black">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-left">
              <NeoBadge className="bg-destructive text-white border-black">An Honest Conversation</NeoBadge>
              <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                Tired of <span className="text-primary bg-white px-2 border-2 border-black inline-block transform -rotate-2">Faking It?</span> You're Not Broken. Your Toy Is.
              </h1>
              <p className="text-xl md:text-2xl font-medium max-w-lg leading-relaxed border-l-4 border-black pl-6">
                You've tried vibrators, read the articles, done everything "right." Still nothing. Here's the truth nobody tells you: <strong>it was never your fault.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton size="lg" className="text-xl px-8 py-8 h-auto w-full sm:w-auto" onClick={scrollToPricing}>
                  End The Frustration <Zap className="ml-2 h-6 w-6 fill-current" />
                </NeoButton>
                <div className="flex items-center gap-2 font-bold text-sm p-4 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex -space-x-2">
                    {[5, 9, 10, 26].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-black overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <span>500,000+ Women Felt the Same</span>
                </div>
              </div>

              <ul className="space-y-3 font-bold text-lg">
                {[
                  "No more faking. No more frustration.",
                  "Works even if nothing else has",
                  "Whisper-quiet — your secret, always",
                  "30-day guarantee or your money back"
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
                  src="/images/hero_intimate.jpg"
                  alt="Nancy LEM Device"
                  className="w-full h-auto object-cover border-2 border-black"
                />
                <div className="absolute -bottom-6 -left-6 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-3">
                  <div className="flex gap-1 text-primary mb-1">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} fill="currentColor" size={20} />)}
                  </div>
                  <p className="font-bold text-sm">"I finally stopped faking it."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ============================================ */}
      {/* PAIN AMPLIFICATION — Deeper emotional hooks  */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container max-w-4xl mx-auto text-center space-y-12">
          <NeoBadge className="bg-destructive text-white border-black mb-4">Let's Be Honest</NeoBadge>
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
            You've Been <span className="bg-black text-white px-2">Settling</span> For Years
          </h2>
          <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto">
            The half-hearted buzzing. The "maybe next time." The drawer full of expensive disappointments. You deserve to feel something <i>real</i> — and you've been waiting long enough.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "The Lie You Were Sold",
                desc: "\"Just buy a vibrator, it'll change your life!\" Sound familiar? But all you got was surface-level buzzing, numbness, and another night of... nothing.",
                icon: <AlertTriangle className="w-10 h-10" />
              },
              {
                title: "The Shame Spiral",
                desc: "When nothing works, you start wondering: \"Is something wrong with me?\" No. Nothing is wrong with you. 80% of women report the same frustration.",
                icon: <Heart className="w-10 h-10" />
              },
              {
                title: "The Silent Frustration",
                desc: "You can't exactly talk about it with friends. So you fake it, force it, or just... give up. The loneliest feeling isn't being alone — it's pretending.",
                icon: <VolumeX className="w-10 h-10" />
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

          {/* Emotional bridge to solution */}
          <div className="bg-black text-white p-8 border-4 border-primary max-w-3xl mx-auto shadow-[8px_8px_0px_0px_rgba(255,0,153,0.3)]">
            <p className="text-2xl font-black uppercase mb-4">Here's what nobody told you:</p>
            <p className="text-xl font-medium leading-relaxed">
              The problem was never your body. It was the technology. Traditional vibrators only stimulate the surface — but <strong>90% of your pleasure nerves are hidden deep inside.</strong> You need something that reaches them.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* EDUCATION — "Why everything failed you"       */}
      {/* ============================================ */}
      <section className="py-20 bg-[#FAFF00] border-b-4 border-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
        <div className="container grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            <h3 className="text-3xl font-black uppercase mb-6 border-b-4 border-primary pb-2 inline-block">Why Vibrators Failed You</h3>
            <p className="text-lg font-medium mb-6">
              The clitoris isn't a button — it's an iceberg. The tiny visible part is just 10% of the story. The rest? Deep internal structures called crura that vibrators can't reach.
            </p>
            <ul className="space-y-4">
              <li className="flex flex-col sm:flex-row items-start gap-3">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <div className="bg-destructive text-white p-1 shrink-0"><X size={14} strokeWidth={4} /></div>
                  <span className="font-bold sm:hidden">What You've Been Using:</span>
                </div>
                <div>
                  <span className="font-bold hidden sm:inline">What You've Been Using:</span> Vibrators that jackhammer the surface. Result? Numbness, overstimulation, and zero climax.
                </div>
              </li>
              <li className="flex flex-col sm:flex-row items-start gap-3">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <div className="bg-primary text-white p-1 shrink-0"><Check size={14} strokeWidth={4} /></div>
                  <span className="font-bold sm:hidden">What Actually Works:</span>
                </div>
                <div>
                  <span className="font-bold hidden sm:inline">What Actually Works:</span> Air-Pulse Technology creates a gentle vacuum that stimulates the <i>entire</i> clitoral structure — deep inside, where it matters. Result? Full-body, toe-curling release.
                </div>
              </li>
            </ul>
          </div>
          <div className="space-y-8">
            <NeoBadge className="bg-black text-white">The Science Behind Your Frustration</NeoBadge>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
              It Wasn't You. <br/><span className="text-primary bg-white px-2 border-2 border-black">It Was The Tech.</span>
            </h2>
            <p className="text-xl font-medium">
              The Nancy LEM™ doesn't vibrate. It uses medically-backed air suction to mimic the sensation of oral stimulation — reaching nerve endings that no vibrator ever could. This is the difference between tickling the surface and unlocking everything underneath.
            </p>
            <NeoButton size="lg" className="text-xl px-8 py-6 w-full md:w-auto" onClick={scrollToPricing}>
              See What You've Been Missing <Zap className="ml-2 h-6 w-6 fill-current" />
            </NeoButton>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* MECHANISM — Why air suction solves the pain   */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <NeoBadge className="bg-secondary text-secondary-foreground border-black mb-4">The End of Frustration</NeoBadge>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none mb-6">
              Finally, Something That <span className="bg-black text-white px-2">Actually Works</span>
            </h2>
            <p className="text-xl font-medium max-w-3xl mx-auto">
              After years of empty promises from buzzing toys, here's why the LEM is different — and why it works when nothing else did.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard className="p-8 border-black bg-[#F0F0F0]">
              <div className="bg-white border-2 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                <Wind className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4">No More Numbness</h3>
              <p className="font-medium leading-relaxed">
                Vibrators overload your nerves until they shut down. The LEM's vacuum effect gently increases blood flow and sensitivity by up to 200% — waking up nerve endings instead of killing them.
              </p>
            </NeoCard>

            <NeoCard className="p-8 border-black bg-white transform md:-translate-y-4 shadow-[8px_8px_0px_0px_var(--color-hot-pink)] z-10">
              <div className="bg-primary text-white border-2 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                <Droplets className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4">No More Faking</h3>
              <p className="font-medium leading-relaxed">
                Contactless air waves stimulate your nerves without direct friction. No overstimulation. No numbness. Just wave after wave of building intensity that leads somewhere <i>real</i>.
              </p>
            </NeoCard>

            <NeoCard className="p-8 border-black bg-[#F0F0F0]">
              <div className="bg-white border-2 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4">No More Waiting</h3>
              <p className="font-medium leading-relaxed">
                Air pressure waves reach the 8,000+ nerve endings hidden below the surface. Most women report their first real orgasm in under 3 minutes. Not 30. Not "maybe next time." Minutes.
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

      {/* ============================================ */}
      {/* VALIDATION TESTIMONIAL — "I was you"          */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
             <div className="relative">
                <div className="absolute inset-0 bg-primary transform translate-x-4 translate-y-4 border-4 border-black"></div>
                <div className="relative z-10 bg-white border-4 border-black p-2">
                  <img src="/images/pdp1.jpg" alt="Beginner Friendly" className="w-full h-auto object-cover border-2 border-black" />
                  <div className="absolute bottom-8 left-8 right-8 bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h3 className="text-2xl font-black uppercase mb-2">"I thought I was broken..."</h3>
                    <p className="text-lg font-medium italic mb-4">
                      "After 15 years of faking it, I genuinely believed something was wrong with me. The LEM proved me wrong in under 2 minutes. I actually cried — not from sadness, but relief."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-black overflow-hidden">
                        <img src="https://i.pravatar.cc/100?img=5" alt="User" />
                      </div>
                      <div>
                        <div className="font-bold text-sm">Sarah J., 42</div>
                        <div className="text-xs text-gray-500">First-Time User</div>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <NeoBadge className="bg-[#FAFF00] text-black border-black">You're Not Alone</NeoBadge>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
              Thousands of Women <br/><span className="bg-black text-white px-2">Felt Exactly Like You.</span>
            </h2>
            <p className="text-xl font-medium">
              Nervous. Skeptical. Tired of being disappointed. The LEM was designed for women who've given up on toys — one button, soft silicone, zero learning curve. It works even if you think nothing can.
            </p>
            <ul className="space-y-3 font-bold text-lg">
              <li className="flex items-center gap-3"><Check className="text-primary" /> Works for total beginners</li>
              <li className="flex items-center gap-3"><Check className="text-primary" /> Simple 2-button control</li>
              <li className="flex items-center gap-3"><Check className="text-primary" /> Non-intimidating, cute design</li>
              <li className="flex items-center gap-3"><Check className="text-primary" /> 10 intensity levels — start as gentle as you need</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* LIFESTYLE GALLERY — Same as control           */}
      {/* ============================================ */}
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

      {/* ============================================ */}
      {/* UNBOXING — Reframed as "self-care ritual"     */}
      {/* ============================================ */}
      <section className="py-20 bg-[#FAFF00] border-b-4 border-black">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <NeoBadge className="bg-black text-white border-black">What's In The Box</NeoBadge>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
              The Apology <br/><span className="bg-white px-2 border-2 border-black">You Deserve</span>
            </h2>
            <p className="text-xl font-medium">
              Consider this a gift from you, to you. After years of settling for less, you deserve something that actually delivers. Premium packaging. Discreet delivery. Everything you need to finally feel something real.
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
            <img src="/images/discreet_packaging.jpg" alt="Unboxing" className="relative z-10 w-full h-auto border-4 border-black" />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHISPER-QUIET — Pain: embarrassment/privacy   */}
      {/* ============================================ */}
      <section className="py-16 bg-black text-white border-b-4 border-white">
        <div className="container text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-8">
            Because the Last Thing You Need <br/><span className="text-primary">Is More Anxiety.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Worried about roommates hearing? Partner in the next room? Kids down the hall? The LEM runs quieter than a library whisper. One less thing to stress about.
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

      {/* ============================================ */}
      {/* PARTNER PLAY — Pain: relationship strain      */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <NeoBadge className="bg-secondary text-secondary-foreground border-black">For Your Relationship Too</NeoBadge>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-none">
              Stop Pretending. <span className="bg-primary text-white px-2">Start Connecting.</span>
            </h2>
            <p className="text-lg font-medium leading-relaxed">
              Faking it doesn't just hurt you — it creates distance. When you finally experience real pleasure, it changes everything. For you and your partner. The LEM takes the pressure off both of you.
            </p>
            <ul className="space-y-4 font-bold">
              <li className="flex items-center gap-3">
                <Heart className="text-primary fill-current" /> Use during foreplay to build real anticipation
              </li>
              <li className="flex items-center gap-3">
                <Heart className="text-primary fill-current" /> Experience blended orgasms during intimacy
              </li>
              <li className="flex items-center gap-3">
                <Heart className="text-primary fill-current" /> Remove the performance pressure for both of you
              </li>
            </ul>
          </div>
          <div className="relative">
             <div className="bg-[#F0F0F0] border-4 border-black p-8 transform rotate-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
               <h3 className="text-2xl font-black uppercase mb-4 text-center">"It Saved Us"</h3>
               <p className="text-lg font-medium italic text-center">
                 "After 12 years of marriage, I'd stopped enjoying intimacy entirely. My husband bought the LEM and we tried it together. For the first time in years, I didn't have to fake anything. We both cried."
               </p>
               <div className="mt-6 text-center font-bold uppercase">- Emily & Mark, Married 12 Years</div>
             </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BATTERY — Pain: unreliable past toys          */}
      {/* ============================================ */}
      <section className="py-16 bg-[#FAFF00] border-b-4 border-black">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-4xl font-black uppercase mb-4">Never Left Hanging. <br/>Never Again.</h2>
            <p className="text-xl font-medium">
              Remember that time you were <i>so close</i> and the battery died? The LEM packs a massive <strong>120-minute runtime</strong>. That's weeks of daily use on a single charge. No more dead-battery heartbreak.
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

      {/* ============================================ */}
      {/* PRICE VS VALUE — Pain: wasted money            */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-12">
            How Much Have You Already <br/>Wasted on Things That Don't Work?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-100 border-4 border-gray-300 p-8 opacity-60">
              <h3 className="text-2xl font-bold uppercase mb-4">Your Drawer of Regrets</h3>
              <div className="text-5xl font-black text-gray-500 mb-4">$300+</div>
              <p className="font-bold text-gray-500">Result: Still faking it</p>
            </div>
            <div className="bg-white border-4 border-black p-8 transform scale-110 shadow-[8px_8px_0px_0px_var(--color-hot-pink)] relative z-10">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 font-bold uppercase text-sm border-2 border-black">The Last Toy You'll Buy</div>
              <h3 className="text-2xl font-black uppercase mb-4">Nancy LEM™</h3>
              <div className="text-5xl font-black text-black mb-4">$89</div>
              <p className="font-bold text-black">Result: Years of real satisfaction</p>
            </div>
          </div>
          <p className="mt-12 text-xl font-medium max-w-2xl mx-auto">
            Stop throwing money at disappointment. The LEM pays for itself the first time you don't have to fake it. That's not an expense — it's overdue self-care.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* AUTHORITY — Same logos + expert                */}
      {/* ============================================ */}
      <section className="py-8 md:py-16 bg-primary border-b-4 border-black overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-80 grayscale mix-blend-multiply">
            {["VOGUE", "COSMOPOLITAN", "Refinery29", "Women's Health", "Forbes"].map((logo, i) => (
              <span key={i} className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter">{logo}</span>
            ))}
          </div>

          <div className="mt-10 md:mt-16 max-w-4xl mx-auto bg-white border-4 border-black p-6 pt-10 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 font-bold uppercase tracking-widest border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,0,153,1)]">
              Expert Endorsement
            </div>
            <blockquote className="text-lg md:text-3xl font-bold leading-tight text-center mb-6 md:mb-8">
              "I frequently recommend the LEM as a high-quality, beginner-friendly suction toy. It's particularly useful for women who sometimes find they become less responsive to vibration after menopause or cancer."
            </blockquote>
            <div className="text-center border-t-2 border-black pt-6">
              <cite className="not-italic font-bold text-lg uppercase block">Dr. Angela Wright</cite>
              <span className="text-sm font-medium text-gray-600">GP, Menopause Specialist & Clinical Sexologist</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* HOW IT WORKS — Framed as "journey from pain"  */}
      {/* ============================================ */}
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
                From Frustration to <br/><span className="text-white bg-black px-2">Your First Real O</span>
              </h2>

              <div className="space-y-8">
                {[
                  { step: "01", title: "Forget Everything Before", desc: "One press. Soft, medical-grade silicone warms to your touch. No learning curve. No intimidation. Just you." },
                  { step: "02", title: "Feel Something Different", desc: "Gentle air waves — not buzzing — surround and stimulate. Start at level 1. You'll know when to go higher." },
                  { step: "03", title: "Experience What You Deserve", desc: "The waves build. Your body responds. This time, it's real. No faking. No forcing. Just release." }
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

      {/* ============================================ */}
      {/* COMPARISON — Pain-framed "what you've endured" */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-16">
            Stop Settling for <span className="line-through decoration-4 decoration-primary">Disappointment</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <NeoCard className="bg-[#F0F0F0] p-8 opacity-70">
              <h3 className="text-2xl font-black uppercase mb-8 text-center border-b-2 border-black pb-4">What You've Been Through</h3>
              <ul className="space-y-4">
                {[
                  "Numb after 5 minutes",
                  "So loud you're anxious the whole time",
                  "Questionable materials on your body",
                  "Surface-only — never gets deep enough",
                  "Another night of \"maybe next time\""
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-gray-600">
                    <div className="bg-gray-400 text-white p-1 rounded-full"><X size={14} /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </NeoCard>

            <NeoCard className="bg-white p-8 transform md:-translate-y-4 md:scale-105 z-10 border-primary shadow-[8px_8px_0px_0px_var(--color-hot-pink)]">
              <h3 className="text-2xl font-black uppercase mb-8 text-center border-b-2 border-black pb-4 text-primary">What You Deserve</h3>
              <ul className="space-y-4">
                {[
                  "Real orgasms — not performances",
                  "Whisper-quiet, zero anxiety",
                  "100% Medical-grade silicone",
                  "Deep stimulation that actually reaches you",
                  "Confidence in your own body again"
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

      {/* ============================================ */}
      {/* PRICE VS BAD DATE — Same but pain-twist       */}
      {/* ============================================ */}
      <section className="py-20 bg-[#FAFF00] border-b-4 border-black">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-12">
            Less Than a <br/><span className="bg-white px-2 border-2 border-black">Disappointing Night Out</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] opacity-50 grayscale hover:grayscale-0 transition-all">
              <h3 className="text-2xl font-black uppercase mb-4">Dinner & Drinks</h3>
              <div className="text-5xl font-black mb-4 text-gray-400">$150+</div>
              <ul className="text-left space-y-2 font-medium text-gray-500">
                <li>❌ Awkward conversation</li>
                <li>❌ 50/50 chance of fun</li>
                <li>❌ Over in 2 hours</li>
                <li>❌ No guarantee of satisfaction</li>
              </ul>
            </div>

            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_var(--color-hot-pink)] transform scale-105 relative z-10">
              <div className="absolute -top-4 -right-4 bg-destructive text-white px-4 py-1 font-bold uppercase border-2 border-black transform rotate-3">
                You Deserve This
              </div>
              <h3 className="text-2xl font-black uppercase mb-4">The LEM™</h3>
              <div className="text-5xl font-black mb-4 text-primary">$69</div>
              <ul className="text-left space-y-2 font-bold">
                <li className="flex items-center gap-2"><Check className="text-primary" size={20} /> Guaranteed real satisfaction</li>
                <li className="flex items-center gap-2"><Check className="text-primary" size={20} /> Lasts for years</li>
                <li className="flex items-center gap-2"><Check className="text-primary" size={20} /> Available whenever you need it</li>
                <li className="flex items-center gap-2"><Check className="text-primary" size={20} /> No more faking required</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* REVIEWS — Lead with transformation stories    */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-8 h-8 fill-[#FAFF00] text-black" strokeWidth={2} />
              ))}
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-4">
              They Were Skeptical Too. <span className="bg-black text-white px-2">Then This Happened.</span>
            </h2>
            <p className="text-xl font-medium text-gray-600">Real stories from women who almost didn't buy it.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { img: "/images/review1.jpg", text: "Changed everything" },
              { img: "/images/review2.jpg", text: "So cute & powerful" },
              { img: "/images/review3.jpg", text: "Tiny but mighty" },
              { img: "/images/review4.jpg", text: "Wish I bought sooner" },
              { img: "/images/review5.jpg", text: "Game changer" },
              { img: "/images/review6.jpg", text: "Finally, relief" },
              { img: "/images/review7.jpg", text: "Worth every penny" },
              { img: "/images/review8.jpg", text: "No more faking" },
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
              <h4 className="font-black uppercase text-lg mb-2">"I almost didn't buy it."</h4>
              <p className="text-sm font-medium text-gray-600 mb-4">
                "After wasting money on 4 different vibrators that did nothing, I was done. My friend convinced me to try this. Under 3 minutes. I'm in shock. I wish I hadn't waited so long."
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
              <h4 className="font-black uppercase text-lg mb-2">"Stopped faking. Started living."</h4>
              <p className="text-sm font-medium text-gray-600 mb-4">
                "My husband and I were in a rut. I hadn't had a real orgasm in years. We tried the LEM together and it was like rediscovering each other. This little thing saved our marriage."
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
              <h4 className="font-black uppercase text-lg mb-2">"Nothing ever worked until this."</h4>
              <p className="text-sm font-medium text-gray-600 mb-4">
                "I genuinely thought I was incapable. 10+ years of nothing. A friend recommended the LEM and I was skeptical. First time using it? I literally couldn't believe it. I'm a new person."
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

      {/* ============================================ */}
      {/* PRICING — Relief-framed CTA                   */}
      {/* ============================================ */}
      <section id="pricing" className="py-24 bg-black text-white border-b-4 border-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#333 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-destructive text-white px-4 py-1 font-bold uppercase text-sm border-2 border-white mb-6 animate-pulse">
              Limited Time Offer Ends Soon
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 text-[#FAFF00]">
              You've Waited Long Enough
            </h2>
            <CountdownTimer className="mb-8" />
            <p className="text-xl font-medium text-gray-300">30-Day Risk-Free Guarantee. If it doesn't work for you, send it back. No questions.</p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-[#FAFF00] text-black border-4 border-white p-8 relative transform hover:scale-105 transition-transform duration-300 shadow-[0px_0px_40px_rgba(250,255,0,0.5)]">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-2 font-bold uppercase text-sm border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap">
                Most Popular
              </div>
              <h3 className="text-4xl font-black uppercase mb-2 text-center">Your Fresh Start</h3>
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
                  Stop Settling. Start Feeling. <Zap className="ml-2 h-6 w-6 fill-current" />
                </NeoButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FAQ — Objection handling for skeptics          */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-black uppercase text-center mb-12">Still Have Doubts? Good. Read This.</h2>
          <NeoAccordion items={[
            { title: "\"I've tried everything. Why would this be different?\"", content: "Because the LEM doesn't vibrate — it uses air-pulse technology that works completely differently. Traditional vibrators only stimulate the surface. The LEM creates gentle vacuum waves that reach the entire clitoral structure, including the 90% that's hidden inside. It's literally a different kind of stimulation your body hasn't experienced before." },
            { title: "\"Is it safe? I'm nervous about trying something new.\"", content: "Completely. The LEM is made from 100% medical-grade, non-porous silicone. It's hypoallergenic, phthalate-free, and IPX7 waterproof. It's recommended by Dr. Angela Wright, a GP and Clinical Sexologist. You're in safe hands." },
            { title: "\"What if it doesn't work for me?\"", content: "We offer a 30-day satisfaction guarantee. If you don't experience the difference, send it back for a full refund. No questions, no judgment. But with 500,000+ satisfied users, we're confident." },
            { title: "\"I'm a total beginner. Is it complicated?\"", content: "It's the opposite of complicated. Two buttons. 10 intensity levels starting from feather-light. Soft silicone. It looks like a cute lemon, not a scary machine. Most beginners say they wish they'd tried it sooner." },
            { title: "\"Will anyone know what I ordered?\"", content: "Never. The LEM ships in discreet, unbranded packaging. No logos. No product names. Your bank statement will show a generic company name. Your secret is completely safe." }
          ]} />
        </div>
      </section>

      {/* ============================================ */}
      {/* FINAL PUSH — Emotional close                  */}
      {/* ============================================ */}
      <section className="py-16 bg-primary border-b-4 border-black">
        <div className="container max-w-3xl text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white leading-tight">
            Every Night You Wait Is Another Night You Settle.
          </h2>
          <p className="text-xl font-medium text-white/90">
            You've been patient long enough. You've blamed yourself long enough. It's time to feel something real.
          </p>
          <NeoButton size="lg" className="text-xl px-12 py-8 bg-black text-white hover:bg-black/90 border-white" onClick={scrollToPricing}>
            I'm Done Waiting <Zap className="ml-2 h-6 w-6 fill-current" />
          </NeoButton>
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
          <p className="text-gray-500 text-sm font-medium">&copy; 2025 Nancy Wellness. All rights reserved.</p>
        </div>
      </footer>

      <StickyCTAV1 />
    </div>
  );
}