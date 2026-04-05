import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import heroImg01 from '../assets/hero_img_01.jpg';
import heroImg02 from '../assets/hero_img_02.jpeg';
import heroImg03 from '../assets/hero_img_03.JPG';

export const Hero: React.FC = () => {
  const scrollToShop = () => {
    const shopSection = document.getElementById('shop');
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Split */}
      <div className="absolute inset-0 flex flex-col lg:flex-row">
        <div className="w-full lg:w-[45%] h-1/2 lg:h-full bg-[#F16B14]"></div>
        <div className="w-full lg:w-[55%] h-1/2 lg:h-full bg-[#17174B] relative">
          {/* Wave/Curve effect between colors */}
          <div className="absolute top-0 left-0 h-full w-32 bg-[#F16B14] -translate-x-1/2 hidden lg:block" style={{ borderRadius: '0 100% 100% 0 / 0 50% 50% 0' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 py-12">
          {/* Left Content (on Orange) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-[#17174B] uppercase tracking-tighter">
              GET THE <br />
              NEXT LEVEL <br />
              GADGETS
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-10">
              <button 
                onClick={scrollToShop}
                className="btn bg-[#17174B] text-white border-none btn-lg rounded-xl px-10 hover:bg-[#17174B]/90 flex items-center gap-2"
              >
                <div className="bg-[#F16B14] p-1 rounded">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
                <span className="uppercase font-bold tracking-widest text-sm">Shop Now</span>
              </button>
            </div>
            <p className="mt-4 text-[#17174B] font-medium opacity-80">www.nexligadget.com</p>
          </motion.div>

          {/* Right Content (on Navy) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center relative"
          >
            <div className="relative">
              {/* Main Gadget (Watch) */}
              <motion.img 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                src={heroImg01} 
                className="w-64 md:w-80 rounded-3xl shadow-2xl relative z-20" 
                referrerPolicy="no-referrer"
                alt="Smart Watch"
              />
              
              {/* Secondary Gadgets (Controller & Headphones) */}
              <motion.img 
                animate={{ x: [0, 10, 0], y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                src={heroImg02} 
                className="absolute -bottom-30 -left-40 w-32 md:w-48 rounded-2xl shadow-xl z-30 hidden md:block" 
                referrerPolicy="no-referrer"
                alt="Controller"
              />
              <motion.img 
                animate={{ x: [0, -10, 0], y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                src={heroImg03} 
                className="absolute -bottom-40 -right-40 w-32 md:w-48 rounded-2xl shadow-xl z-10 hidden md:block" 
                referrerPolicy="no-referrer"
                alt="Headphones"
              />

              {/* Lightning/Spark elements */}
              <div className="absolute -top-10 -right-10 text-primary animate-pulse">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <div className="absolute top-20 -left-10 text-primary animate-pulse delay-700">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
