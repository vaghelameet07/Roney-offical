import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Crosshair, Swords, Settings, Youtube, Instagram, MessageSquare, ChevronRight, Play } from "lucide-react";
import { z } from "zod";
import { useSubscribe } from "@/hooks/use-subscribers";
import { api } from "@shared/routes";

const features = [
  {
    title: "Pro Sniping",
    description: "Learn the exact crosshair placements, prediction spots, and reaction times needed for godly AWM & Kar98k flicks.",
    icon: Crosshair,
    delay: 0.1
  },
  {
    title: "1v4 Rush Gameplay",
    description: "Master the psychology of isolation. Break down enemy squads one by one with aggressive movement and utility.",
    icon: Swords,
    delay: 0.2
  },
  {
    title: "Sensitivity Settings",
    description: "Copy my exact gyro and ADS sensitivities. Find the perfect balance between stable sprays and fast close-combat tracking.",
    icon: Settings,
    delay: 0.3
  }
];

// Fallback schema in case shared schema isn't fully typed in this env
const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export default function Home() {
  const { mutate: subscribe, isPending } = useSubscribe();
  
  const form = useForm<z.infer<typeof subscribeSchema>>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: { email: "" }
  });

  const onSubmit = (data: z.infer<typeof subscribeSchema>) => {
    subscribe(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Noise & Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary clip-diagonal flex items-center justify-center text-black font-display font-bold text-xl">
              PX
            </div>
            <span className="font-display font-bold text-xl tracking-widest text-primary">PRO<span className="text-white">X</span></span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-semibold tracking-wider text-muted-foreground hover:text-primary transition-colors uppercase">Features</a>
            <a href="#video" className="text-sm font-semibold tracking-wider text-muted-foreground hover:text-primary transition-colors uppercase">Latest Video</a>
            <a href="#subscribe" className="text-sm font-semibold tracking-wider text-muted-foreground hover:text-primary transition-colors uppercase">Join Squad</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract geometric background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 border border-primary/30 bg-primary/10 text-primary font-display tracking-widest text-sm mb-6 clip-diagonal">
              ROAD TO CONQUEROR
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-white mb-6 uppercase leading-none"
          >
            BGMI <br className="md:hidden" />
            <span className="text-primary neon-text">Insane Clutches</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-sans leading-relaxed"
          >
            Witness impossible 1v4 situations, pixel-perfect AWM shots, and 900 IQ rotations. Daily uploads to elevate your gameplay.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a 
              href="https://youtube.com/@infinitymeet?si=N22iEY4sH1mH77DK" 
              target="_blank" 
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center px-10 py-5 font-display font-bold text-xl text-black bg-primary clip-diagonal animate-pulse-glow transition-all hover:bg-yellow-500 w-full sm:w-auto"
            >
              <Youtube className="w-6 h-6 mr-3" />
              <span>SUBSCRIBE ON YOUTUBE</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out clip-diagonal" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-20 relative z-10 bg-black/50 border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase">Latest <span className="text-primary">Gameplay</span></h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(243,156,18,0.8)]" />
          </div>

          <motion.a 
            href="https://youtu.be/Jrn0E65tG-4?si=7zdWX_uF5XCu3mwi"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative block rounded-lg overflow-hidden neon-glow bg-black aspect-video group cursor-pointer"
          >
            {/* YouTube Embed */}
            <iframe
              className="absolute inset-0 w-full h-full pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              src="https://www.youtube.com/embed/Jrn0E65tG-4?autoplay=1&mute=1&controls=0&loop=1&playlist=Jrn0E65tG-4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm border border-primary/50 group-hover:scale-110 transition-transform duration-300">
                <Play className="w-10 h-10 text-primary ml-2 drop-shadow-[0_0_10px_rgba(243,156,18,1)]" />
              </div>
            </div>
            {/* Overlay to ensure clicks go to the anchor tag */}
            <div className="absolute inset-0 bg-transparent" />
            <div className="absolute bottom-0 left-0 p-6 pointer-events-none">
              <span className="bg-primary text-black font-bold font-display px-3 py-1 text-sm rounded-sm mb-2 inline-block uppercase">New Upload</span>
              <h3 className="text-white font-display text-2xl md:text-3xl font-bold uppercase tracking-wide">LATEST GAMEPLAY</h3>
            </div>
          </motion.a>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: feature.delay }}
                className="group relative bg-card border border-card-border p-8 clip-diagonal-reverse hover:border-primary/50 transition-colors duration-300"
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-background border border-border flex items-center justify-center mb-6 text-primary group-hover:text-white group-hover:bg-primary transition-colors duration-300 clip-diagonal">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section id="subscribe" className="py-24 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-card border border-primary/30 p-8 md:p-12 rounded-lg neon-glow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
            
            <div className="relative z-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase mb-4">
                  Join The <span className="text-primary">Squad</span>
                </h2>
                <p className="text-muted-foreground">
                  Get notified about new sensitivity codes, exclusive custom room matches, and behind-the-scenes content.
                </p>
              </div>

              <div className="w-full md:w-1/2">
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                  <div className="relative">
                    <input 
                      {...form.register("email")}
                      type="email" 
                      placeholder="ENTER YOUR EMAIL"
                      className="w-full bg-background border-2 border-border focus:border-primary text-white px-6 py-4 outline-none font-display text-lg uppercase tracking-wider transition-colors placeholder:text-muted-foreground/50 clip-diagonal-reverse"
                    />
                    {form.formState.errors.email && (
                      <span className="absolute -bottom-6 left-0 text-destructive text-sm font-semibold">
                        {form.formState.errors.email.message}
                      </span>
                    )}
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-white hover:bg-primary text-black px-6 py-4 font-display font-bold text-xl uppercase tracking-wider flex items-center justify-center group transition-colors clip-diagonal disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isPending ? (
                      <span className="animate-pulse">Processing...</span>
                    ) : (
                      <>
                        <span>Get Access</span>
                        <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 bg-primary clip-diagonal flex items-center justify-center text-black font-display font-bold text-sm">
                PX
              </div>
              <span className="font-display font-bold text-lg tracking-widest text-primary">PRO<span className="text-white">X</span></span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="https://youtube.com/@infinitymeet?si=N22iEY4sH1mH77DK" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-12 text-center text-sm font-semibold tracking-wider text-muted-foreground/40 uppercase">
            © {new Date().getFullYear()} PROX GAMING. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
