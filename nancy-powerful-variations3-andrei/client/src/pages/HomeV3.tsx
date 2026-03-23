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
 * VARIATION 3: "The Accidental Discovery" — Discovery Story Angle
 *
 * CRO Hypothesis: First-person narrative/advertorial format will increase
 * engagement and time-on-page by 20-30% and CVR by 10-15% by creating
 * an emotional connection through storytelling and relatability.
 *
 * Psychological Triggers: Narrative transportation, social proof through story,
 * curiosity loops, identification with narrator
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

export default function HomeV3() {
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
      {/* HERO — The Accidental Discovery Opening      */}
      {/* ============================================ */}
      <header className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-[#FAFF00] border-b-4 border-black">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-left">
              <NeoBadge className="bg-destructive text-white border-black">A True Story</NeoBadge>
              <h1 className="text-4xl md:text-6xl font-black leading-[0.9] tracking-tighter uppercase drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
                I Laughed When My Friend Said a Lemon-Shaped Toy <span className="text-primary bg-white px-2 border-2 border-black inline-block transform -rotate-2">Changed Her Life.</span> Then I Tried It.
              </h1>
              <p className="text-xl md:text-2xl font-medium max-w-lg leading-relaxed border-l-4 border-black pl-6">
                Six months ago, I would have scrolled right past this page. I'm writing it now because what happened next <strong>changed everything.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <NeoButton size="lg" className="text-xl px-8 py-8 h-auto w-full sm:w-auto" onClick={scrollToPricing}>
                  Read My Story <Heart className="ml-2 h-6 w-6 fill-current" />
                </NeoButton>
                <div className="flex items-center gap-2 font-bold text-sm p-4 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex -space-x-2">
                    {[5, 9, 10, 26].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-black overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <span>Join 500,000+ Women With Their Own Story</span>
                </div>
              </div>

              <ul className="space-y-3 font-bold text-lg">
                {[
                  "How a text from my best friend changed everything",
                  "Why I almost returned it after unboxing",
                  "The 3-minute moment that made me cry (in a good way)",
                  "What my husband said the next morning"
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
                  <p className="font-bold text-sm">"This is the story I wish someone told me."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ============================================ */}
      {/* CHAPTER 1: The Drawer of Shame               */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container max-w-4xl mx-auto text-center space-y-12">
          <NeoBadge className="bg-black text-white border-black mb-4">Chapter 1</NeoBadge>
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
            The Drawer of <span className="bg-black text-white px-2">Shame</span>
          </h2>
          <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto text-left leading-relaxed">
            I'm Jess. I'm 34. And until six months ago, I had a nightstand drawer I never opened in front of anyone. Inside it: three vibrators that cost me a combined $280 and delivered a combined total of zero orgasms. I'd convinced myself I was the problem. That maybe I just wasn't wired for it. Sound familiar?
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "The One That Numbed Me",
                desc: "My first. A bestseller with 10,000 reviews. I used it exactly four times. Each time, the buzzing started strong and then... nothing. Just a weird tingling that faded into numbness. I'd lie there thinking: is this seriously what everyone's raving about?",
                icon: <Zap className="w-10 h-10" />
              },
              {
                title: "The One That Sounded Like a Blender",
                desc: "The luxury one. Rose gold. Came in a velvet box. I turned it on and my roommate texted from the living room: 'You making smoothies?' I never used it again. It lives under old scarves now.",
                icon: <VolumeX className="w-10 h-10" />
              },
              {
                title: "The One That Died Mid-Moment",
                desc: "The worst. I was finally, maybe, getting somewhere. My eyes were closed, my breathing changed, and then — silence. Dead battery. I stared at the ceiling for ten minutes and decided I was done with toys forever.",
                icon: <Heart className="w-10 h-10" />
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

          <div className="bg-black text-white p-8 border-4 border-primary max-w-3xl mx-auto shadow-[8px_8px_0px_0px_rgba(255,0,153,0.3)]">
            <p className="text-2xl font-black uppercase mb-4">That was my life for eight years.</p>
            <p className="text-xl font-medium leading-relaxed">
              Three toys. Zero results. One growing belief that maybe pleasure just wasn't in the cards for me. Then my best friend sent me a text that changed everything.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CHAPTER 2: The Text That Started It All      */}
      {/* ============================================ */}
      <section className="py-20 bg-[#FAFF00] border-b-4 border-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
        <div className="container grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            <NeoBadge className="bg-primary text-white border-black mb-6">The Turning Point</NeoBadge>
            <h3 className="text-3xl font-black uppercase mb-6 border-b-4 border-primary pb-2 inline-block">The Text Message</h3>
            <div className="space-y-4 text-lg font-medium">
              <div className="bg-[#F0F0F0] rounded-2xl rounded-bl-none p-4 max-w-[80%] border-2 border-black">
                <p className="font-bold text-sm text-gray-500 mb-1">Megan, 11:47 PM</p>
                <p>Trust me.</p>
              </div>
              <div className="bg-[#F0F0F0] rounded-2xl rounded-bl-none p-4 max-w-[80%] border-2 border-black">
                <p className="text-primary underline">hellonancy.com/products/lem</p>
              </div>
              <div className="bg-primary text-white rounded-2xl rounded-br-none p-4 max-w-[80%] ml-auto border-2 border-black">
                <p className="font-bold text-sm text-white/70 mb-1">Me, 11:48 PM</p>
                <p>Meg it's shaped like a lemon 😂</p>
              </div>
              <div className="bg-[#F0F0F0] rounded-2xl rounded-bl-none p-4 max-w-[80%] border-2 border-black">
                <p>Just buy it. Thank me later.</p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <NeoBadge className="bg-black text-white">Chapter 2</NeoBadge>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
              My Best Friend Sent Me a Link With Zero Context. <span className="text-primary bg-white px-2 border-2 border-black">Just "Trust Me."</span>
            </h2>
            <p className="text-xl font-medium leading-relaxed">
              Megan is not the type to recommend things lightly. She once spent three weeks researching a toaster. So when she sent a link with nothing but "trust me" at midnight, I paid attention. I clicked. I saw a lemon-shaped device. I laughed. Then I read the reviews. Then I stopped laughing.
            </p>
            <p className="text-xl font-medium leading-relaxed">
              The package arrived four days later. Plain brown box. No logos. Inside, this adorable yellow thing that looked more like a bath toy than anything else. I read the instructions and one line stopped me cold: <strong>"This device does not vibrate. It uses air-suction technology."</strong>
            </p>
            <p className="text-xl font-medium leading-relaxed italic border-l-4 border-black pl-4">
              Wait — this doesn't vibrate? How does it even work?
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CHAPTER 3: The Three Minutes                  */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <NeoBadge className="bg-primary text-white border-black mb-4">The Moment</NeoBadge>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none mb-6">
              I Wasn't Ready For <span className="bg-black text-white px-2">What Happened Next</span>
            </h2>
            <p className="text-xl font-medium max-w-3xl mx-auto leading-relaxed">
              It was a Tuesday night. My husband was watching TV downstairs. I locked the bathroom door, ran a bath, and pressed the single button on the LEM. What happened in the next three minutes rewrote everything I believed about my own body.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <NeoCard className="p-8 border-black bg-[#F0F0F0]">
              <div className="bg-white border-2 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                <Wind className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4">It Wasn't Buzzing — It Was Breathing</h3>
              <p className="font-medium leading-relaxed">
                The first thing I noticed was the silence. No angry buzzing. No mechanical drone. Just this gentle pulsing sensation — like soft waves of air. I almost laughed again. This tiny, quiet thing? Really? But then the waves started doing something no vibrator had ever done. They were reaching deeper. Not on the surface. Underneath.
              </p>
            </NeoCard>

            <NeoCard className="p-8 border-black bg-white transform md:-translate-y-4 shadow-[8px_8px_0px_0px_var(--color-hot-pink)] z-10">
              <div className="bg-primary text-white border-2 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                <Droplets className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4">I Felt It Everywhere</h3>
              <p className="font-medium leading-relaxed">
                Within sixty seconds, something shifted. My legs tensed without me telling them to. My breathing changed. This wasn't the numb, surface-level buzzing I was used to. The air-pulse technology was stimulating the entire clitoral structure — the 90% that's hidden inside — places no vibrator had ever reached. My whole body was responding.
              </p>
            </NeoCard>

            <NeoCard className="p-8 border-black bg-[#F0F0F0]">
              <div className="bg-white border-2 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4">It Kept Building</h3>
              <p className="font-medium leading-relaxed">
                This is the part I can't fully explain. With vibrators, I'd hit a wall. The sensation would plateau and then fade. With the LEM, it just kept building. Wave after wave, each one a little more intense. And then — at about the three-minute mark — something happened that I'd genuinely never experienced before. I cried afterward. Happy tears. Relief tears.
              </p>
            </NeoCard>
          </div>

          <div className="mt-12 p-6 bg-black text-white border-4 border-[#FAFF00] text-center max-w-3xl mx-auto shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
            <p className="font-bold text-lg uppercase tracking-widest mb-2">The Science I Learned After</p>
            <p className="text-xl font-medium italic">
              The LEM uses air-pulse technology that creates gentle vacuum waves, stimulating the 8,000+ nerve endings in the entire clitoral structure — not just the surface. It mimics oral stimulation, reaching nerve endings vibrators physically cannot.
            </p>
            <p className="mt-4 text-sm text-gray-400 uppercase font-bold">Adapted from Journal of Sexual Medicine findings</p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CHAPTER 4: What I Wish I'd Known             */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-primary transform translate-x-4 translate-y-4 border-4 border-black"></div>
              <div className="relative z-10 bg-white border-4 border-black p-2">
                <img src="/images/pdp1.jpg" alt="Beginner Friendly" className="w-full h-auto object-cover border-2 border-black" />
                <div className="absolute bottom-8 left-8 right-8 bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="space-y-3 text-sm font-medium">
                    <div className="bg-[#F0F0F0] rounded-2xl rounded-bl-none p-3 max-w-[85%] border-2 border-black">
                      <p className="font-bold text-xs text-gray-500 mb-1">Megan</p>
                      <p>So??? Did you try it?</p>
                    </div>
                    <div className="bg-primary text-white rounded-2xl rounded-br-none p-3 max-w-[85%] ml-auto border-2 border-black">
                      <p>I owe you my life 😭</p>
                    </div>
                    <div className="bg-[#F0F0F0] rounded-2xl rounded-bl-none p-3 max-w-[85%] border-2 border-black">
                      <p>TOLD YOU. Welcome to the club 🍋</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <NeoBadge className="bg-[#FAFF00] text-black border-black">Chapter 4</NeoBadge>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
              What I Wish <br/><span className="bg-black text-white px-2">I'd Known</span>
            </h2>
            <p className="text-xl font-medium leading-relaxed">
              If you're reading this thinking "that sounds nice, but it won't work for me" — I get it. I was you. So here's what I'd tell past-me if I could go back in time:
            </p>
            <p className="text-xl font-medium leading-relaxed italic border-l-4 border-black pl-4">
              You don't need experience. You don't need to "learn your body" first. You need one button and 3 minutes.
            </p>
            <ul className="space-y-3 font-bold text-lg">
              <li className="flex items-center gap-3"><Check className="text-primary" /> Works for total beginners — I was basically one</li>
              <li className="flex items-center gap-3"><Check className="text-primary" /> Simple 2-button control — on/off and intensity</li>
              <li className="flex items-center gap-3"><Check className="text-primary" /> Non-intimidating lemon design — my toddler thought it was a bath toy</li>
              <li className="flex items-center gap-3"><Check className="text-primary" /> 10 intensity levels — start at 1, trust the process</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* LIFESTYLE GALLERY — Narrator's Life           */}
      {/* ============================================ */}
      <section className="py-20 bg-black text-white border-b-4 border-white overflow-hidden">
        <div className="container">
          <div className="text-center mb-16">
            <NeoBadge className="bg-primary text-white border-white mb-4">My New Normal</NeoBadge>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none text-[#FAFF00]">
              It Fits Into <span className="bg-white text-black px-2">My Actual Life</span>
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
      {/* CHAPTER 5: The Unboxing                      */}
      {/* ============================================ */}
      <section className="py-20 bg-[#FAFF00] border-b-4 border-black">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <NeoBadge className="bg-black text-white border-black">Chapter 5</NeoBadge>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
              The <span className="bg-white px-2 border-2 border-black">Unboxing</span>
            </h2>
            <p className="text-xl font-medium leading-relaxed">
              I was nervous when the package arrived. What if my husband saw it? What if it was obvious? But the box was completely plain. Brown cardboard. No logos. No product name. It could have been a phone case. I opened it in the kitchen with zero fear.
            </p>
            <p className="text-xl font-medium leading-relaxed">
              Inside, everything was clean and minimal. The LEM itself, nestled in a soft case. A magnetic charger. A little booklet they call the "Self-Love Manual" — which actually had helpful tips instead of just warnings in twelve languages. The whole thing felt thoughtful. Like someone had designed it for a woman who was nervous about buying it.
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
      {/* WHISPER-QUIET — Narrator's Relief             */}
      {/* ============================================ */}
      <section className="py-16 bg-black text-white border-b-4 border-white">
        <div className="container text-center max-w-4xl">
          <NeoBadge className="bg-primary text-white border-white mb-6">The Thing I Was Most Worried About</NeoBadge>
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-8">
            My Roommate Was Home. <br/><span className="text-primary">She Didn't Hear a Thing.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
            Remember the "blender" vibrator? That trauma was real. So the first time I used the LEM, I held my breath, certain my roommate would hear through the wall. She didn't. Not even close. I tested it later by holding it up to my ear — barely a whisper. The relief was almost as good as the orgasm. Almost.
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
      {/* CHAPTER 6: The Conversation                   */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <NeoBadge className="bg-secondary text-secondary-foreground border-black">Chapter 6</NeoBadge>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-none">
              The <span className="bg-primary text-white px-2">Conversation</span>
            </h2>
            <p className="text-lg font-medium leading-relaxed">
              I didn't tell my husband right away. I used the LEM alone three more times first — partly because I couldn't believe it, and partly because I wanted to be sure it wasn't a fluke. It wasn't. On the fourth night, I left it on his nightstand with a note: "We should try this together."
            </p>
            <p className="text-lg font-medium leading-relaxed">
              He was skeptical. Then curious. Then a fan. Using it together during foreplay was a completely different experience — it took the pressure off both of us. I didn't have to perform. He didn't have to guess. We just connected. It sounds cheesy, but it brought back something we'd been missing for years.
            </p>
            <ul className="space-y-4 font-bold">
              <li className="flex items-center gap-3">
                <Heart className="text-primary fill-current" /> Use during foreplay to build real anticipation
              </li>
              <li className="flex items-center gap-3">
                <Heart className="text-primary fill-current" /> Takes the performance pressure off both partners
              </li>
              <li className="flex items-center gap-3">
                <Heart className="text-primary fill-current" /> Brings back connection you forgot was possible
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="bg-[#F0F0F0] border-4 border-black p-8 transform rotate-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl font-black uppercase mb-4 text-center">A Parallel Story</h3>
              <p className="text-lg font-medium italic text-center">
                "After 12 years of marriage, I'd stopped enjoying intimacy entirely. My husband bought the LEM and we tried it together. For the first time in years, I didn't have to fake anything. We both cried. This little lemon saved us."
              </p>
              <div className="mt-6 text-center font-bold uppercase">- Emily & Mark, Married 12 Years</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CHAPTER 7: It Never Let Me Down               */}
      {/* ============================================ */}
      <section className="py-16 bg-[#FAFF00] border-b-4 border-black">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <NeoBadge className="bg-black text-white border-black mb-4">Chapter 7</NeoBadge>
            <h2 className="text-4xl font-black uppercase mb-4">It Never <br/>Let Me Down.</h2>
            <p className="text-xl font-medium leading-relaxed">
              Remember the vibrator that died at the worst possible moment? That story still haunts me. So the first thing I checked on the LEM was battery life. <strong>120 minutes.</strong> That's weeks of daily use on a single charge. Six months in, it's never died on me. Not once. After years of dead-battery heartbreak, that alone is worth the price.
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
      {/* PRICE — Narrator's Internal Debate            */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-8">
            Is $89 a Lot? <br/><span className="bg-[#FAFF00] px-2 border-2 border-black">Here's What I Told Myself.</span>
          </h2>
          <p className="text-xl font-medium max-w-3xl mx-auto mb-12 leading-relaxed">
            I almost didn't buy it because of the price. Then I did the math on what I'd already spent: $280 on vibrators that didn't work. $60 on a "couples workshop" that was awkward. $150 on a spa day trying to "reconnect with my body." That's nearly $500 on things that did nothing. The LEM cost me $89 and delivered more in three minutes than all of that combined.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-100 border-4 border-gray-300 p-8 opacity-60">
              <h3 className="text-2xl font-bold uppercase mb-4">My Drawer of Regrets</h3>
              <div className="text-5xl font-black text-gray-500 mb-4">$490+</div>
              <p className="font-bold text-gray-500">Result: Still faking it</p>
            </div>
            <div className="bg-white border-4 border-black p-8 transform scale-110 shadow-[8px_8px_0px_0px_var(--color-hot-pink)] relative z-10">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 font-bold uppercase text-sm border-2 border-black">The Last Toy I'll Ever Buy</div>
              <h3 className="text-2xl font-black uppercase mb-4">Nancy LEM™</h3>
              <div className="text-5xl font-black text-black mb-4">$89</div>
              <p className="font-bold text-black">Result: Six months of real satisfaction</p>
            </div>
          </div>
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
      {/* OTHER WOMEN'S STORIES — Reviews as stories    */}
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
              Other Women's <span className="bg-black text-white px-2">Stories</span>
            </h2>
            <p className="text-xl font-medium text-gray-600">I'm not the only one. Here are some stories that could have been mine.</p>
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
              <h4 className="font-black uppercase text-lg mb-2">Sarah's Story</h4>
              <p className="text-sm font-medium text-gray-600 mb-4">
                "After wasting money on 4 different vibrators that did nothing, I was done. My friend convinced me to try this. Under 3 minutes. I'm in shock. I wish I hadn't waited so long. The LEM did what nothing else could."
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
              <h4 className="font-black uppercase text-lg mb-2">Jessica's Story</h4>
              <p className="text-sm font-medium text-gray-600 mb-4">
                "My husband and I were in a rut. I hadn't experienced anything real in years. We tried the LEM together and it was like rediscovering each other. This little lemon-shaped thing saved our intimacy. I tell everyone."
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
              <h4 className="font-black uppercase text-lg mb-2">Emily's Story</h4>
              <p className="text-sm font-medium text-gray-600 mb-4">
                "I genuinely thought I was incapable. 10+ years of nothing. A coworker whispered about this at a happy hour and I was skeptical. First time using it? I literally couldn't believe what I'd been missing. I'm a new person."
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
      {/* PRICING CTA — "My Only Regret"                */}
      {/* ============================================ */}
      <section id="pricing" className="py-24 bg-black text-white border-b-4 border-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#333 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-destructive text-white px-4 py-1 font-bold uppercase text-sm border-2 border-white mb-6 animate-pulse">
              Limited Time Offer Ends Soon
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 text-[#FAFF00]">
              My Only Regret? Not Getting It Sooner.
            </h2>
            <CountdownTimer className="mb-8" />
            <p className="text-xl font-medium text-gray-300">30-Day Risk-Free Guarantee. If it doesn't work for you, send it back. No questions. But if your story ends up anything like mine — you'll wish you'd clicked sooner.</p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-[#FAFF00] text-black border-4 border-white p-8 relative transform hover:scale-105 transition-transform duration-300 shadow-[0px_0px_40px_rgba(250,255,0,0.5)]">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-2 font-bold uppercase text-sm border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap">
                Most Popular
              </div>
              <h3 className="text-4xl font-black uppercase mb-2 text-center">Your Story Starts Here</h3>
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
                  Start Your Own Story <Heart className="ml-2 h-6 w-6 fill-current" />
                </NeoButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FAQ — Questions I Had Before Buying           */}
      {/* ============================================ */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-black uppercase text-center mb-4">Questions I Had Before Buying</h2>
          <p className="text-center text-lg font-medium text-gray-600 mb-12">I Googled all of these at 1 AM. Saving you the trouble.</p>
          <NeoAccordion items={[
            { title: "\"Is this thing actually different from a vibrator?\"", content: "Completely. I was skeptical too. Vibrators buzz on the surface and eventually numb you out. The LEM uses air-pulse technology — gentle vacuum waves that stimulate the entire clitoral structure, including the 90% that's hidden inside. It's a fundamentally different sensation. I'd describe it as the difference between someone tapping your shoulder and a warm embrace. Once you feel it, you'll understand why vibrators never worked." },
            { title: "\"What if it doesn't work for me?\"", content: "This was my biggest fear. After years of failed toys, I was terrified of another disappointment. That's why the 30-day guarantee mattered to me — if it didn't work, I could send it back, no questions asked. But it worked. In under three minutes. And it's worked every single time since. With 500,000+ satisfied users, the odds are very much in your favor." },
            { title: "\"Is it actually quiet?\"", content: "After the blender incident, this was non-negotiable for me. The LEM runs under 40 decibels — quieter than a whisper. I've used it with my roommate in the next room, with my husband downstairs, even in a hotel with thin walls. Nobody has ever heard it. I promise." },
            { title: "\"Will anyone know what I ordered?\"", content: "No. This was a huge deal for me. The package arrives in a plain brown box with zero branding. No logos, no product names, no suggestive imagery. Your bank statement shows a generic company name. I opened mine in front of my husband before I even knew what it was — that's how discreet it is." },
            { title: "\"Can I return it?\"", content: "Yes — 30-day satisfaction guarantee, no questions asked. I checked this three times before buying because I'd been burned before. If it doesn't change your life the way it changed mine, you get a full refund. But between you and me? You're not going to return it." }
          ]} />
        </div>
      </section>

      {/* ============================================ */}
      {/* EPILOGUE — Final emotional close              */}
      {/* ============================================ */}
      <section className="py-16 bg-primary border-b-4 border-black">
        <div className="container max-w-3xl text-center space-y-8">
          <NeoBadge className="bg-white text-black border-black">Epilogue</NeoBadge>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white leading-tight">
            Six Months Later.
          </h2>
          <p className="text-xl font-medium text-white/90 leading-relaxed max-w-2xl mx-auto">
            Six months later, the LEM is still the best $89 I've ever spent. My friend Megan? She asks for updates and I happily give them. My husband? Definitely a fan. And me? I'm the woman I was always supposed to be — the one who doesn't fake it, doesn't settle, and doesn't apologize for wanting more.
          </p>
          <p className="text-xl font-medium text-white/90 leading-relaxed max-w-2xl mx-auto">
            If you've read this far, you already know your story needs a new chapter. This is it.
          </p>
          <div
            onClick={() => trackConversionAndNavigate()}
            className="block w-full cursor-pointer"
            role="link"
          >
            <NeoButton size="lg" className="text-xl px-12 py-8 bg-black text-white hover:bg-black/90 border-white">
              Start Your Own Story <Heart className="ml-2 h-6 w-6 fill-current" />
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