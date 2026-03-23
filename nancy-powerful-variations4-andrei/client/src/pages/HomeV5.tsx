import { NeoButton, NeoCard, NeoBadge, NeoAccordion } from "@/components/NeoBrutalComponents";
import { CountdownTimer } from "@/components/CountdownTimer";
import { StickyCTA } from "@/components/StickyCTA";
import { Star, Check, ShieldCheck, Zap, Heart, Wind, VolumeX, Droplets } from "lucide-react";

// Declare global types for tracking pixels
declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

/**
 * VARIATION 5: "The Big Lie" — Myth-Busting/Educational Angle
 *
 * CRO Hypothesis: Leading with myth-busting creates curiosity loops that
 * increase scroll depth 20-30% and CVR 10-15% by positioning the reader
 * as newly educated and the LEM as the only logical conclusion.
 *
 * Psychological Triggers: Curiosity gap, authority bias, cognitive dissonance
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

export default function HomeV5() {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-foreground overflow-x-hidden">
      {/* Top Bar */}
      <div className="bg-black text-white py-2 px-4 text-center text-xs md:text-sm font-bold uppercase tracking-widest border-b-4 border-primary">
        <span className="mx-2">🛡️ 30-Day No-Questions Guarantee</span> |
        <span className="mx-2">🤐 Discreet Packaging</span> |
        <span className="mx-2">✈️ Free Worldwide Shipping</span>
      </div>

      {/* ============================================ */}
      {/* HERO — Myth-Busting: Lead with revelation    */}
      {/* ============================================ */}
      <header className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-[#FAFF00] border-b-4 border-black">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-left">
              <NeoBadge className="bg-destructive text-white border-black">The Truth They Don't Tell You</NeoBadge>
              <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                Everything You Were Taught About <span className="text-primary bg-white px-2 border-2 border-black inline-block transform -rotate-2">Orgasms</span> Is Wrong
              </h1>
              <p className="text-xl md:text-2xl font-medium max-w-lg leading-relaxed border-l-4 border-black pl-6">
                The $30 billion pleasure industry has been selling you the wrong technology for decades. Here are the 3 lies — and the science that exposes them.
              </p>

              <ul className="space-y-3 font-bold text-lg">
                {[
                  "MYTH: More vibration = better orgasms",
                  "MYTH: If it doesn't work, something's wrong with you",
                  "MYTH: All pleasure toys are basically the same",
                  "The truth will change everything"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="bg-black text-white p-1"><Check size={16} strokeWidth={4} /></div>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton size="lg" className="text-xl px-8 py-8 h-auto w-full sm:w-auto" onClick={scrollToPricing}>
                  See the Evidence <Zap className="ml-2 h-6 w-6 fill-current" />
                </NeoButton>
                <div className="flex items-center gap-2 font-bold text-sm p-4 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex -space-x-2">
                    {[5, 9, 10, 26].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-black overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <span>500,000+ Women Know the Truth</span>
                </div>
              </div>
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
                  <p className="font-bold text-sm">"The science doesn't lie."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ============================================ */}
      {/* LIE #1 — Vibrators were never designed       */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <NeoBadge className="bg-destructive text-white border-black mb-4">Myth Busted</NeoBadge>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none mb-6">
              LIE #1: Vibrators Are <span className="bg-black text-white px-2">Designed</span> for Female Orgasms
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-black uppercase">Vibrators Were Never Designed to Make You Climax</h3>
              <p className="text-lg font-medium leading-relaxed">
                The vibrator was adapted from medical massage tools in the 1800s. It was designed to relieve muscle tension, not deliver orgasms. The core technology has not fundamentally changed in over a century.
              </p>
              <p className="text-lg font-medium leading-relaxed">
                Vibration scatters energy across the surface. It creates a buzzing sensation on the skin, but the clitoris is not a surface organ. The visible tip is only 10% of the full structure. The other 90% — the crura, the bulbs, the deep nerve networks — sits beneath the surface, completely unreached by vibration.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary transform translate-x-4 translate-y-4 border-4 border-black"></div>
              <img src="/images/feature_air_suction.png" alt="Clitoral anatomy" className="relative z-10 w-full border-4 border-black bg-white" />
            </div>
          </div>

          <div className="bg-black text-white p-8 border-4 border-primary max-w-3xl mx-auto shadow-[8px_8px_0px_0px_rgba(255,0,153,0.3)]">
            <p className="text-sm font-bold uppercase tracking-widest mb-2 text-[#FAFF00]">The Truth</p>
            <p className="text-xl font-medium leading-relaxed">
              You need technology that reaches the ENTIRE clitoral structure — not just the visible tip. Surface vibration was never the answer.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* LIE #2 — Something is wrong with you         */}
      {/* ============================================ */}
      <section className="py-20 bg-[#FAFF00] border-b-4 border-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
        <div className="container max-w-4xl mx-auto space-y-12 relative z-10">
          <div className="text-center">
            <NeoBadge className="bg-destructive text-white border-black mb-4">Myth Busted</NeoBadge>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none mb-6">
              LIE #2: If You Can't Orgasm, <span className="bg-white px-2 border-2 border-black">Something Is Wrong With You</span>
            </h2>
          </div>

          <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-2xl font-black uppercase mb-6">There's Nothing Wrong With You. The Technology Is Broken.</h3>
            <p className="text-lg font-medium leading-relaxed mb-6">
              80% of women report difficulty achieving orgasm with traditional vibrators. This is not a personal failure — it is a design problem. When millions of people struggle with the same tool, the tool is the issue.
            </p>
            <p className="text-lg font-medium leading-relaxed mb-6">
              Here is how desensitization works: intense vibration overstimulates the surface nerve endings. Your body's defense response is to reduce sensitivity. The result? Numbness, frustration, and self-blame. You turn up the intensity, which makes it worse. It is a cycle designed to fail.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                { step: "01", label: "Overstimulation", desc: "Vibration overloads surface nerves beyond their threshold" },
                { step: "02", label: "Numbness", desc: "Your body reduces sensitivity as a protective response" },
                { step: "03", label: "Self-Blame", desc: "You internalize a design flaw as a personal failure" }
              ].map((item, i) => (
                <div key={i} className="bg-[#F0F0F0] border-2 border-black p-4 text-center">
                  <div className="text-3xl font-black text-primary mb-2">{item.step}</div>
                  <div className="font-black uppercase text-sm mb-1">{item.label}</div>
                  <p className="text-sm font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black text-white p-8 border-4 border-[#FAFF00] max-w-3xl mx-auto shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
            <p className="text-sm font-bold uppercase tracking-widest mb-2 text-[#FAFF00]">The Truth</p>
            <p className="text-xl font-medium leading-relaxed">
              Your body has 8,000+ nerve endings designed for pleasure. You just need the right technology to activate them — not more of the same technology that caused the problem.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* LIE #3 — All toys are the same               */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container max-w-5xl mx-auto space-y-12">
          <div className="text-center">
            <NeoBadge className="bg-destructive text-white border-black mb-4">Myth Busted</NeoBadge>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none mb-6">
              LIE #3: All Pleasure Toys Are <span className="bg-black text-white px-2">Basically the Same</span>
            </h2>
            <p className="text-xl font-medium max-w-3xl mx-auto">
              Air-Pulse vs Vibration: They are not even the same category.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <NeoCard className="bg-[#F0F0F0] p-8 opacity-70">
              <h3 className="text-2xl font-black uppercase mb-8 text-center border-b-2 border-black pb-4">Traditional Vibration</h3>
              <ul className="space-y-4">
                {[
                  "Direct surface contact required",
                  "Energy scatters across the skin",
                  "Leads to desensitization over time",
                  "Reaches only 10% of clitoral structure",
                  "Technology unchanged since the 1900s"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-gray-600">
                    <div className="bg-gray-400 text-white p-1 rounded-full"><Zap size={14} /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </NeoCard>

            <NeoCard className="bg-white p-8 transform md:-translate-y-4 md:scale-105 z-10 border-primary shadow-[8px_8px_0px_0px_var(--color-hot-pink)]">
              <h3 className="text-2xl font-black uppercase mb-8 text-center border-b-2 border-black pb-4 text-primary">Air-Pulse Technology</h3>
              <ul className="space-y-4">
                {[
                  "Contactless pressure waves",
                  "Focused energy penetrates deep tissue",
                  "No desensitization — sensitivity increases",
                  "Stimulates the entire clitoral structure",
                  "Medically-backed vacuum technology"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-black">
                    <div className="bg-primary text-white p-1 rounded-full"><Check size={14} strokeWidth={4} /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </NeoCard>
          </div>

          <div className="bg-black text-white p-8 border-4 border-primary max-w-3xl mx-auto shadow-[8px_8px_0px_0px_rgba(255,0,153,0.3)]">
            <p className="text-sm font-bold uppercase tracking-widest mb-2 text-[#FAFF00]">The Truth</p>
            <p className="text-xl font-medium leading-relaxed">
              The Nancy LEM uses medically-backed vacuum technology to stimulate the entire clitoral structure. It is not a vibrator. It is what comes after.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SCIENCE — Mechanism explained                 */}
      {/* ============================================ */}
      <section className="py-20 bg-[#FAFF00] border-b-4 border-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
        <div className="container max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <NeoBadge className="bg-black text-white border-black mb-4">The Real Technology</NeoBadge>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none mb-6">
              What Happens When You Design for <span className="bg-white px-2 border-2 border-black">Actual Female Anatomy</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard className="p-8 border-black bg-white">
              <div className="bg-primary text-white border-2 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4">Vascular Engorgement</h3>
              <p className="font-medium leading-relaxed">
                Gentle vacuum pressure increases blood flow to the clitoral tissue by up to 200%. More blood flow means heightened sensitivity, fuller engorgement, and stronger orgasmic response. This is the mechanism your body was designed for.
              </p>
            </NeoCard>

            <NeoCard className="p-8 border-black bg-white transform md:-translate-y-4 shadow-[8px_8px_0px_0px_var(--color-hot-pink)] z-10">
              <div className="bg-primary text-white border-2 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                <Wind className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4">Contactless Stimulation</h3>
              <p className="font-medium leading-relaxed">
                Air-pulse waves create rhythmic pressure changes around the clitoris without direct friction. No contact means no numbness, no overstimulation, no desensitization. Your sensitivity actually increases with use.
              </p>
            </NeoCard>

            <NeoCard className="p-8 border-black bg-white">
              <div className="bg-primary text-white border-2 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                <Droplets className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4">Deep Tissue Reach</h3>
              <p className="font-medium leading-relaxed">
                Pressure waves penetrate beyond the surface to stimulate all 8,000+ nerve endings, including the internal crura and bulbs. This is full clitoral engagement — the kind vibrators physically cannot provide.
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
      {/* EXPERT — Dr. Angela Wright endorsement        */}
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
              Experts Who've Seen Through the Myths
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
      {/* BEGINNER — Post-myth-bust product intro       */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-primary transform translate-x-4 translate-y-4 border-4 border-black"></div>
              <div className="relative z-10 bg-white border-4 border-black p-2">
                <img src="/images/pdp1.jpg" alt="Beginner Friendly" className="w-full h-auto object-cover border-2 border-black" />
                <div className="absolute bottom-8 left-8 right-8 bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="text-2xl font-black uppercase mb-2">"It finally makes sense."</h3>
                  <p className="text-lg font-medium italic mb-4">
                    "Once I understood WHY vibrators never worked, the LEM made perfect sense. It was like someone finally designed something for my actual body. Under 2 minutes. I wish I had known sooner."
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
            <NeoBadge className="bg-[#FAFF00] text-black border-black">Now That You Know</NeoBadge>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
              Informed. Empowered. <br/><span className="bg-black text-white px-2">Ready.</span>
            </h2>
            <p className="text-xl font-medium">
              Now that you understand why vibrators fail, meet the alternative. The LEM is approachable, simple, and non-intimidating. One button to start. Soft medical-grade silicone. 10 levels from feather-light to intense. Designed for the body you actually have.
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
      {/* LIFESTYLE GALLERY — Myth-busting micro-copy   */}
      {/* ============================================ */}
      <section className="py-20 bg-black text-white border-b-4 border-white overflow-hidden">
        <div className="container">
          <div className="text-center mb-16">
            <NeoBadge className="bg-primary text-white border-white mb-4">See the Difference</NeoBadge>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none text-[#FAFF00]">
              Designed by Science, <span className="bg-white text-black px-2">Built for You</span>
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
      {/* UNBOXING — The Informed Choice, Delivered     */}
      {/* ============================================ */}
      <section className="py-20 bg-[#FAFF00] border-b-4 border-black">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <NeoBadge className="bg-black text-white border-black">What's In The Box</NeoBadge>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
              The Informed Choice, <br/><span className="bg-white px-2 border-2 border-black">Delivered</span>
            </h2>
            <p className="text-xl font-medium">
              No more guessing. No more hoping the next vibrator will be different. This is a decision based on science, not marketing hype. Premium packaging. Discreet delivery. Everything you need to experience what the research promised.
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

      {/* ============================================ */}
      {/* WHISPER-QUIET — Myth: louder = more powerful  */}
      {/* ============================================ */}
      <section className="py-16 bg-black text-white border-b-4 border-white">
        <div className="container text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-8">
            Another Myth: <br/><span className="text-primary">Louder Means More Powerful.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            The pleasure industry convinced you that loud motors mean powerful performance. The truth? The most advanced technology is nearly silent. Air-pulse waves deliver deeper stimulation with less noise than your electric toothbrush.
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
      {/* PARTNER PLAY — Truth about shared pleasure    */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <NeoBadge className="bg-secondary text-secondary-foreground border-black">The Truth About Intimacy</NeoBadge>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-none">
              Better Science = <span className="bg-primary text-white px-2">Better Connection.</span>
            </h2>
            <p className="text-lg font-medium leading-relaxed">
              When you understand how your body actually works, intimacy stops being a performance. The LEM takes the guesswork out of pleasure — for you and your partner. No more pressure. No more pretending. Just real connection built on real sensation.
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
              <h3 className="text-2xl font-black uppercase mb-4 text-center">"Knowledge Changed Everything"</h3>
              <p className="text-lg font-medium italic text-center">
                "Once my partner and I understood why vibrators never worked for me, we tried the LEM together. For the first time in years, I didn't have to fake anything. Understanding the science removed all the shame."
              </p>
              <div className="mt-6 text-center font-bold uppercase">- Emily & Mark, Married 12 Years</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BATTERY — Myth: you need to recharge daily    */}
      {/* ============================================ */}
      <section className="py-16 bg-[#FAFF00] border-b-4 border-black">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-4xl font-black uppercase mb-4">Myth: Good Toys <br/>Die Quickly.</h2>
            <p className="text-xl font-medium">
              Cheap vibrators train you to expect dead batteries at the worst possible moment. The LEM packs a massive <strong>120-minute runtime</strong> on a single magnetic charge. That is weeks of daily use. Because real technology does not leave you hanging.
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
      {/* COMPARISON — The Myth vs The Reality          */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-16">
            The Myth vs <span className="bg-black text-white px-2">The Reality</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <NeoCard className="bg-[#F0F0F0] p-8 opacity-70">
              <h3 className="text-2xl font-black uppercase mb-8 text-center border-b-2 border-black pb-4">What the Industry Told You</h3>
              <ul className="space-y-4">
                {[
                  "More vibration intensity = better results",
                  "If it doesn't work, you're the problem",
                  "All toys deliver the same type of stimulation",
                  "Louder motors mean more power",
                  "Surface stimulation is enough"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-gray-600">
                    <div className="bg-gray-400 text-white p-1 rounded-full"><Zap size={14} /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </NeoCard>

            <NeoCard className="bg-white p-8 transform md:-translate-y-4 md:scale-105 z-10 border-primary shadow-[8px_8px_0px_0px_var(--color-hot-pink)]">
              <h3 className="text-2xl font-black uppercase mb-8 text-center border-b-2 border-black pb-4 text-primary">What the Science Shows</h3>
              <ul className="space-y-4">
                {[
                  "Contactless pressure waves reach deeper tissue",
                  "80% of women struggle with vibrators — it's the tech",
                  "Air-pulse is a fundamentally different category",
                  "Near-silent operation, far superior results",
                  "Full clitoral engagement requires deep stimulation"
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
      {/* PRICE — How much have you spent on myths?     */}
      {/* ============================================ */}
      <section className="py-20 bg-[#FAFF00] border-b-4 border-black">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-12">
            How Much Have You <br/><span className="bg-white px-2 border-2 border-black">Spent on Myths?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white border-4 border-gray-300 p-8 opacity-60">
              <h3 className="text-2xl font-bold uppercase mb-4">Your Drawer of Failed Vibrators</h3>
              <div className="text-5xl font-black text-gray-500 mb-4">$300+</div>
              <p className="font-bold text-gray-500">Based on lies. Built on the wrong science.</p>
            </div>
            <div className="bg-white border-4 border-black p-8 transform scale-110 shadow-[8px_8px_0px_0px_var(--color-hot-pink)] relative z-10">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 font-bold uppercase text-sm border-2 border-black">The Informed Choice</div>
              <h3 className="text-2xl font-black uppercase mb-4">Nancy LEM™</h3>
              <div className="text-5xl font-black text-black mb-4">$89</div>
              <p className="font-bold text-black">Based on research. Built for your anatomy.</p>
            </div>
          </div>
          <p className="mt-12 text-xl font-medium max-w-2xl mx-auto">
            Stop funding an industry that profits from your confusion. The LEM is the informed choice — backed by science, designed for results.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* REVIEWS — Women Who Learned the Truth         */}
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
              Women Who <span className="bg-black text-white px-2">Learned the Truth</span>
            </h2>
            <p className="text-xl font-medium text-gray-600">Real stories from women who stopped believing the myths.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { img: "/images/review1.jpg", text: "The truth changed everything" },
              { img: "/images/review2.jpg", text: "Finally, real science" },
              { img: "/images/review3.jpg", text: "Tiny but revolutionary" },
              { img: "/images/review4.jpg", text: "Wish I knew sooner" },
              { img: "/images/review5.jpg", text: "No more myths" },
              { img: "/images/review6.jpg", text: "Evidence-based results" },
              { img: "/images/review7.jpg", text: "Worth every penny" },
              { img: "/images/review8.jpg", text: "The real deal" },
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
              <h4 className="font-black uppercase text-lg mb-2">"I wasted years on the wrong tech."</h4>
              <p className="text-sm font-medium text-gray-600 mb-4">
                "I can't believe I spent a decade blaming myself when the problem was the technology the whole time. The LEM worked in under 3 minutes. I'm angry I didn't know about this sooner."
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
              <h4 className="font-black uppercase text-lg mb-2">"Once I understood the science, it was a no-brainer."</h4>
              <p className="text-sm font-medium text-gray-600 mb-4">
                "Reading about how vibration actually works versus air-pulse was eye-opening. The LEM was the logical choice. And it delivered exactly what the research promised. Incredible."
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
              <h4 className="font-black uppercase text-lg mb-2">"The myths kept me stuck for years."</h4>
              <p className="text-sm font-medium text-gray-600 mb-4">
                "I genuinely thought I was incapable. Turns out I just needed the right technology. The LEM is not a vibrator — it is something completely different. First time using it, I understood immediately."
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
      {/* PRICING — Now You Know. Now You Choose.       */}
      {/* ============================================ */}
      <section id="pricing" className="py-24 bg-black text-white border-b-4 border-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#333 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-destructive text-white px-4 py-1 font-bold uppercase text-sm border-2 border-white mb-6 animate-pulse">
              Limited Time Offer Ends Soon
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 text-[#FAFF00]">
              Now You Know. Now You Choose.
            </h2>
            <CountdownTimer className="mb-8" />
            <p className="text-xl font-medium text-gray-300">30-Day Risk-Free Guarantee. If it doesn't work for you, send it back. No questions.</p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-[#FAFF00] text-black border-4 border-white p-8 relative transform hover:scale-105 transition-transform duration-300 shadow-[0px_0px_40px_rgba(250,255,0,0.5)]">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-2 font-bold uppercase text-sm border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap">
                The Informed Choice
              </div>
              <h3 className="text-4xl font-black uppercase mb-2 text-center">Science-Backed Pleasure</h3>
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
                  Make the Informed Choice <Zap className="ml-2 h-6 w-6 fill-current" />
                </NeoButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FAQ — Common Myths vs Facts                   */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-black uppercase text-center mb-12">Common Myths vs Facts</h2>
          <NeoAccordion items={[
            { title: "\"Is air-pulse technology actually backed by research?\"", content: "Yes. Vacuum clitoral therapy has been studied in peer-reviewed journals including the Journal of Sexual Medicine. Research shows that air-pulse technology increases clitoral blood flow, enhances engorgement, and activates the full clitoral structure — including the 90% that sits below the surface. This is not marketing. It is published science." },
            { title: "\"How is this different from the vibrator I already own?\"", content: "Completely different category. Vibrators use motor-driven oscillation that creates surface friction. The LEM uses contactless air-pulse waves that create rhythmic pressure changes. Vibrators scatter energy on the skin. Air-pulse focuses energy deep into tissue. They are as different as a fan blowing air and a speaker creating sound waves." },
            { title: "\"Why haven't I heard about this before?\"", content: "The vibrator industry is a $30+ billion market with massive marketing budgets. Air-pulse technology is newer, and the companies behind it are smaller. The science has been published, but it competes against decades of established vibrator marketing. You are hearing about it now because the research is becoming impossible to ignore." },
            { title: "\"Is the LEM safe if I've been desensitized by vibrators?\"", content: "Not only safe — it is specifically beneficial. Because the LEM uses contactless stimulation, it does not add to desensitization. The gentle vacuum effect actually increases blood flow and helps restore sensitivity over time. Many women who have experienced vibrator-related numbness report that the LEM was the first thing that worked for them." },
            { title: "\"What if the myths were right and it doesn't work for me?\"", content: "We offer a 30-day satisfaction guarantee. Try it risk-free. If you do not experience the difference, send it back for a full refund. No questions, no judgment. But with 500,000+ women who made the switch, the evidence speaks for itself." }
          ]} />
        </div>
      </section>

      {/* ============================================ */}
      {/* FINAL PUSH — The truth demands action         */}
      {/* ============================================ */}
      <section className="py-16 bg-primary border-b-4 border-black">
        <div className="container max-w-3xl text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white leading-tight">
            The only thing worse than believing a lie... is knowing the truth and doing nothing about it.
          </h2>
          <p className="text-xl font-medium text-white/90">
            You have the facts. You understand the science. The myths have been exposed. What happens next is your choice.
          </p>
          <div
            onClick={() => trackConversionAndNavigate()}
            className="block w-full cursor-pointer"
            role="link"
          >
            <NeoButton size="lg" className="text-xl px-12 py-8 bg-black text-white hover:bg-black/90 border-white">
              Choose the Truth <Zap className="ml-2 h-6 w-6 fill-current" />
            </NeoButton>
          </div>
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

      <StickyCTA />
    </div>
  );
}