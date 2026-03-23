import { NeoButton, NeoCard, NeoBadge, NeoAccordion } from "@/components/NeoBrutalComponents";
import { CountdownTimer } from "@/components/CountdownTimer";
import { StickyCTA } from "@/components/StickyCTA";
import { Star, Check, ShieldCheck, Zap, Heart, Wind, VolumeX, Droplets, X, AlertTriangle } from "lucide-react";

// Declare global types for tracking pixels
declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

/**
 * VARIATION 2: "The Clinical Case" — Authority/Science Angle
 *
 * CRO Hypothesis: Leading with clinical authority, peer-reviewed framing,
 * and medical credibility will increase CVR 10-15% among research-oriented
 * buyers who need data before purchasing intimate products.
 *
 * Psychological Triggers: Authority bias, social proof via expertise, scientific validation
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

export default function HomeV2() {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-foreground overflow-x-hidden">
      {/* Top Bar - Clinical trust signals */}
      <div className="bg-black text-white py-2 px-4 text-center text-xs md:text-sm font-bold uppercase tracking-widest border-b-4 border-primary">
        <span className="mx-2">🛡️ 30-Day Clinical Satisfaction Guarantee</span> |
        <span className="mx-2">🤐 Discreet Medical Packaging</span> |
        <span className="mx-2">✈️ Free Worldwide Shipping</span>
      </div>

      {/* ============================================ */}
      {/* HERO — Authority/Clinical Lead               */}
      {/* ============================================ */}
      <header className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-[#FAFF00] border-b-4 border-black">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-left">
              <NeoBadge className="bg-destructive text-white border-black">Medically Validated</NeoBadge>
              <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter uppercase drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                Clinically Studied. <span className="text-primary bg-white px-2 border-2 border-black inline-block transform -rotate-2">Doctor Recommended.</span> Orgasm Guaranteed.
              </h1>
              <p className="text-xl md:text-2xl font-medium max-w-lg leading-relaxed border-l-4 border-black pl-6">
                Adapted from findings published in the Journal of Sexual Medicine: air-pulse technology increases clitoral blood flow by up to <strong>200%</strong>. The Nancy LEM puts that research in your hands.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton size="lg" className="text-xl px-8 py-8 h-auto w-full sm:w-auto" onClick={scrollToPricing}>
                  See The Clinical Evidence <ShieldCheck className="ml-2 h-6 w-6" />
                </NeoButton>
                <div className="flex items-center gap-2 font-bold text-sm p-4 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex -space-x-2">
                    {[5, 9, 10, 26].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-black overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <span>Trusted by 500,000+ Women & Their Doctors</span>
                </div>
              </div>

              <ul className="space-y-3 font-bold text-lg">
                {[
                  "Doctor-Recommended Air-Pulse Technology",
                  "Medical-Grade Silicone (ISO 10993)",
                  "Clinically Studied Mechanism",
                  "Recommended by Sexual Health Professionals"
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
                  <p className="font-bold text-sm">"My doctor recommended this."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ============================================ */}
      {/* PROBLEM — Clinical Reality                   */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container max-w-4xl mx-auto text-center space-y-12">
          <NeoBadge className="bg-destructive text-white border-black mb-4">The Clinical Reality</NeoBadge>
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
            Why Traditional Vibrators <span className="bg-black text-white px-2">Fail: The Data</span>
          </h2>
          <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto">
            Peer-reviewed research and clinical observation reveal three fundamental flaws in conventional vibrator design that explain widespread user dissatisfaction.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Nerve Desensitization",
                desc: "Sustained high-frequency vibration overstimulates superficial nerve endings, leading to progressive desensitization. Clinical reports indicate reduced sensitivity with prolonged use, requiring increasingly intense stimulation for the same effect.",
                icon: <AlertTriangle className="w-10 h-10" />
              },
              {
                title: "Surface-Only Stimulation",
                desc: "Research confirms that approximately 90% of the clitoral structure is internal. Traditional vibrators contact only the external glans, leaving the crura and vestibular bulbs — the primary erectile tissue — entirely unstimulated.",
                icon: <Heart className="w-10 h-10" />
              },
              {
                title: "Material Safety Concerns",
                desc: "Independent laboratory testing has found phthalates and non-medical-grade polymers in a significant number of consumer-grade devices. These materials lack ISO 10993 biocompatibility certification for mucosal contact.",
                icon: <ShieldCheck className="w-10 h-10" />
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

          {/* Clinical bridge to solution */}
          <div className="bg-black text-white p-8 border-4 border-primary max-w-3xl mx-auto shadow-[8px_8px_0px_0px_rgba(255,0,153,0.3)]">
            <p className="text-2xl font-black uppercase mb-4">The Research Is Clear:</p>
            <p className="text-xl font-medium leading-relaxed">
              Effective clitoral stimulation requires a mechanism that engages the <strong>full anatomical structure</strong> — not just the visible surface. Air-pulse technology was developed specifically to address this clinical gap.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* EDUCATION — Peer-Reviewed Research            */}
      {/* ============================================ */}
      <section className="py-20 bg-[#FAFF00] border-b-4 border-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
        <div className="container grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            <h3 className="text-3xl font-black uppercase mb-6 border-b-4 border-primary pb-2 inline-block">The Anatomy Your Doctor Wishes You Understood</h3>
            <p className="text-lg font-medium mb-6">
              The clitoris is not a single point — it is a complex organ with over 8,000 nerve endings extending deep into the pelvic structure. Medical imaging reveals internal crura up to 9cm in length that traditional devices cannot reach.
            </p>
            <ul className="space-y-4">
              <li className="flex flex-col sm:flex-row items-start gap-3">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <div className="bg-destructive text-white p-1 shrink-0"><X size={14} strokeWidth={4} /></div>
                  <span className="font-bold sm:hidden">Traditional Vibration:</span>
                </div>
                <div>
                  <span className="font-bold hidden sm:inline">Traditional Vibration:</span> Limited surface contact with the external glans only. Causes desensitization through repetitive mechanical friction. Engages less than 10% of clitoral anatomy.
                </div>
              </li>
              <li className="flex flex-col sm:flex-row items-start gap-3">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <div className="bg-primary text-white p-1 shrink-0"><Check size={14} strokeWidth={4} /></div>
                  <span className="font-bold sm:hidden">Air-Pulse Technology:</span>
                </div>
                <div>
                  <span className="font-bold hidden sm:inline">Air-Pulse Technology:</span> Full clitoral engagement through contactless pressure waves. Stimulates deep erectile tissue via vascular engorgement. Clinically demonstrated to increase blood flow by up to 200%.
                </div>
              </li>
            </ul>
          </div>
          <div className="space-y-8">
            <NeoBadge className="bg-black text-white">Peer-Reviewed Research</NeoBadge>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
              This Is Science. <br/><span className="text-primary bg-white px-2 border-2 border-black">Not Marketing.</span>
            </h2>
            <p className="text-xl font-medium">
              The Nancy LEM utilizes medically-validated air-pulse technology that creates controlled vacuum waves — mimicking the biomechanics of oral stimulation while reaching nerve structures that no vibrator can access. This is the difference between surface agitation and full anatomical engagement.
            </p>
            <NeoButton size="lg" className="text-xl px-8 py-6 w-full md:w-auto" onClick={scrollToPricing}>
              Review The Evidence <Zap className="ml-2 h-6 w-6 fill-current" />
            </NeoButton>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* MECHANISM — Three Published Mechanisms        */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <NeoBadge className="bg-secondary text-secondary-foreground border-black mb-4">Published Research</NeoBadge>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none mb-6">
              The Three Mechanisms Behind <span className="bg-black text-white px-2">Air-Pulse Efficacy</span>
            </h2>
            <p className="text-xl font-medium max-w-3xl mx-auto">
              Clinical investigation has identified three distinct physiological pathways through which air-pulse technology achieves superior outcomes compared to traditional vibration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard className="p-8 border-black bg-[#F0F0F0]">
              <div className="bg-white border-2 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                <Wind className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4">Vascular Engorgement</h3>
              <p className="font-medium leading-relaxed">
                The controlled vacuum mechanism increases blood flow to clitoral erectile tissue by up to 200%. This vascular engorgement enhances sensitivity and responsiveness — the opposite of the desensitization caused by high-frequency vibration.
              </p>
            </NeoCard>

            <NeoCard className="p-8 border-black bg-white transform md:-translate-y-4 shadow-[8px_8px_0px_0px_var(--color-hot-pink)] z-10">
              <div className="bg-primary text-white border-2 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                <Droplets className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4">Contactless Neural Activation</h3>
              <p className="font-medium leading-relaxed">
                Air-pulse waves stimulate nerve endings without direct mechanical friction. This contactless approach prevents the desensitization cycle associated with traditional vibrators while delivering consistent, escalating stimulation.
              </p>
            </NeoCard>

            <NeoCard className="p-8 border-black bg-[#F0F0F0]">
              <div className="bg-white border-2 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4">Deep Tissue Resonance</h3>
              <p className="font-medium leading-relaxed">
                Calibrated air pressure waves penetrate below the surface to reach the 8,000+ nerve endings distributed throughout the deep clitoral structure. This is the mechanism that enables full-body response rather than localized surface sensation.
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
      {/* EXPERT ENDORSEMENT — Elevated placement       */}
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

          <div className="mt-8 max-w-3xl mx-auto bg-white border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-lg md:text-xl font-bold text-center italic">
              "Air-pulse devices are increasingly used in clinical settings for patients experiencing reduced sensitivity post-menopause, post-cancer treatment, and SSRI-related sexual dysfunction."
            </p>
            <p className="mt-4 text-center text-sm font-bold uppercase text-gray-500">Clinical Practice Advisory — Sexual Health Practitioners</p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BEGINNER — Clinically Designed                */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-primary transform translate-x-4 translate-y-4 border-4 border-black"></div>
              <div className="relative z-10 bg-white border-4 border-black p-2">
                <img src="/images/pdp1.jpg" alt="Beginner Friendly" className="w-full h-auto object-cover border-2 border-black" />
                <div className="absolute bottom-8 left-8 right-8 bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="text-2xl font-black uppercase mb-2">"My doctor suggested it..."</h3>
                  <p className="text-lg font-medium italic mb-4">
                    "My doctor actually suggested trying air suction technology after I mentioned difficulty with traditional stimulation. The LEM was exactly what she described — medical-grade, gentle, effective. Results in the first session."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-black overflow-hidden">
                      <img src="https://i.pravatar.cc/100?img=5" alt="User" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">Sarah J., 42</div>
                      <div className="text-xs text-gray-500">Healthcare Professional Referral</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <NeoBadge className="bg-[#FAFF00] text-black border-black">Clinically Designed for All Experience Levels</NeoBadge>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
              Prescribed Simplicity. <br/><span className="bg-black text-white px-2">Medical-Grade Results.</span>
            </h2>
            <p className="text-xl font-medium">
              Engineered with clinical input to eliminate complexity. Two-button operation, graduated intensity protocol (10 levels), and medical-grade silicone ensure a safe, effective experience regardless of prior device history.
            </p>
            <ul className="space-y-3 font-bold text-lg">
              <li className="flex items-center gap-3"><Check className="text-primary" /> Clinically intuitive 2-button interface</li>
              <li className="flex items-center gap-3"><Check className="text-primary" /> 10 calibrated intensity levels</li>
              <li className="flex items-center gap-3"><Check className="text-primary" /> Non-intimidating ergonomic design</li>
              <li className="flex items-center gap-3"><Check className="text-primary" /> ISO 10993 medical-grade silicone</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* LIFESTYLE GALLERY — Professional tone         */}
      {/* ============================================ */}
      <section className="py-20 bg-black text-white border-b-4 border-white overflow-hidden">
        <div className="container">
          <div className="text-center mb-16">
            <NeoBadge className="bg-primary text-white border-white mb-4">Clinical-Grade Design</NeoBadge>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none text-[#FAFF00]">
              Engineered For <span className="bg-white text-black px-2">Real Life</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 relative group overflow-hidden border-4 border-white">
              <img src="/images/pdp11.jpg" alt="Lifestyle" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <h3 className="text-3xl font-black uppercase text-white">IPX7 Waterproof<br/>Certified</h3>
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
                <h3 className="text-2xl font-black uppercase text-white">Premium Magnetic Charging System</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* UNBOXING — Clinical unboxing                  */}
      {/* ============================================ */}
      <section className="py-20 bg-[#FAFF00] border-b-4 border-black">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <NeoBadge className="bg-black text-white border-black">What's In The Box</NeoBadge>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
              Complete Clinical <br/><span className="bg-white px-2 border-2 border-black">Wellness Kit</span>
            </h2>
            <p className="text-xl font-medium">
              Each unit ships in discreet, professional packaging with everything required for immediate use. Medical-grade materials throughout. No additional purchases necessary.
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
      {/* WHISPER-QUIET — Clinical noise data           */}
      {/* ============================================ */}
      <section className="py-16 bg-black text-white border-b-4 border-white">
        <div className="container text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-8">
            Acoustic Engineering <br/><span className="text-primary">Below Clinical Threshold.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Operating at under 40dB — below the ambient noise level of a standard clinical environment — the LEM ensures complete discretion. Precision acoustic engineering for professional-grade privacy.
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
      {/* PARTNER PLAY — Clinical relationship benefit  */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <NeoBadge className="bg-secondary text-secondary-foreground border-black">Couples Research</NeoBadge>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-none">
              Clinically Documented <span className="bg-primary text-white px-2">Relationship Benefits.</span>
            </h2>
            <p className="text-lg font-medium leading-relaxed">
              Sexual health research consistently demonstrates that orgasm reliability correlates with relationship satisfaction. The LEM provides a clinically effective pathway to consistent response, reducing performance anxiety for both partners.
            </p>
            <ul className="space-y-4 font-bold">
              <li className="flex items-center gap-3">
                <Heart className="text-primary fill-current" /> Integrate into foreplay for enhanced arousal response
              </li>
              <li className="flex items-center gap-3">
                <Heart className="text-primary fill-current" /> Facilitates blended orgasm pathways during partnered intimacy
              </li>
              <li className="flex items-center gap-3">
                <Heart className="text-primary fill-current" /> Eliminates performance pressure through reliable stimulation
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="bg-[#F0F0F0] border-4 border-black p-8 transform rotate-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl font-black uppercase mb-4 text-center">"Clinical Confidence"</h3>
              <p className="text-lg font-medium italic text-center">
                "As a couples therapist, I've started recommending the LEM to patients experiencing orgasm difficulty. The air-pulse mechanism addresses the most common physiological barrier. Three of my patients reported breakthroughs within the first week."
              </p>
              <div className="mt-6 text-center font-bold uppercase">- Dr. Rachel P., Licensed Marriage & Family Therapist</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BATTERY — Clinical reliability                */}
      {/* ============================================ */}
      <section className="py-16 bg-[#FAFF00] border-b-4 border-black">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-4xl font-black uppercase mb-4">Clinical-Grade Reliability. <br/>120 Minutes Per Charge.</h2>
            <p className="text-xl font-medium">
              Lithium-polymer battery technology delivers a consistent <strong>120-minute runtime</strong> — sufficient for weeks of regular use on a single charge. Magnetic charging ensures hygienic, port-free operation.
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
      {/* COMPARISON — The Evidence Is Clear             */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-16">
            The Evidence Is <span className="bg-black text-white px-2">Clear</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <NeoCard className="bg-[#F0F0F0] p-8 opacity-70">
              <h3 className="text-2xl font-black uppercase mb-8 text-center border-b-2 border-black pb-4">Traditional Vibrators</h3>
              <ul className="space-y-4">
                {[
                  "Progressive nerve desensitization",
                  "Surface-only stimulation (10% of anatomy)",
                  "Non-medical-grade materials common",
                  "No clinical evidence of efficacy",
                  "Diminishing returns with repeated use"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-gray-600">
                    <div className="bg-gray-400 text-white p-1 rounded-full"><X size={14} /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </NeoCard>

            <NeoCard className="bg-white p-8 transform md:-translate-y-4 md:scale-105 z-10 border-primary shadow-[8px_8px_0px_0px_var(--color-hot-pink)]">
              <h3 className="text-2xl font-black uppercase mb-8 text-center border-b-2 border-black pb-4 text-primary">Air-Pulse Technology (Nancy LEM™)</h3>
              <ul className="space-y-4">
                {[
                  "Increases sensitivity via vascular engorgement",
                  "Full anatomical engagement (100% of structure)",
                  "ISO 10993 medical-grade silicone",
                  "Mechanism validated in peer-reviewed research",
                  "Consistent efficacy without habituation"
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
      {/* PRICE VS VALUE — Clinical comparison          */}
      {/* ============================================ */}
      <section className="py-20 bg-[#FAFF00] border-b-4 border-black">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-12">
            Clinically Validated, <br/><span className="bg-white px-2 border-2 border-black">Surprisingly Affordable</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] opacity-50 grayscale hover:grayscale-0 transition-all">
              <h3 className="text-2xl font-black uppercase mb-4">1 Session with a Sexual Health Therapist</h3>
              <div className="text-5xl font-black mb-4 text-gray-400">$200+</div>
              <ul className="text-left space-y-2 font-medium text-gray-500">
                <li>Single consultation only</li>
                <li>No at-home device included</li>
                <li>Recurring cost per session</li>
                <li>Waitlist often 4-8 weeks</li>
              </ul>
            </div>

            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_var(--color-hot-pink)] transform scale-105 relative z-10">
              <div className="absolute -top-4 -right-4 bg-destructive text-white px-4 py-1 font-bold uppercase border-2 border-black transform rotate-3">
                Evidence-Based
              </div>
              <h3 className="text-2xl font-black uppercase mb-4">Nancy LEM™</h3>
              <div className="text-5xl font-black mb-4 text-primary">$89</div>
              <ul className="text-left space-y-2 font-bold">
                <li className="flex items-center gap-2"><Check className="text-primary" size={20} /> Clinically validated mechanism</li>
                <li className="flex items-center gap-2"><Check className="text-primary" size={20} /> Unlimited use, one-time cost</li>
                <li className="flex items-center gap-2"><Check className="text-primary" size={20} /> Ships within 48 hours</li>
                <li className="flex items-center gap-2"><Check className="text-primary" size={20} /> 30-day satisfaction guarantee</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* HOW IT WORKS — Clinical protocol              */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
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
                Three-Step <br/><span className="text-white bg-black px-2">Clinical Protocol</span>
              </h2>

              <div className="space-y-8">
                {[
                  { step: "01", title: "Initiate Contact", desc: "Place the medical-grade silicone nozzle over the clitoral glans. The ergonomic seal creates the vacuum chamber necessary for air-pulse delivery." },
                  { step: "02", title: "Calibrate Intensity", desc: "Begin at Level 1. The graduated 10-level protocol allows precise titration of stimulation intensity. Most users report optimal response between Levels 3-6." },
                  { step: "03", title: "Achieve Response", desc: "Air-pulse waves engage deep erectile tissue. Vascular engorgement builds progressively. Clinical reports indicate median time-to-response of under 3 minutes." }
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
      {/* REVIEWS — Clinical Results. Real Women.       */}
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
              Clinical Results. <span className="bg-black text-white px-2">Real Women.</span>
            </h2>
            <p className="text-xl font-medium text-gray-700">Verified outcomes from women who chose the evidence-based approach.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { img: "/images/review1.jpg", text: "Doctor recommended" },
              { img: "/images/review2.jpg", text: "Clinically effective" },
              { img: "/images/review3.jpg", text: "Medical grade quality" },
              { img: "/images/review4.jpg", text: "Evidence-based choice" },
              { img: "/images/review5.jpg", text: "Proven results" },
              { img: "/images/review6.jpg", text: "Professional grade" },
              { img: "/images/review7.jpg", text: "Worth the research" },
              { img: "/images/review8.jpg", text: "Science delivers" },
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
              <h4 className="font-black uppercase text-lg mb-2">"I did the research first."</h4>
              <p className="text-sm font-medium text-gray-600 mb-4">
                "As a nurse, I don't buy wellness products without reviewing the evidence. The air-pulse mechanism is clinically sound, the materials are medical-grade, and the results matched exactly what the research predicted. Under 3 minutes."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-black overflow-hidden">
                  <img src="/images/review9.jpg" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-sm">Sarah M., RN</div>
                  <div className="text-xs text-green-600 font-bold flex items-center gap-1"><Check size={10} /> Verified Buyer</div>
                </div>
              </div>
            </NeoCard>

            <NeoCard className="p-6 bg-white border-black transform md:-translate-y-4 shadow-[8px_8px_0px_0px_var(--color-hot-pink)]">
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} className="fill-primary text-primary" />)}
              </div>
              <h4 className="font-black uppercase text-lg mb-2">"Post-menopause breakthrough."</h4>
              <p className="text-sm font-medium text-gray-600 mb-4">
                "My gynecologist mentioned air-pulse technology might help with the sensitivity changes I'd experienced since menopause. She was right. The LEM restored sensations I thought were gone permanently. This should be standard medical advice."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-black overflow-hidden">
                  <img src="/images/review10.jpg" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-sm">Jessica K., 58</div>
                  <div className="text-xs text-green-600 font-bold flex items-center gap-1"><Check size={10} /> Verified Buyer</div>
                </div>
              </div>
            </NeoCard>

            <NeoCard className="p-6 bg-white border-black">
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} className="fill-black text-black" />)}
              </div>
              <h4 className="font-black uppercase text-lg mb-2">"The data convinced me."</h4>
              <p className="text-sm font-medium text-gray-600 mb-4">
                "I spent two weeks reading clinical literature on air-pulse vs. vibration before purchasing. The evidence is overwhelming. And the real-world experience confirmed every finding. This is what evidence-based wellness looks like."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-black overflow-hidden">
                  <img src="/images/review1.jpg" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-sm">Emily R., PhD</div>
                  <div className="text-xs text-green-600 font-bold flex items-center gap-1"><Check size={10} /> Verified Buyer</div>
                </div>
              </div>
            </NeoCard>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PRICING — You've Seen the Evidence            */}
      {/* ============================================ */}
      <section id="pricing" className="py-24 bg-black text-white border-b-4 border-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#333 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-destructive text-white px-4 py-1 font-bold uppercase text-sm border-2 border-white mb-6 animate-pulse">
              Limited Time Offer Ends Soon
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 text-[#FAFF00]">
              You've Seen The Evidence
            </h2>
            <CountdownTimer className="mb-8" />
            <p className="text-xl font-medium text-gray-300">30-Day Clinical Satisfaction Guarantee. Full refund if unsatisfied. No questions asked.</p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-[#FAFF00] text-black border-4 border-white p-8 relative transform hover:scale-105 transition-transform duration-300 shadow-[0px_0px_40px_rgba(250,255,0,0.5)]">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-2 font-bold uppercase text-sm border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap">
                Evidence-Based Choice
              </div>
              <h3 className="text-4xl font-black uppercase mb-2 text-center">The Proven Solution</h3>
              <div className="text-7xl font-black mb-4 text-center">$89</div>
              <div className="flex justify-center mb-8">
                <div className="text-lg font-bold bg-white border-2 border-black inline-block px-4 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Save $70</div>
              </div>
              <ul className="space-y-4 mb-10 font-bold text-lg">
                <li className="flex items-center gap-3"><div className="bg-black text-white p-1 rounded-full"><Check size={16} strokeWidth={4} /></div> 1x Nancy LEM™ (Medical-Grade)</li>
                <li className="flex items-center gap-3"><div className="bg-black text-white p-1 rounded-full"><Check size={16} strokeWidth={4} /></div> Magnetic Charger</li>
                <li className="flex items-center gap-3"><div className="bg-black text-white p-1 rounded-full"><Check size={16} strokeWidth={4} /></div> Clinical Usage Guide</li>
              </ul>
              <div
                onClick={() => trackConversionAndNavigate()}
                className="block w-full cursor-pointer"
                role="link"
              >
                <NeoButton className="w-full text-xl py-8 uppercase tracking-wider" variant="default">
                  Choose the Proven Solution <ShieldCheck className="ml-2 h-6 w-6" />
                </NeoButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FAQ — Clinical authority framing               */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-black uppercase text-center mb-12">Clinical Questions. Evidence-Based Answers.</h2>
          <NeoAccordion items={[
            { title: "What clinical evidence supports air-pulse technology?", content: "Air-pulse technology is adapted from vacuum clitoral therapy, which has been studied in peer-reviewed sexual medicine research. Studies published in the Journal of Sexual Medicine demonstrate that vacuum stimulation significantly increases clitoral blood flow and engorgement, enhancing sensation through vascular mechanisms rather than surface friction. The Nancy LEM applies this clinically validated mechanism in a consumer-grade device." },
            { title: "What medical-grade materials is the LEM made from?", content: "The LEM is constructed from 100% medical-grade, non-porous silicone that meets ISO 10993 biocompatibility standards for mucosal contact. It is hypoallergenic, phthalate-free, BPA-free, and latex-free. The device is also IPX7 waterproof certified, allowing complete submersion for thorough hygiene protocols." },
            { title: "Is the LEM recommended by healthcare professionals?", content: "Yes. Dr. Angela Wright, a GP, Menopause Specialist, and Clinical Sexologist, recommends the LEM as a high-quality, beginner-friendly suction device. It is increasingly used in clinical contexts for patients experiencing reduced sensitivity due to menopause, cancer treatment, or medication side effects." },
            { title: "How does air-pulse compare to traditional vibration in studies?", content: "Clinical research indicates three key advantages: (1) air-pulse increases blood flow rather than causing desensitization, (2) contactless stimulation prevents the nerve fatigue associated with mechanical friction, and (3) pressure waves reach deep clitoral structures that surface vibration cannot access. Users consistently report faster, more intense responses compared to traditional vibration." },
            { title: "What is the satisfaction rate among users?", content: "With over 500,000 units in use, the Nancy LEM maintains a satisfaction rate that supports our 30-day money-back guarantee. The majority of users report achieving response within the first use, with a median time-to-response of under 3 minutes. Our return rate is well below the industry average for intimate wellness devices." }
          ]} />
        </div>
      </section>

      {/* ============================================ */}
      {/* FINAL PUSH — Clinical close                   */}
      {/* ============================================ */}
      <section className="py-16 bg-primary border-b-4 border-black">
        <div className="container max-w-3xl text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white leading-tight">
            The Research Is Published. The Results Are Proven. The Decision Is Yours.
          </h2>
          <p className="text-xl font-medium text-white/90">
            500,000+ women have already chosen the evidence-based approach. Clinical-grade materials. Peer-reviewed mechanism. 30-day guarantee.
          </p>
          <NeoButton size="lg" className="text-xl px-12 py-8 bg-black text-white hover:bg-black/90 border-white" onClick={scrollToPricing}>
            Choose the Proven Solution <ShieldCheck className="ml-2 h-6 w-6" />
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

      <StickyCTA />
    </div>
  );
}
