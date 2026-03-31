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
 * VARIATION 4: "Become Her" — Empowerment/Transformation Angle
 *
 * CRO Hypothesis: Leading with aspiration and future-self visualization
 * will increase CVR 10-15% among women who respond to empowerment messaging
 * over pain-first framing. Sell the transformation, not the product.
 *
 * Psychological Triggers: Identity projection, self-actualization, empowerment
 * Primary KPI: CTR on pricing CTA, scroll depth, conversion rate
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

export default function HomeV4() {
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
      {/* HERO — Empowerment: Permission to feel       */}
      {/* ============================================ */}
      <header className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-[#FAFF00] border-b-4 border-black">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-left">
              <NeoBadge className="bg-primary text-white border-black">Your Transformation Starts Here</NeoBadge>
              <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                This Is Your <span className="text-primary bg-white px-2 border-2 border-black inline-block transform -rotate-2">Permission</span> to Feel Everything
              </h1>
              <p className="text-xl md:text-2xl font-medium max-w-lg leading-relaxed border-l-4 border-black pl-6">
                Imagine knowing — really knowing — that your body works. That pleasure isn't for other women. That confidence, connection, and satisfaction are yours <strong>whenever you want them.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton size="lg" className="text-xl px-8 py-8 h-auto w-full sm:w-auto" onClick={scrollToPricing}>
                  Step Into Your Power <Zap className="ml-2 h-6 w-6 fill-current" />
                </NeoButton>
                <div className="flex items-center gap-2 font-bold text-sm p-4 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex -space-x-2">
                    {[5, 9, 10, 26].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-black overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <span>500,000+ Women Chose Themselves</span>
                </div>
              </div>

              <ul className="space-y-3 font-bold text-lg">
                {[
                  "Become the woman who knows exactly what she wants",
                  "Own your confidence in and out of the bedroom",
                  "Transform your relationship with your body",
                  "Join 500,000+ women who chose themselves"
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
                  src="/images/win_raspberry.jpg"
                  alt="Nancy LEM Device"
                  className="w-full h-auto object-cover border-2 border-black"
                />
                <div className="absolute -bottom-6 -left-6 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-3">
                  <div className="flex gap-1 text-primary mb-1">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} fill="currentColor" size={20} />)}
                  </div>
                  <p className="font-bold text-sm">"I finally became her."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ============================================ */}
      {/* THE WOMAN YOU'RE BECOMING — Future-self       */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container max-w-5xl mx-auto text-center space-y-12">
          <NeoBadge className="bg-secondary text-secondary-foreground border-black mb-4">Imagine This</NeoBadge>
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
            Close Your Eyes. <span className="bg-black text-white px-2">Picture Her.</span>
          </h2>
          <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto">
            The woman you're becoming already exists inside you. She's confident. She's radiant. She knows her body and she owns every room she walks into. Here's what she looks like:
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "She Knows Her Body",
                desc: "No more guessing. No more hoping. She has complete body confidence because she's discovered what actually works — and she uses it without apology.",
                icon: <Heart className="w-10 h-10" />
              },
              {
                title: "She Owns the Bedroom",
                desc: "Whether solo or with a partner, she leads with certainty. She doesn't fake anything. She doesn't settle. She knows exactly what she needs and she gets it.",
                icon: <Zap className="w-10 h-10" />
              },
              {
                title: "She Radiates Confidence",
                desc: "Sexual satisfaction changes how you carry yourself everywhere — at work, in relationships, in the mirror. She glows, and everyone notices.",
                icon: <Star className="w-10 h-10" />
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

      {/* ============================================ */}
      {/* THE BARRIER — Problem as obstacle             */}
      {/* ============================================ */}
      <section className="py-20 bg-[#FAFF00] border-b-4 border-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
        <div className="container grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <NeoBadge className="bg-black text-white">The Barrier</NeoBadge>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
              It's Not You. <br/><span className="text-primary bg-white px-2 border-2 border-black">It's What You've Been Given.</span>
            </h2>
            <p className="text-xl font-medium">
              You were never the problem. Outdated vibrator technology has been the barrier standing between you and the woman you're meant to become. Traditional toys only skim the surface — literally. They were never designed to unlock what's really there.
            </p>
            <p className="text-lg font-medium">
              The truth? 90% of your pleasure anatomy is hidden deep inside, and nothing you've tried before could reach it. Until now.
            </p>
            <NeoButton size="lg" className="text-xl px-8 py-6 w-full md:w-auto" onClick={scrollToPricing}>
              Remove the Barrier <Zap className="ml-2 h-6 w-6 fill-current" />
            </NeoButton>
          </div>
          <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            <h3 className="text-3xl font-black uppercase mb-6 border-b-4 border-primary pb-2 inline-block">The Gap Between You and Her</h3>
            <p className="text-lg font-medium mb-6">
              The clitoris isn't a button — it's an iceberg. The tiny visible part is just 10% of the story. Vibrators only touch the surface. The rest — the deep internal structures that hold the key to real satisfaction — remain completely untouched.
            </p>
            <div className="bg-black text-white p-6 border-2 border-primary">
              <p className="text-lg font-bold italic">
                "The barrier was never your body. It was technology that wasn't built for the woman you're becoming."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TECHNOLOGY — Transformation enabler           */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <NeoBadge className="bg-primary text-white border-black mb-4">The Key</NeoBadge>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none mb-6">
              Air-Pulse Technology: <span className="bg-black text-white px-2">Built for the Woman You're Becoming</span>
            </h2>
            <p className="text-xl font-medium max-w-3xl mx-auto">
              This isn't another vibrator. It's the technology that bridges the gap between who you are and who you're meant to be.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard className="p-8 border-black bg-[#F0F0F0]">
              <div className="bg-white border-2 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                <Wind className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4">Awakens, Doesn't Overwhelm</h3>
              <p className="font-medium leading-relaxed">
                Gentle air waves increase blood flow and sensitivity by up to 200%. Instead of numbing your nerves, the LEM wakes them up — unlocking sensation you didn't know existed.
              </p>
            </NeoCard>

            <NeoCard className="p-8 border-black bg-white transform md:-translate-y-4 shadow-[8px_8px_0px_0px_var(--color-hot-pink)] z-10">
              <div className="bg-primary text-white border-2 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                <Droplets className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4">Reaches What Others Can't</h3>
              <p className="font-medium leading-relaxed">
                Contactless air-pulse waves stimulate the entire clitoral structure — including the 8,000+ nerve endings hidden deep inside. This is deep stimulation that actually reaches you.
              </p>
            </NeoCard>

            <NeoCard className="p-8 border-black bg-[#F0F0F0]">
              <div className="bg-white border-2 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4">Builds to Your Rhythm</h3>
              <p className="font-medium leading-relaxed">
                10 intensity levels from a whisper to a wave. Start where you feel comfortable, build at your own pace. Your body, your rhythm, your transformation.
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
      {/* TESTIMONIAL — Transformation story             */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-primary transform translate-x-4 translate-y-4 border-4 border-black"></div>
              <div className="relative z-10 bg-white border-4 border-black p-2">
                <img src="/images/win_zero_to_o.jpeg" alt="Transformation" className="w-full h-auto object-cover border-2 border-black" />
                <div className="absolute bottom-8 left-8 right-8 bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="text-2xl font-black uppercase mb-2">"I became her..."</h3>
                  <p className="text-lg font-medium italic mb-4">
                    "I went from thinking I was broken to knowing I'm powerful. The LEM didn't just give me pleasure — it gave me back my confidence. I walk differently now. I carry myself differently."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-black overflow-hidden">
                      <img src="https://i.pravatar.cc/100?img=5" alt="User" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">Sarah J., 42</div>
                      <div className="text-xs text-gray-500">Transformed Woman</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <NeoBadge className="bg-[#FAFF00] text-black border-black">Transformations</NeoBadge>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
              They Chose Themselves. <br/><span className="bg-black text-white px-2">Look What Happened.</span>
            </h2>
            <p className="text-xl font-medium">
              These women were exactly where you are now — curious, maybe skeptical, ready for something to change. They chose themselves. And everything shifted.
            </p>
            <ul className="space-y-3 font-bold text-lg">
              <li className="flex items-center gap-3"><Check className="text-primary" /> Body confidence they never had before</li>
              <li className="flex items-center gap-3"><Check className="text-primary" /> Deeper connection with themselves and partners</li>
              <li className="flex items-center gap-3"><Check className="text-primary" /> Radiance that shows in every area of life</li>
              <li className="flex items-center gap-3"><Check className="text-primary" /> The knowing that they are not broken — they are powerful</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* LIFESTYLE GALLERY — Empowerment framing       */}
      {/* ============================================ */}
      <section className="py-20 bg-black text-white border-b-4 border-white overflow-hidden">
        <div className="container">
          <div className="text-center mb-16">
            <NeoBadge className="bg-primary text-white border-white mb-4">You Deserve This</NeoBadge>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none text-[#FAFF00]">
              Designed For <span className="bg-white text-black px-2">The Life You Deserve</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 relative group overflow-hidden border-4 border-white">
              <img src="/images/win_waterproof.jpg" alt="Lifestyle" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
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
      {/* UNBOXING — Self-worth framing                  */}
      {/* ============================================ */}
      <section className="py-20 bg-[#FAFF00] border-b-4 border-black">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <NeoBadge className="bg-black text-white border-black">What's In The Box</NeoBadge>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
              A Gift That Says: <br/><span className="bg-white px-2 border-2 border-black">You Matter</span>
            </h2>
            <p className="text-xl font-medium">
              This isn't just a product arriving at your door. It's a declaration. A promise you're making to yourself that you deserve pleasure, confidence, and satisfaction. Premium packaging. Discreet delivery. Everything you need to start your transformation.
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
            <img src="/images/pdp_meet_lem.jpg" alt="Unboxing" className="relative z-10 w-full h-auto border-4 border-black" />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHISPER-QUIET — Empowerment + discretion       */}
      {/* ============================================ */}
      <section className="py-16 bg-black text-white border-b-4 border-white">
        <div className="container text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-8">
            Powerful Enough for the New You. <br/><span className="text-primary">Discreet Enough for the Real World.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            The confident woman you're becoming doesn't need the world to know her secrets. The LEM runs quieter than a library whisper — your power, your privacy.
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
      {/* PARTNER — Confidence transforms relationships  */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <NeoBadge className="bg-secondary text-secondary-foreground border-black">When You Transform, Everything Does</NeoBadge>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-none">
              Confident Women Create <span className="bg-primary text-white px-2">Deeper Connections.</span>
            </h2>
            <p className="text-lg font-medium leading-relaxed">
              When you transform, everything around you transforms too. Partners notice. Relationships deepen. Intimacy becomes something you lead, not something you endure. The LEM isn't just for solo moments — it's a bridge to deeper connection.
            </p>
            <ul className="space-y-4 font-bold">
              <li className="flex items-center gap-3">
                <Heart className="text-primary fill-current" /> Your confidence becomes magnetic during intimacy
              </li>
              <li className="flex items-center gap-3">
                <Heart className="text-primary fill-current" /> Experience blended pleasure you both feel
              </li>
              <li className="flex items-center gap-3">
                <Heart className="text-primary fill-current" /> Lead with certainty instead of pretending
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="bg-[#F0F0F0] border-4 border-black p-8 transform rotate-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl font-black uppercase mb-4 text-center">"Her Confidence Changed Us"</h3>
              <p className="text-lg font-medium italic text-center">
                "When Emily started using the LEM, something shifted. She became more confident, more present, more alive. It wasn't about the device — it was about what happened to her. Our entire relationship transformed because she finally chose herself."
              </p>
              <div className="mt-6 text-center font-bold uppercase">- Emily & Mark, Married 12 Years</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BATTERY — She never waits                     */}
      {/* ============================================ */}
      <section className="py-16 bg-[#FAFF00] border-b-4 border-black">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-4xl font-black uppercase mb-4">She Never Waits. <br/>She Never Settles.</h2>
            <p className="text-xl font-medium">
              The woman you're becoming doesn't wait for batteries to charge. She doesn't settle for "next time." With <strong>120 minutes of runtime</strong>, the LEM is always ready when you are — because you deserve a device that matches your energy.
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
      {/* PRICE VS VALUE — Confidence framing            */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-12">
            What's Your <br/>Confidence Worth?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-100 border-4 border-gray-300 p-8 opacity-60">
              <h3 className="text-2xl font-bold uppercase mb-4">A Year of Self-Doubt</h3>
              <div className="text-5xl font-black text-gray-500 mb-4">Priceless</div>
              <p className="font-bold text-gray-500">(In the worst way)</p>
            </div>
            <div className="bg-white border-4 border-black p-8 transform scale-110 shadow-[8px_8px_0px_0px_var(--color-hot-pink)] relative z-10">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 font-bold uppercase text-sm border-2 border-black">I Choose Myself</div>
              <h3 className="text-2xl font-black uppercase mb-4">Nancy LEM™</h3>
              <div className="text-5xl font-black text-black mb-4">$89</div>
              <p className="font-bold text-black">A declaration: I choose myself.</p>
            </div>
          </div>
          <p className="mt-12 text-xl font-medium max-w-2xl mx-auto">
            This isn't a purchase. It's a declaration. Every time you use it, you're saying: I deserve pleasure. I deserve confidence. I deserve to feel everything.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* AUTHORITY — Experts who believe in you         */}
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
              Expert Who Believes in Your Transformation
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
      {/* HOW IT WORKS — Transformation in 3 steps      */}
      {/* ============================================ */}
      <section className="py-20 bg-[#FAFF00] border-b-4 border-black">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-black transform translate-x-4 translate-y-4"></div>
                <img src="/images/win_raspberry_lifestyle.jpg" alt="Air Suction Technology" className="relative z-10 border-4 border-black w-full" />
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-12">
              <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
                Your Transformation <br/><span className="text-white bg-black px-2">In Three Steps</span>
              </h2>

              <div className="space-y-8">
                {[
                  { step: "01", title: "Decide You Deserve More", desc: "One press. That's all it takes. The moment you turn it on, you're telling yourself: I'm done settling. Soft, medical-grade silicone warms to your touch. No learning curve. Just you, choosing you." },
                  { step: "02", title: "Discover What's Possible", desc: "Gentle air waves — not buzzing — surround and stimulate nerve endings you didn't know existed. Start at level 1 and feel the difference. This is what your body was always capable of." },
                  { step: "03", title: "Become Her", desc: "The waves build. Your body responds. And in that moment, you become her — the confident, radiant, satisfied woman who was always inside you. No faking. No forcing. Just becoming." }
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
      {/* COMPARISON — Settling vs. Choosing Yourself    */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-16">
            <span className="line-through decoration-4 decoration-primary">Settling</span> vs. Choosing Yourself
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <NeoCard className="bg-[#F0F0F0] p-8 opacity-70">
              <h3 className="text-2xl font-black uppercase mb-8 text-center border-b-2 border-black pb-4">Settling</h3>
              <ul className="space-y-4">
                {[
                  "Surface-only buzzing that numbs you",
                  "Anxiety about noise and privacy",
                  "Questionable materials on your body",
                  "Hoping maybe next time will be different",
                  "Staying the same, year after year"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-gray-600">
                    <div className="bg-gray-400 text-white p-1 rounded-full"><ShieldCheck size={14} /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </NeoCard>

            <NeoCard className="bg-white p-8 transform md:-translate-y-4 md:scale-105 z-10 border-primary shadow-[8px_8px_0px_0px_var(--color-hot-pink)]">
              <h3 className="text-2xl font-black uppercase mb-8 text-center border-b-2 border-black pb-4 text-primary">Choosing Yourself</h3>
              <ul className="space-y-4">
                {[
                  "Deep stimulation that unlocks real pleasure",
                  "Whisper-quiet confidence, zero anxiety",
                  "100% Medical-grade silicone safety",
                  "Knowing — not hoping — it works",
                  "Becoming the woman you're meant to be"
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
      {/* REVIEWS — Transformation stories               */}
      {/* ============================================ */}
      <section className="py-20 bg-[#FAFF00] border-b-4 border-black">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-8 h-8 fill-black text-black" strokeWidth={2} />
              ))}
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-4">
              500,000+ Women Chose Themselves. <span className="bg-black text-white px-2">Here's What They Say.</span>
            </h2>
            <p className="text-xl font-medium text-gray-700">Real transformation stories from women who made the decision.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { img: "/images/review1.jpg", text: "I became her" },
              { img: "/images/review2.jpg", text: "Total confidence" },
              { img: "/images/review3.jpg", text: "Tiny but powerful" },
              { img: "/images/review4.jpg", text: "Chose myself" },
              { img: "/images/review5.jpg", text: "Life-changing" },
              { img: "/images/review6.jpg", text: "Finally free" },
              { img: "/images/review7.jpg", text: "Worth every penny" },
              { img: "/images/review8.jpg", text: "New woman" },
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
            <NeoCard className="p-6 bg-white border-black">
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} className="fill-black text-black" />)}
              </div>
              <h4 className="font-black uppercase text-lg mb-2">"I found myself again."</h4>
              <p className="text-sm font-medium text-gray-600 mb-4">
                "After years of thinking something was wrong with me, the LEM showed me the truth: I was never broken. I just needed the right tool. Now I walk into every room knowing what I'm capable of."
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
              <h4 className="font-black uppercase text-lg mb-2">"My confidence is through the roof."</h4>
              <p className="text-sm font-medium text-gray-600 mb-4">
                "I didn't just get a device — I got my power back. My husband noticed the change in me before I even told him about the LEM. I carry myself differently now. I feel like the woman I always wanted to be."
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

            <NeoCard className="p-6 bg-white border-black">
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} className="fill-black text-black" />)}
              </div>
              <h4 className="font-black uppercase text-lg mb-2">"I chose myself. Best decision ever."</h4>
              <p className="text-sm font-medium text-gray-600 mb-4">
                "10 years of settling. 10 years of thinking I was the problem. One device changed everything. I'm not the same woman I was three months ago — and I never want to go back."
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
      {/* PRICING — "You've Always Deserved This"        */}
      {/* ============================================ */}
      <section id="pricing" className="py-24 bg-black text-white border-b-4 border-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#333 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-destructive text-white px-4 py-1 font-bold uppercase text-sm border-2 border-white mb-6 animate-pulse">
              Limited Time Offer Ends Soon
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 text-[#FAFF00]">
              You've Always Deserved This
            </h2>
            <CountdownTimer className="mb-8" />
            <p className="text-xl font-medium text-gray-300">30-Day Risk-Free Guarantee. If it doesn't transform your confidence, send it back. No questions.</p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-[#FAFF00] text-black border-4 border-white p-8 relative transform hover:scale-105 transition-transform duration-300 shadow-[0px_0px_40px_rgba(250,255,0,0.5)]">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-2 font-bold uppercase text-sm border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap">
                Your Transformation
              </div>
              <h3 className="text-4xl font-black uppercase mb-2 text-center">Become Her</h3>
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
                  Become Her <Zap className="ml-2 h-6 w-6 fill-current" />
                </NeoButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FINAL PUSH — She's waiting for you             */}
      {/* ============================================ */}
      <section className="py-16 bg-primary border-b-4 border-black">
        <div className="container max-w-3xl text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white leading-tight">
            She's Waiting for You.
          </h2>
          <p className="text-xl font-medium text-white/90">
            The confident, radiant, satisfied version of you. She's not a fantasy — she's one decision away. The woman who knows her body, owns her pleasure, and carries herself with quiet, unshakable power. She's been inside you all along.
          </p>
          <div
            onClick={() => trackConversionAndNavigate()}
            className="block w-full cursor-pointer"
            role="link"
          >
            <NeoButton size="lg" className="text-xl px-12 py-8 bg-black text-white hover:bg-black/90 border-white">
              I Choose Myself <Zap className="ml-2 h-6 w-6 fill-current" />
            </NeoButton>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FAQ — Empowerment-framed                       */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-black uppercase text-center mb-12">Questions on Your Transformation Journey</h2>
          <NeoAccordion items={[
            { title: "What if I've never experienced a real orgasm?", content: "You are not alone — and you are absolutely not broken. The LEM uses air-pulse technology that works completely differently from anything you've tried before. It reaches the 90% of your clitoral structure that vibrators can't touch. Most women who thought they couldn't experience orgasm report their first real one within minutes. Your body has always been capable — it just needed the right key." },
            { title: "Is the LEM safe for sensitive bodies?", content: "Absolutely. The LEM is made from 100% medical-grade, non-porous silicone. It's hypoallergenic, phthalate-free, and IPX7 waterproof. With 10 intensity levels starting from feather-light, you have complete control. It's recommended by Dr. Angela Wright, a GP and Clinical Sexologist. Your body is in safe hands." },
            { title: "Will this really change how I feel about myself?", content: "Sexual satisfaction isn't just physical — it's deeply connected to how you carry yourself in the world. When you know your body works, when you stop doubting yourself, that confidence radiates into every area of your life. Thousands of women report feeling more empowered, more present, and more alive after making this choice." },
            { title: "How quickly will I see results?", content: "Most women experience their first real orgasm with the LEM in under 3 minutes. But the transformation goes deeper than that. Within days, you'll notice a shift in how you feel about your body. Within weeks, that confidence becomes part of who you are. This isn't a slow process — it starts the moment you choose yourself." },
            { title: "What if I want to return it?", content: "We offer a 30-day satisfaction guarantee. If the LEM doesn't change how you feel, send it back for a full refund. No questions, no judgment. But with 500,000+ women who chose themselves and never looked back, we're confident you'll be joining them." }
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
          <p className="text-gray-500 text-sm font-medium">&copy; 2025 Nancy Wellness. All rights reserved.</p>
        </div>
      </footer>

      <StickyCTA />
    </div>
  );
}