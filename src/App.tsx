import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'motion/react';
import { 
  Instagram, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  Sparkles, 
  Palette, 
  Camera, 
  MessageSquare, 
  TrendingUp,
  Layout,
  ExternalLink,
  ChevronDown,
  X,
  Menu,
  Play,
  Award,
  Globe
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 px-8 md:px-16 flex justify-between items-center ${
          isScrolled || isMenuOpen ? 'bg-luxury-white/90 backdrop-blur-md border-b border-brick-red/5' : 'bg-transparent'
        }`}
      >
        <div className="text-[10px] uppercase tracking-[0.5em] font-bold text-brick-red">
          Rupa Mahato
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-12 text-brick-red">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ delay: 0.1 * i + 0.5, duration: 0.5 }}
              whileHover={{ opacity: 1, y: -2 }}
              className="text-[10px] uppercase font-black tracking-widest transition-all"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-brick-red p-2 z-[60]"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[55] bg-luxury-white flex flex-col items-center justify-center p-8 md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-serif italic text-brick-red hover:text-deep-brick transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Footer Socials */}
            <div className="absolute bottom-12 flex gap-8">
              {[
                { icon: Instagram, href: "https://www.instagram.com/sundartasevaofficial?igsh=MWpxOGd3c3V6ZDJ1dw==" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/rupa-mahato-920623400" },
                { icon: Mail, href: "mailto:rupamah1405@gmail.com" }
              ].map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  whileHover={{ opacity: 1, scale: 1.1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-brick-red transition-all"
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
            
            {/* Background Texture for Mobile Menu */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brick-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brick-red/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  const word = "PORTFOLIO";
  const letters = word.split("");

  const letterVariants = {
    hidden: (i: number) => {
      const directions = [
        { x: -200, y: -200 }, // Top-left
        { x: 200, y: -200 },  // Top-right
        { x: -200, y: 200 },  // Bottom-left
        { x: 200, y: 200 },   // Bottom-right
        { x: 0, y: -300 },    // Top
        { x: 0, y: 300 },     // Bottom
        { x: -300, y: 0 },    // Left
        { x: 300, y: 0 }      // Right
      ];
      const dir = directions[i % directions.length];
      return {
        opacity: 0,
        x: dir.x,
        y: dir.y,
        scale: 0.5,
        filter: "blur(10px)",
      };
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 80,
        duration: 1.5,
      },
    },
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-luxury-white">
      {/* Background Cinematic Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-brick-red/[0.02] rounded-full blur-[140px] pointer-events-none" />
      
      {/* Floating particles - Fixed to prevent layout tremor during scroll */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
             key={i}
             className="absolute w-1 h-1 bg-brick-red/5 rounded-full"
             style={{
               left: `${Math.random() * 100}%`,
               top: `${Math.random() * 100}%`,
             }}
             animate={{
               y: [0, -100, 0],
               opacity: [0, 0.4, 0]
             }}
             transition={{
               duration: Math.random() * 10 + 15,
               repeat: Infinity,
               ease: "easeInOut"
             }}
          />
        ))}
      </div>

      <div className="flex flex-col items-center text-center z-10 px-6">
        <motion.h1 
          className="text-[14vw] md:text-[12vw] font-black text-brick-red leading-none tracking-tighter mb-2 flex flex-wrap justify-center overflow-hidden"
        >
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
           className="flex flex-col items-center -mt-6 md:-mt-12"
         >
           <motion.span 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
             className="font-serif italic text-7xl md:text-[10vw] text-deep-brick mb-6 block leading-none"
           >
             Rupa
           </motion.span>
           <motion.div 
             initial={{ opacity: 0, width: 0 }}
             animate={{ opacity: 1, width: 64 }}
             transition={{ delay: 1.4, duration: 1 }}
             className="h-px bg-brick-red/20 mb-8" 
           />
           <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1.6, duration: 1.2 }}
             className="text-[10px] md:text-xs uppercase tracking-[0.6em] font-black text-brick-red/60 max-w-2xl px-4 leading-relaxed text-center"
           >
             Digital Marketing Executive & Creative Strategist
           </motion.p>
         </motion.div>
       </div>

       {/* Refined Scroll Indicator */}
       <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1.8, duration: 1 }}
         className="absolute bottom-12 left-0 right-0 px-8 md:px-16 flex flex-col items-center"
       >
         <motion.button 
           onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
           className="group flex flex-col items-center gap-4"
         >
           <div className="w-6 h-10 border border-brick-red/20 rounded-full flex justify-center p-1 relative overflow-hidden transition-all duration-500 group-hover:border-brick-red">
             <motion.div 
               animate={{ y: [0, 16, 0] }}
               transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
               className="w-0.5 h-2 bg-brick-red/40 group-hover:bg-brick-red rounded-full"
             />
           </div>
           <span className="text-[7px] uppercase tracking-[0.5em] font-black text-brick-red/20 group-hover:text-brick-red/40 transition-colors">Discover</span>
         </motion.button>
       </motion.div>
    </section>
  );
};

const SectionHeader = ({ title, subtitle, align = 'center' }: { title: string; subtitle: string; align?: 'left' | 'center' }) => (
  <div className={`mb-24 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <motion.span 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="text-[10px] uppercase tracking-[0.5em] font-bold text-deep-brick block mb-4"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-6xl font-serif text-brick-red"
    >
      {title}
    </motion.h2>
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 100 }}
      className={`h-px bg-brick-red mt-8 opacity-20 ${align === 'center' ? 'mx-auto' : ''}`} 
    />
  </div>
);

const About = () => (
  <section id="about" className="pt-16 pb-24 px-8 md:px-16 bg-luxury-white overflow-hidden scroll-mt-20">
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="mb-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1.8, 
              ease: [0.22, 1, 0.36, 1],
              scale: { duration: 0.4 }
            }}
            className="text-[10vw] md:text-[8vw] font-black text-brick-red leading-none tracking-tighter mb-8 uppercase inline-block cursor-default"
          >
            ABOUT ME
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -5 }}
          className="relative group p-12 bg-white/40 backdrop-blur-sm border border-brick-red/5 rounded-[3rem] hover:bg-white hover:shadow-[0_40px_100px_-15px_rgba(143,20,2,0.1)] transition-all duration-700"
        >
          <div className="space-y-10 font-cormorant text-2xl text-brick-red/80 leading-relaxed max-w-3xl mx-auto relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I am Rupa Mahato, an aspiring Digital Marketing Executive with a specialized focus on brand aesthetics and social media storytelling. My perspective is rooted in the belief that digital presence should be both physically beautiful and strategically sound.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              My creative journey is deeply personal—starting with experimental <span className="text-deep-brick italic">UGC-style content</span> for my own pages, where I refine my skills in reel ideation and aesthetic layout design.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              My experience bridges personal practice with industry exposure. I provided social media creative support at the agency <span className="font-bold text-brick-red/90 font-serif">Yours Digitally</span> and delivered high-impact carousel and story designs for <span className="font-bold underline decoration-brick-red/20 underline-offset-8 font-serif">NS Studios</span>.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              className="text-sm font-sans uppercase tracking-[0.3em] font-black text-brick-red/30 italic pt-6"
            >
              I turn subtle concepts into cinematic digital realities.
            </motion.p>
          </div>
          
          {/* Animated Glow in About Card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brick-red/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-y-1/2 translate-x-1/2" />
        </motion.div>
      </div>
  </section>
);

const Projects = () => {
  const projects = [
    { 
      title: "UGC Brand Stories", 
      desc: "Authentic branding assets through specialized UGC reels and cinematic digital narratives.",
      isShowcase: true,
      link: "https://www.instagram.com/reel/DONM_pSEhnQ/?igsh=bmp6cmt0d3V4ZnNs",
      buttonText: "View Reel",
      coverImage: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=600&h=1000",
      badge: "Spec Showcase",
      hasPlayIcon: true
    },
    { 
      title: "Instagram Story Design", 
      desc: "Aesthetic story layouts that prioritize brand consistency and drive active engagement through specialized Canva architectures.",
      isShowcase: true,
      link: "https://canva.link/c00cjosr7911n8q",
      buttonText: "View Design",
      coverImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600&h=1000",
      badge: "Story Showcase",
      hasPlayIcon: false
    },
    { 
      title: "Carousel Post Design", 
      desc: "Multi-slide Canva architecture designed for saveable, high-value educational content with a premium luxury feel.",
      isShowcase: true,
      link: "https://canva.link/t7kpdz6qi9e1auz",
      buttonText: "View Design",
      coverImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600&h=1000",
      badge: "Carousel Showcase",
      hasPlayIcon: false
    },
    { 
      title: "Reel Content Narrative", 
      desc: "Creative concepts for Beauty Reels, UGC, Storytelling, and Lifestyle trends designed to drive high-intent engagement.",
      isShowcase: true,
      link: "https://www.instagram.com/reel/DNQufn7yPKW/?igsh=MWZubmhiem0yN2dzeQ==",
      buttonText: "View Reel",
      coverImage: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=600&h=1000",
      badge: "Reel Showcase",
      hasPlayIcon: true
    },
    { 
      title: "Campaign Strategic Build", 
      desc: "Comprehensive content planning and engagement for the Summer Champ 2026 Campaign, focusing on creative lifestyle.",
      isShowcase: true,
      link: "#contact",
      coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=1000",
      hasPlayIcon: false,
      projectDetails: {
        title: "Summer Champ 2026",
        highlights: [
          "Creative Art & Craft", "Fun Games & Challenges",
          "Dance & Talent Showcase", "Skill Building Activities",
          "Exciting Rewards & Surprises"
        ],
        strategy: [
          "Kids Summer Campaign", "Instagram Post Strategy",
          "Creative Caption Writing", "Audience Engagement",
          "Social Media Ideas", "Promotional Content"
        ]
      }
    },
  ];

  return (
    <section id="projects" className="pt-16 pb-24 px-8 md:px-16 bg-luxury-white scroll-mt-20">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1.8, 
              ease: [0.22, 1, 0.36, 1],
              scale: { duration: 0.4 }
            }}
            className="text-[10vw] md:text-[8vw] font-black text-brick-red leading-none tracking-tighter mb-8 uppercase inline-block cursor-default"
          >
            PROJECTS
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 text-left">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => {
                if(project.isShowcase && project.link) {
                  if (project.link.startsWith('#')) {
                    document.getElementById(project.link.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.open(project.link, '_blank');
                  }
                }
              }}
              className={`group flex flex-col ${project.isShowcase ? 'cursor-pointer' : ''}`}
            >
              <div className="w-12 h-px bg-brick-red/20 mb-8 group-hover:w-full transition-all duration-700" />
              
              {project.isShowcase && (
                <div className="relative mb-12 aspect-[9/16] max-h-[480px] w-full bg-beige/10 overflow-hidden border border-brick-red/5 group/ugc rounded-3xl shadow-xl hover:shadow-[0_40px_100px_-15px_rgba(143,20,2,0.3)] hover:ring-2 hover:ring-brick-red/20 transition-all duration-1000">
                   <motion.img 
                     src={project.coverImage} 
                     alt={`${project.title} Preview`}
                     referrerPolicy="no-referrer"
                     className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover/ugc:scale-125"
                   />
                   
                   <div className="absolute inset-0 bg-brick-red/20 group-hover/ugc:bg-brick-red/10 transition-colors duration-700" />

                   {/* Custom Strategy Overlay for Social Media Marketing & Campaigns */}
                   {(project as any).projectDetails && (
                     <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-8 opacity-0 group-hover/ugc:opacity-100 transition-all duration-700 flex flex-col justify-center overflow-y-auto">
                       <h4 className="text-[10px] uppercase font-black tracking-[0.4em] text-brick-red/40 mb-4 border-b border-brick-red/10 pb-2">{(project as any).projectDetails.title}</h4>
                       
                       <div className="mb-6">
                         <p className="text-[8px] uppercase font-bold tracking-[0.2em] text-brick-red/30 mb-3">Campaign Highlights</p>
                         <div className="flex flex-wrap gap-2">
                           {(project as any).projectDetails.highlights.map((item: string, hi: number) => (
                             <span key={hi} className="px-3 py-1.5 bg-brick-red/5 rounded-full text-[8px] uppercase font-black tracking-widest text-brick-red/80 border border-brick-red/10">
                               {item}
                             </span>
                           ))}
                         </div>
                       </div>

                       <div>
                         <p className="text-[8px] uppercase font-bold tracking-[0.2em] text-brick-red/30 mb-3">Marketing Strategy</p>
                         <div className="grid grid-cols-1 gap-2.5">
                           {(project as any).projectDetails.strategy.map((skill: string, si: number) => (
                             <motion.div 
                               key={si} 
                               initial={{ x: -10, opacity: 0 }}
                               whileInView={{ x: 0, opacity: 1 }}
                               transition={{ delay: si * 0.05 }}
                               className="flex items-center gap-3"
                             >
                               <div className="w-1 h-1 rounded-full bg-brick-red" />
                               <span className="text-[9px] uppercase font-bold tracking-widest text-brick-red/70">{skill}</span>
                             </motion.div>
                           ))}
                         </div>
                       </div>
                       
                       <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-brick-red/10 rounded-full blur-3xl pointer-events-none" />
                     </div>
                   )}
                   
                   <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     {project.hasPlayIcon && (
                       <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 flex items-center justify-center opacity-0 group-hover/ugc:opacity-100 scale-90 group-hover/ugc:scale-100 transition-all duration-700">
                          <Play className="text-white fill-white ml-1" size={28} />
                       </div>
                     )}
                   </div>

                   {/* Glassmorphism Badge */}
                   {project.badge && (
                     <div className="absolute top-6 left-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                       <span className="text-[8px] uppercase tracking-widest font-black text-white">{project.badge}</span>
                     </div>
                   )}
                   
                   {/* Cinematic Scanning Animation */}
                   <motion.div 
                     className="absolute inset-x-0 top-0 h-[2px] bg-white/40 z-10 blur-[1px] opacity-0 group-hover/ugc:opacity-100"
                     animate={{ translateY: ['0px', '480px', '0px'] }}
                     transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                   />
                   
                   {project.buttonText && (
                     <div className="absolute bottom-8 left-8 right-8">
                       <motion.button
                         whileHover={{ scale: 1.02 }}
                         whileTap={{ scale: 0.98 }}
                         className="w-full bg-white text-brick-red hover:bg-brick-red hover:text-white px-6 py-5 text-[10px] uppercase font-black tracking-[0.3em] flex items-center justify-center gap-3 shadow-2xl rounded-xl transition-all duration-500"
                       >
                         {project.buttonText} <ExternalLink size={14} />
                       </motion.button>
                     </div>
                   )}
                </div>
              )}

              <h3 className="text-2xl font-serif text-brick-red mb-6">{project.title}</h3>
              <p className="text-sm text-brick-red/60 leading-relaxed font-light mb-10">{project.desc}</p>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  if(project.isShowcase && project.link) window.open(project.link, '_blank');
                  else document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-[10px] uppercase tracking-widest font-black text-brick-red/40 group-hover:text-brick-red transition-colors flex items-center gap-3 mt-auto"
              >
                {project.isShowcase ? "View Project Details" : "Connect To Discuss"} 
                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: "Content Strategy",
      skills: ["Brand Narrative", "UGC Storytelling", "Reel Ideation", "Visual Identity"]
    },
    {
      title: "Digital Marketing",
      skills: ["Instagram Strategy", "Audience Growth", "Campaign Build", "Engagement Optimization"]
    },
    {
      title: "Technical Stack",
      skills: ["Canva Architecture", "Analytics Tracking", "Meta Business Suite", "CapCut Editing"]
    }
  ];

  return (
    <section id="skills" className="pt-16 pb-24 px-8 md:px-16 bg-beige/5 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1.8, 
              ease: [0.22, 1, 0.36, 1],
              scale: { duration: 0.4 }
            }}
            className="text-[10vw] md:text-[8vw] font-black text-brick-red leading-none tracking-tighter mb-8 uppercase inline-block cursor-default"
          >
            SKILLS
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="relative group p-12 border border-brick-red/5 bg-luxury-white/50 backdrop-blur-sm rounded-[2.5rem] hover:bg-white hover:shadow-[0_40px_100px_-15px_rgba(143,20,2,0.1)] hover:ring-2 hover:ring-brick-red/10 transition-all duration-700"
            >
              <h3 className="text-[10px] uppercase font-black tracking-[0.4em] text-brick-red/40 mb-10 border-b border-brick-red/10 pb-4">
                {cat.title}
              </h3>
              <div className="space-y-6">
                {cat.skills.map((skill, si) => (
                  <motion.div 
                    key={si} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + si * 0.05, duration: 0.5 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-brick-red/20 group-hover:bg-brick-red group-hover:scale-125 transition-all duration-500" />
                    <span className="text-lg font-serif italic text-brick-red/70 group-hover:text-brick-red group-hover:translate-x-1 transition-all">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              {/* Cinematic Scan effect for skills */}
              <motion.div 
                className="absolute inset-x-0 top-0 h-[1px] bg-brick-red/20 z-10 opacity-0 group-hover:opacity-100"
                animate={{ translateY: ['0px', '400px', '0px'] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    { 
      date: "2026", 
      title: "Digital Marketing Intern", 
      company: "Thesis Edventure", 
      detail: "Worked on digital marketing related tasks including social media content understanding, marketing support, and creative campaign exposure during internship experience.",
      icon: Award
    },
    { 
      date: "2026", 
      title: "Digital Marketing Executive", 
      company: "Yours Digitally", 
      detail: "Worked with a digital marketing agency for one week on social media related tasks, creative content coordination, and marketing activities.",
      icon: MessageSquare
    },
    { 
      date: "2025 – Present", 
      title: "UGC Content Creator", 
      company: "Personal Practice", 
      detail: "Started creating UGC content in 2025 and currently continuing work on beauty, skincare, lifestyle, reels, and creative social media content.",
      icon: Camera
    }
  ];

  return (
    <section id="experience" className="pt-16 pb-24 px-8 md:px-16 bg-luxury-white relative overflow-hidden scroll-mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1.8, 
              ease: [0.22, 1, 0.36, 1],
              scale: { duration: 0.4 }
            }}
            className="text-[10vw] md:text-[8vw] font-black text-brick-red leading-none tracking-tighter mb-8 uppercase inline-block cursor-default"
          >
            EXPERIENCE
          </motion.h2>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
              className="relative group p-12 bg-beige/5 border border-brick-red/5 rounded-[2.5rem] hover:bg-white hover:shadow-[0_40px_100px_-15px_rgba(143,20,2,0.15)] hover:ring-2 hover:ring-brick-red/10 transition-all duration-700 max-w-3xl mx-auto overflow-hidden"
            >
              <span className="font-serif italic text-3xl text-deep-brick block mb-6">{exp.date}</span>
              
              <div className="flex flex-col items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full border border-brick-red/10 flex items-center justify-center text-brick-red pb-1 bg-white mb-2 shadow-sm group-hover:scale-110 group-hover:bg-brick-red group-hover:text-white transition-all duration-500">
                   <exp.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-widest text-brick-red">{exp.title}</h3>
                <h4 className="text-[10px] font-bold text-brick-red/40 uppercase tracking-[0.4em]">{exp.company}</h4>
              </div>

              <div className="w-12 h-px bg-brick-red/10 mx-auto mb-8 group-hover:w-24 transition-all duration-700" />
              
              <p className="text-lg text-brick-red/70 leading-relaxed font-medium max-w-2xl mx-auto">{exp.detail}</p>
              
              <div className="mt-10 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0">
                <div className="w-6 h-px bg-brick-red/30" />
                <span className="text-[9px] uppercase font-black tracking-[0.3em] text-brick-red/40 italic">Creative Impact</span>
                <div className="w-6 h-px bg-brick-red/30" />
              </div>

              {/* Scanning bar */}
              <motion.div 
                className="absolute inset-x-0 bottom-0 h-[2px] bg-brick-red/10 z-10 opacity-0 group-hover:opacity-100"
                animate={{ translateY: ['0px', '-400px', '0px'] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle Background Textures */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brick-red/5 to-transparent -translate-y-1/2 pointer-events-none" />
    </section>
  );
};

const Education = () => {
  const education = [
    {
      year: "2020 – 2022",
      degree: "M.A. in English Literature",
      desc: "An advanced exploration of literary theory and creative narratives, enriching my strategic approach to digital storytelling and brand communication."
    },
    {
      year: "2017 – 2020",
      degree: "B.A. in English Honours",
      desc: "Foundational studies in language and literature, developing the critical thinking and articulate expression essential for content strategy."
    }
  ];

  return (
    <section id="education" className="pt-16 pb-24 px-8 md:px-16 bg-beige/5 relative overflow-hidden scroll-mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1.8, 
              ease: [0.22, 1, 0.36, 1],
              scale: { duration: 0.4 }
            }}
            className="text-[10vw] md:text-[8vw] font-black text-brick-red leading-none tracking-tighter mb-8 uppercase inline-block cursor-default"
          >
            EDUCATION
          </motion.h2>
        </div>
        
        <div className="space-y-16">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative group p-12 bg-white/50 backdrop-blur-sm border border-brick-red/5 rounded-[2rem] hover:bg-white hover:shadow-[0_40px_100px_-15px_rgba(143,20,2,0.1)] hover:ring-2 hover:ring-brick-red/10 transition-all duration-700 max-w-2xl mx-auto overflow-hidden"
            >
              <span className="text-[10px] uppercase font-black tracking-[0.4em] text-brick-red/40 mb-4 block">
                {edu.year}
              </span>
              
              <h3 className="font-serif text-3xl text-brick-red mb-6 leading-tight group-hover:translate-x-2 transition-transform duration-500">
                {edu.degree}
              </h3>
              
              <p className="text-lg font-medium text-brick-red/60 leading-relaxed max-w-md mx-auto">
                {edu.desc}
              </p>
              
              <div className="mt-8 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-8 h-px bg-brick-red/40" />
                <span className="text-[8px] uppercase font-black tracking-widest text-brick-red/40 italic">Academic Excellence</span>
                <div className="w-8 h-px bg-brick-red/40" />
              </div>

              {/* Decorative scan line */}
              <motion.div 
                className="absolute inset-y-0 left-0 w-[2px] bg-brick-red/10 group-hover:bg-brick-red/20 opacity-0 group-hover:opacity-100"
                animate={{ translateX: ['0px', '600px', '0px'] }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brick-red/[0.02] rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brick-red/[0.02] rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="pt-16 pb-24 px-8 md:px-16 bg-luxury-white relative overflow-hidden scroll-mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1.8, 
              ease: [0.22, 1, 0.36, 1],
              scale: { duration: 0.4 }
            }}
            className="text-[10vw] md:text-[8vw] font-black text-brick-red leading-none tracking-tighter mb-8 uppercase inline-block cursor-default"
          >
            CONTACT
          </motion.h2>
        </div>

        <p className="font-cormorant text-2xl text-brick-red/70 mb-20 leading-relaxed max-w-2xl mx-auto">
          I am currently exploring new professional horizons and am open to connecting with visionary teams. Whether it's a career opportunity, a professional inquiry, or an industry discussion, I look forward to hearing from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: Mail, value: "rupamah1405@gmail.com", label: "Email", href: "mailto:rupamah1405@gmail.com" },
            { icon: Instagram, value: "@sundartaseva", label: "Instagram", href: "https://www.instagram.com/sundartasevaofficial?igsh=MWpxOGd3c3V6ZDJ1dw==" },
            { icon: Linkedin, value: "Rupa Mahato", label: "LinkedIn", href: "https://www.linkedin.com/in/rupa-mahato-920623400" },
          ].map((link, i) => (
            <motion.a 
              key={i}
              href={link.href}
              target={link.href.startsWith('mailto') ? '_self' : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer flex flex-col items-center no-underline relative bg-white/40 backdrop-blur-sm border border-brick-red/5 p-10 rounded-[2.5rem] hover:bg-white hover:shadow-[0_40px_100px_-15px_rgba(143,20,2,0.15)] transition-all duration-700"
            >
              <div className="w-20 h-20 rounded-full border border-brick-red/10 flex items-center justify-center mb-6 group-hover:bg-brick-red group-hover:text-white group-hover:shadow-[0_20px_50px_-10px_rgba(143,20,2,0.4)] transition-all duration-500 bg-white relative z-10">
                <link.icon size={28} strokeWidth={1.5}/>
              </div>
              <p className="text-[10px] uppercase font-black opacity-30 tracking-[0.3em] mb-2 group-hover:opacity-60 transition-opacity">{link.label}</p>
              <p className="text-lg font-serif italic text-brick-red group-hover:text-deep-brick transition-colors break-all text-center">{link.value}</p>
              
              {/* Subtle hover glow ring */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-brick-red/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const text = "THANK YOU";
  const letters = text.split("");

  const letterVariants = {
    hidden: (i: number) => {
      const directions = [
        { x: -200, y: -200 }, // Top-left
        { x: 200, y: -200 },  // Top-right
        { x: -200, y: 200 },  // Bottom-left
        { x: 200, y: 200 },   // Bottom-right
        { x: 0, y: -300 },    // Top
        { x: 0, y: 300 },     // Bottom
        { x: -300, y: 0 },    // Left
        { x: 300, y: 0 }      // Right
      ];
      const dir = directions[i % directions.length];
      return {
        opacity: 0,
        x: dir.x,
        y: dir.y,
        scale: 0.5,
        filter: "blur(10px)",
      };
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 80,
        duration: 1.5,
      },
    },
  };

  return (
    <footer className="py-24 px-8 border-t border-brick-red/5 bg-luxury-white text-brick-red">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div 
          className="font-serif text-5xl md:text-7xl font-bold tracking-tighter flex flex-wrap justify-center overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-luxury-white selection:bg-brick-red selection:text-white">
      {/* Visual Scroll Progress */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-brick-red z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <TechnicalSkills />
      <Contact />
      <Footer />
    </div>
  );
}

