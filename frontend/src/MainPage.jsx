import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import { motion, useAnimate } from 'framer-motion'
import { Terminal, Users, Cpu, HeartPulse, Globe, Gamepad2, Rocket, Ship, Space, Lightbulb, ArrowRight, Calendar, MapPin} from 'lucide-react'
import { useState, useEffect } from 'react'
import React from 'react'
import { Navbar } from './Navbar'

const AboutSection = () => {
    return (
        <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                {/* Left: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 sm:w-12 h-1 bg-arcade-neon"></div>
                        <span className="text-arcade-300 uppercase tracking-widest font-bold text-xs sm:text-sm">
                            About Us
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 sm:mb-6">
                        Hack the{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-arcade-neon to-arcade-cyan">
                            System
                        </span>
                        .
                    </h2>
                    <p className="text-arcade-100/70 text-base sm:text-lg leading-relaxed mb-6 font-sans">
                        TruHacks is a 36-hour creative marathon where students
                        from across the midwest gather to build the
                        extraordinary. Whether you're a seasoned developer or a
                        first-time hacker, grab a joystick and start building.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
                        <Feature
                            icon={<Terminal className="text-arcade-neon" />}
                            title="36 Hours"
                            desc="Non-stop coding & creation"
                        />
                        <Feature
                            icon={<Users className="text-arcade-cyan" />}
                            title="100+ Hackers"
                            desc="Collaborate and network"
                        />
                        <Feature
                            icon={<Cpu className="text-purple-400" />}
                            title="Workshops"
                            desc="Learn new tech stacks"
                        />
                        <Feature
                            icon={<Rocket className="text-blue-400" />}
                            title="Boeing"
                            desc="Speakers + Partnership"
                        />
                    </div>
                </motion.div>

                {/* Right: Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative w-full lg:w-1/2 mt-12 lg:mt-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-arcade-neon/20 to-blue-500/20 rounded-2xl transform rotate-3 blur-lg"></div>
                    <div className="relative bg-arcade-800 border border-arcade-700 p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-arcade-neon to-arcade-cyan"></div>
                        {/* Pseudo-code illustration */}
                        <div className="font-mono text-xs sm:text-sm text-arcade-300 space-y-2">
                            <div className="flex gap-2">
                                <span className="text-purple-400">const</span>{' '}
                                <span className="text-yellow-300">
                                    hackathon
                                </span>{' '}
                                = <span className="text-blue-300">init</span>(
                                {'{'}
                            </div>
                            <div className="pl-4">
                                <span className="text-white">energy:</span>{' '}
                                <span className="text-green-400">"high"</span>,
                            </div>
                            <div className="pl-4">
                                <span className="text-white">sleep:</span>{' '}
                                <span className="text-red-400">null</span>,
                            </div>
                            <div className="pl-4">
                                <span className="text-white">creativity:</span>{' '}
                                <span className="text-yellow-300">
                                    Infinity
                                </span>
                            </div>
                            <div>{'}'});</div>
                            <br />
                            <div>
                                <span className="text-purple-400">while</span>
                                (alive) {'{'}
                            </div>
                            <div className="pl-4 text-gray-400">
                                // TODO: Build something awesome
                            </div>
                            <div className="pl-4">
                                code.
                                <span className="text-blue-300">compile</span>
                                ();
                            </div>
                            <div>{'}'}</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const Feature = ({ icon, title, desc }) => (
    <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-arcade-800/50 rounded-lg border border-white/5 hover:border-arcade-neon/30 transition-colors h-full">
        <div className="mt-0.5 sm:mt-1">
            {React.cloneElement(icon, {
                className:
                    'w-4 h-4 sm:w-5 sm:h-5 ' + (icon.props.className || ''),
            })}
        </div>
        <div>
            <h4 className="font-bold text-white text-base sm:text-lg font-display">
                {title}
            </h4>
            <p className="text-xs sm:text-sm text-arcade-100/60">{desc}</p>
        </div>
    </div>
);

const tracks = [
    {
        title: 'Health & Wellness',
        desc: 'Tech for a healthier tomorrow. Apps for fitness, mental health, and accessibility.',
        icon: <HeartPulse size={32} className="text-red-400" />,
        color: 'border-red-500/30 hover:border-red-500',
        bg: 'from-red-900/20 to-transparent',
    },
    {
        title: 'Sustainability',
        desc: 'Code for the planet. Solutions for climate change, energy, and eco-living.',
        icon: <Globe size={32} className="text-green-400" />,
        color: 'border-green-500/30 hover:border-green-500',
        bg: 'from-green-900/20 to-transparent',
    },
    {
        title: 'Game Dev',
        desc: 'Press Start. Build immersive games, AR/VR experiences, or interactive art.',
        icon: <Gamepad2 size={32} className="text-purple-400" />,
        color: 'border-purple-500/30 hover:border-purple-500',
        bg: 'from-purple-900/20 to-transparent',
    },
    {
        title: 'Education',
        desc: 'Softwares that teaches people valuable knowledge.',
        icon: <Lightbulb size={32} className="text-yellow-400" />,
        color: 'border-yellow-500/30 hover:border-yellow-500',
        bg: 'from-yellow-900/20 to-transparent',
    },
];

const TracksSection = () => {
    return (
        <section className="py-12 sm:py-16 md:py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="text-center mb-8 sm:mb-16">
                    <span className="text-arcade-neon text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                        Choose Your Player
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mt-2">
                        Mission Tracks
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {tracks.map((track, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className={`group p-6 sm:p-8 rounded-2xl border ${track.color} bg-gradient-to-b ${track.bg} backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 h-full`}
                        >
                            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                                {React.cloneElement(track.icon, {
                                    className:
                                        'w-6 h-6 sm:w-8 sm:h-8 ' +
                                        (track.icon.props.className || ''),
                                })}
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 font-display">
                                {track.title}
                            </h3>
                            <p className="text-arcade-100/60 text-xs sm:text-sm leading-relaxed">
                                {track.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const PrizesSection = () => {
    return (
        <section className="py-12 sm:py-16 px-4 sm:px-6 relative overflow-hidden">
            {/* Background Decorative Grid */}

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-8 sm:mb-16">
                    <span className="text-arcade-cyan text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                        High Scores
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mt-2">
                        Winner Prizes
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row gap-6 sm:gap-8 justify-center items-center md:items-end">
                    {/* 2nd Place */}
                    <PrizeCard
                        title="Second Place"
                        prize="$2,000"
                        items={['Gaming Headsets', 'Dev Licenses', 'Swag Kits']}
                        color="border-gray-400"
                        delay={0.2}
                    />

                    {/* 1st Place - Featured */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-full sm:max-w-md md:w-1/3 bg-gradient-to-b from-arcade-800 to-arcade-900 border-2 border-arcade-neon rounded-2xl p-6 sm:p-8 text-center shadow-[0_0_50px_rgba(255,0,255,0.2)] relative order-first md:order-none z-20"
                    >
                        <div className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 bg-arcade-neon text-white px-3 sm:px-4 py-0.5 sm:py-1 rounded-full font-bold text-xs sm:text-sm tracking-wider shadow-lg whitespace-nowrap">
                            GRAND PRIZE
                        </div>
                        <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">
                            👑
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1 sm:mb-2">
                            First Place
                        </h3>
                        <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-arcade-neon to-white mb-4 sm:mb-6">
                            $5,000
                        </div>
                        <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-arcade-100/80 mb-6 sm:mb-8">
                            <li className="border-b border-white/10 pb-2">
                                Latest Gen Consoles
                            </li>
                            <li className="border-b border-white/10 pb-2">
                                Mechanical Keyboards
                            </li>
                            <li className="border-b border-white/10 pb-2">
                                Internship Interview
                            </li>
                        </ul>
                    </motion.div>

                    {/* 3rd Place */}
                    <PrizeCard
                        title="Third Place"
                        prize="$1,000"
                        items={['Arduino Kits', 'Cloud Credits', 'T-Shirts']}
                        color="border-orange-700"
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
};

const PrizeCard = ({ place, title, prize, items, color, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        viewport={{ once: true }}
        className={`w-full sm:max-w-xs md:w-1/4 bg-arcade-800/50 border ${color} rounded-xl p-4 sm:p-6 text-center backdrop-blur-sm h-full`}
    >
        <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-1 sm:mb-2">
            {title}
        </h3>
        <div className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
            {prize}
        </div>
        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-arcade-100/60">
            {items.map((item, i) => (
                <li key={i} className="px-2">
                    {item}
                </li>
            ))}
        </ul>
    </motion.div>
);

const SponsorsSection = () => {
    return (
        <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative z-10">
            <div className="max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 sm:mb-16"
                >
                    <span className="text-arcade-neon text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                        Powered By
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mt-2">
                        Our Sponsors & Partners
                    </h2>
                </motion.div>

                {/* Platinum */}
                <div className="mb-12 sm:mb-24">
                    <h3 className="text-arcade-300 font-display text-lg sm:text-xl mb-8 sm:mb-12 uppercase tracking-widest flex items-center justify-center gap-3 sm:gap-4 opacity-70">
                        <span className="h-px w-8 sm:w-12 bg-current"></span>
                        Platinum Tier
                        <span className="h-px w-8 sm:w-12 bg-current"></span>
                    </h3>
                    <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 items-center">
                        <SponsorImage
                            src="https://placehold.co/600x200/2d1b4e/ffffff?text=Boeing"
                            alt="Boeing"
                        />
                        <SponsorImage
                            src="https://placehold.co/600x200/2d1b4e/ffffff?text=Truman State University"
                            alt="Truman State University"
                        />
                    </div>
                </div>

                {/* Gold */}
                <div className="mb-12 sm:mb-16">
                    <h3 className="text-yellow-500/80 font-display text-lg sm:text-xl mb-8 sm:mb-12 uppercase tracking-widest flex items-center justify-center gap-3 sm:gap-4 opacity-70">
                        <span className="h-px w-8 sm:w-12 bg-current"></span>
                        Gold Tier
                        <span className="h-px w-8 sm:w-12 bg-current"></span>
                    </h3>
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 items-center">
                        <SponsorImage
                            src="https://placehold.co/400x150/2d1b4e/ffffff?text=GDSC"
                            alt="GDSC"
                            size="small"
                        />
                        <SponsorImage
                            src="https://placehold.co/400x150/2d1b4e/ffffff?text=Truman Student GOV"
                            alt="Truman Student GOV"
                            size="small"
                        />
                        <SponsorImage
                            src="https://placehold.co/400x150/2d1b4e/ffffff?text=Truman Student GOV"
                            alt="Truman Student GOV"
                            size="small"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const SponsorImage = ({ src, alt, size = 'large' }) => {
    // Responsive width classes based on size
    const widthClass =
        size === 'large'
            ? 'w-40 sm:w-52 md:w-64 lg:w-80'
            : 'w-32 sm:w-40 md:w-48 lg:w-52';

    return (
        <motion.div
            whileHover={{ scale: 1.05, filter: 'brightness(1.2)' }}
            className={`relative group cursor-pointer grayscale hover:grayscale-0 transition-all duration-500 m-2`}
        >
            <img
                src={src}
                alt={alt}
                className={`${widthClass} h-auto max-h-16 sm:max-h-20 md:max-h-24 object-contain opacity-60 group-hover:opacity-100 transition-opacity`}
                loading="lazy"
            />
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-white/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 rounded-full"></div>
        </motion.div>
    );
};

const SignUpSection = () => {
    return (
        <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative z-10 bg-arcade-900/50">
            <div className="max-w-4xl mx-auto relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-arcade-neon to-arcade-cyan rounded-2xl blur opacity-30"></div>
                <div className="relative bg-arcade-800 border border-white/10 rounded-2xl p-6 sm:p-8 md:p-12 text-center overflow-hidden">
                    {/* Background Scanlines */}

                    <div className="relative z-10">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-3 sm:mb-4">
                            Ready to Play?
                        </h2>
                        <p className="text-arcade-100/70 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
                            Registration is open for all university students.
                            Secure your spot now!
                        </p>

                        <form
                            className="max-w-md mx-auto flex items-center justify-center"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <button className="cursor-pointer bg-arcade-neon hover:bg-arcade-500 text-white font-bold px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg flex items-center justify-center gap-2 transition-all group active:scale-95 w-full sm:w-auto text-sm sm:text-base">
                                <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                                    FILL OUT OUR FORM AND RESERVE A SPOT
                                </span>
                                <ArrowRight
                                    size={18}
                                    className="flex-shrink-0 group-hover:translate-x-1 transition-transform"
                                />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

const team = [
    {
        name: 'Huy B. Huynh',
        role: 'Project Lead',
        image: 'https://placehold.co/400x400/3b82f6/ffffff?text=Huy',
    },
    {
        name: 'Huy B. Huynh',
        role: 'Project Lead',
        image: 'https://placehold.co/400x400/3b82f6/ffffff?text=Huy',
    },
    {
        name: 'Huy B. Huynh',
        role: 'Project Lead',
        image: 'https://placehold.co/400x400/3b82f6/ffffff?text=Huy',
    },
    {
        name: 'Huy B. Huynh',
        role: 'Project Lead',
        image: 'https://placehold.co/400x400/3b82f6/ffffff?text=Huy',
    },
    {
        name: 'Huy B. Huynh',
        role: 'Project Lead',
        image: 'https://placehold.co/400x400/3b82f6/ffffff?text=Huy',
    },
    {
        name: 'Huy B. Huynh',
        role: 'Project Lead',
        image: 'https://placehold.co/400x400/3b82f6/ffffff?text=Huy',
    },
    {
        name: 'Huy B. Huynh',
        role: 'Project Lead',
        image: 'https://placehold.co/400x400/3b82f6/ffffff?text=Huy',
    },
    {
        name: 'Huy B. Huynh',
        role: 'Project Lead',
        image: 'https://placehold.co/400x400/3b82f6/ffffff?text=Huy',
    },
    {
        name: 'Huy B. Huynh',
        role: 'Project Lead',
        image: 'https://placehold.co/400x400/3b82f6/ffffff?text=Huy',
    },
];

const TeamSection = () => {
    return (
        <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 sm:mb-16">
                    <span className="text-arcade-100/50 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                        Credits
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-2">
                        The Organizers
                    </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
                    {team.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <div className="aspect-square bg-arcade-800 rounded-lg sm:rounded-xl overflow-hidden mb-2 sm:mb-4 border-2 border-transparent group-hover:border-arcade-neon/50 transition-all relative shadow-lg">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                                    loading="lazy"
                                />
                                {/* Subtle overlay for depth */}
                                <div className="absolute inset-0 bg-gradient-to-t from-arcade-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <h3 className="text-white font-bold text-sm sm:text-base md:text-lg leading-tight group-hover:text-arcade-neon transition-colors line-clamp-2">
                                {member.name}
                            </h3>
                            <p className="text-white/40 text-xs sm:text-xs uppercase tracking-wide font-mono">
                                {member.role}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const GlitchText = ({ 
  text, 
  className = "", 
  delay = 0, 
  subtle = false,
  persistent = true 
}) => {
  const [scope, animate] = useAnimate();
  const [isGlitching, setIsGlitching] = useState(true);

  useEffect(() => {
    const sequence = async () => {
      // Initial state: Invisible and distorted
      await animate(scope.current, { opacity: 0, scale: 0.9, filter: "blur(10px)" }, { duration: 0 });
      
      // Wait for delay
      await new Promise(resolve => setTimeout(resolve, delay * 1000));

      // Glitch In Sequence
      // Step 1: Flash in with high skew and blur
      animate(scope.current, { opacity: 1 }, { duration: 0.1 });
      
      // Rapid random glitch frames
      const loops = subtle ? 3 : 5;
      for (let i = 0; i < loops; i++) {
        await animate(scope.current, { 
          skewX: Math.random() * 20 - 10,
          x: Math.random() * 10 - 5,
          scale: 1 + Math.random() * 0.1,
          filter: `blur(${Math.random() * 2}px) hue-rotate(${Math.random() * 90}deg)`,
        }, { duration: 0.05 });
      }

      // Step 2: Stabilize
      await animate(scope.current, { 
        skewX: 0, 
        x: 0, 
        scale: 1, 
        filter: "blur(0px) hue-rotate(0deg)" 
      }, { duration: 0.2, ease: "circOut" });
      
      setIsGlitching(false);
    };

    sequence();
  }, [animate, delay, scope, subtle]);

  // CSS Variables for styling the keyframes
  const styleVars = {
    "--g-op": subtle ? 0.3 : 0.8,
    "--g-shift": subtle ? "1px" : "2px",
    "--g-dur-1": subtle ? "6s" : "2.5s",
    "--g-dur-2": subtle ? "8s" : "3s",
  };

  return (
    <div className="relative inline-block" style={styleVars}>
      <motion.span 
        ref={scope}
        className={`relative inline-block ${className} z-10`}
      >
        {text}
      </motion.span>
      
      {/* Decorative CSS Glitch Layers that appear occasionally - Only render if persistent is true */}
      {!isGlitching && persistent && (
        <>
          <span 
            className={`absolute top-0 left-0 -z-10 w-full h-full opacity-0 ${className}`}
            style={{ 
              textShadow: "2px 0 #ff00ff, -2px 0 #00ffff", 
              clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
              animation: "glitch-anim-1 var(--g-dur-1) infinite linear alternate-reverse"
            }}
          >
            {text}
          </span>
          <span 
            className={`absolute top-0 left-0 -z-10 w-full h-full opacity-0 ${className}`}
            style={{ 
              textShadow: "-2px 0 #ff00ff, 2px 0 #00ffff", 
              clipPath: "polygon(0 60%, 100% 60%, 100% 100%, 0 100%)",
              animation: "glitch-anim-2 var(--g-dur-2) infinite linear alternate-reverse"
            }}
          >
            {text}
          </span>
        </>
      )}

      <style>{`
        @keyframes glitch-anim-1 {
          0% { opacity: 0; }
          20% { opacity: 0; }
          21% { opacity: var(--g-op); transform: translate(calc(-1 * var(--g-shift)), var(--g-shift)); }
          22% { opacity: 0; }
          60% { opacity: 0; }
          61% { opacity: calc(var(--g-op) * 0.6); transform: translate(var(--g-shift), calc(-1 * var(--g-shift))); }
          62% { opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes glitch-anim-2 {
          0% { opacity: 0; }
          40% { opacity: 0; }
          41% { opacity: var(--g-op); transform: translate(var(--g-shift), calc(-1 * var(--g-shift))); }
          42% { opacity: 0; }
          80% { opacity: 0; }
          81% { opacity: calc(var(--g-op) * 0.6); transform: translate(calc(-1 * var(--g-shift)), var(--g-shift)); }
          82% { opacity: 0; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

function MainPage(){
    return(
        <>
        <Navbar/>
        <section className="relative h-[84vh]">
      <ParallaxBanner className="aspect-auto h-full w-full">
        <ParallaxBannerLayer 
            image="bg-dark.png" 
            speed={-5} 
            scale={[1, 1.1]}
            /* className="brightness-[0.4] blur-[1px]"  */
        />

        <ParallaxBannerLayer 
            image="midg-dark.png" 
            speed={-10} 
            /* className="brightness-[0.6] drop-shadow-2xl" */
        />

        {/* <ParallaxBannerLayer 
            image="newMain-1.png" 
            speed={-30} 
            scale={[1, 1.3]}
            translateY={[20, 0]}
            className="z-10"
        /> */}

        <ParallaxBannerLayer
            image="dust-1.png"
            speed={60}
            opacity={[1, 0.1]}
        />


        <ParallaxBannerLayer 
            speed={-9} 
            scale={[0.8, 1.2]} 
            translateY={[-50, 30]}
            className="z-20 flex items-center justify-center pointer-events-none"
        >
          <div className="text-center px-4 max-w-5xl pt-[20vh] md:pt-[5vh] pointer-events-auto">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: -50 }} // Slightly reduced Y movement to keep it centered
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
            >
              
              {/* Title Container */}
              <div className="relative mb-6">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter text-white drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                    {/* The Glitch Text Component */}
                    <GlitchText text="TRU" delay={0.8} />
                    <GlitchText 
                      text="HACKS" 
                      delay={1.2} 
                      subtle={true} 
                      persistent={false}
                      className="text-transparent bg-clip-text bg-gradient-to-b from-purple-300 via-purple-400 to-indigo-500 pr-1" 
                    />
                </h1>
                
                {/* Decorative lines under title */}
                <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 2, duration: 0.8 }}
                    className="h-1 w-2/3 mx-auto bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-2"
                />
              </div>

              {/* Badges/Info Pills */}
              <motion.div 
                className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10 text-sm md:text-base font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 1 }}
              >
                <div className="group flex items-center gap-3 bg-black/60 px-6 py-3 rounded-full backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:border-purple-500/50 transition-colors">
                    <Calendar className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
                    <span className="tracking-wide">FEBRUARY 2026</span>
                </div>
                
                <div className="group flex items-center gap-3 bg-black/60 px-6 py-3 rounded-full backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:border-purple-500/50 transition-colors">
                    <MapPin className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
                    <span className="tracking-wide">KIRKSVILLE, MO</span>
                </div>

                <div className="group flex items-center gap-3 bg-purple-900/40 px-6 py-3 rounded-full backdrop-blur-md border border-purple-500/30 shadow-[0_0_20px_rgba(124,58,237,0.2)] hover:bg-purple-900/60 transition-colors cursor-pointer">
                    <Terminal className="w-4 h-4 text-purple-300" />
                    <span className="tracking-wide font-bold text-purple-100">REGISTER NOW</span>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </ParallaxBannerLayer>

        
        {/* Soft Transition Gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent z-30" />
      </ParallaxBanner>
    </section>

    <div className="min-h-screen w-full relative">
    <div
      className="fixed inset-0 -z-10 opacity-50"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />


  <AboutSection />
    <TracksSection />
    <PrizesSection />
    <SponsorsSection />
    <SignUpSection />
    <TeamSection />
</div>

    
        </>
    )
}

export default MainPage