"use client";

import React from 'react';
import ServiceCard from "@/components/ServiceCard";
import DailyVerse from "@/components/DailyVerse";
import { MadeWithDyad } from "@/components/made-with-elmony";
import { Rocket, ShieldCheck, Settings, Lightbulb } from 'lucide-react';

const Index = () => {
  const services = [
    {
      title: "Operation Manager",
      description: "Streamline operations with next-gen management tools.",
      link: "https://optimabkt.vercel.app/", // Updated link
      icon: Settings,
      gradient: "bg-gradient-to-br from-blue-600 to-indigo-600",
    },
    {
      title: "Sales Funnel",
      description: "Optimize sales processes and convert more leads with AI.",
      link: "https://sg-4f64cfd4-ec7d-47fc-aab7-ab2d727a.vercel.app/",
      icon: Rocket,
      gradient: "bg-gradient-to-br from-emerald-500 to-teal-500",
    },
    {
      title: "Simcard Care",
      description: "Manage and monitor your SIM card lifecycle efficiently.",
      link: "https://sg-23f7a9c0-9625-4526-98d9-451cd87c.vercel.app/",
      icon: ShieldCheck,
      gradient: "bg-gradient-to-br from-amber-500 to-orange-500",
    },
    {
      title: "Smart Complain",
      description: "Intelligent neural system to handle customer inquiries.",
      link: "https://customercarebkt.vercel.app/",
      icon: Lightbulb,
      gradient: "bg-gradient-to-br from-rose-500 to-pink-600",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center p-6 overflow-hidden bg-[#030712] selection:bg-blue-500/30">
      
      {/* Background Grid & Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-7xl pt-12 pb-12">
        
        {/* Daily Verse at the Top */}
        <div className="mb-16 w-full">
          <DailyVerse />
        </div>

        {/* Header Section */}
        <div className="text-center mb-20 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 tracking-tight drop-shadow-2xl">
            BUDI KARYA <br /> TEKNOLOGI
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide max-w-2xl mx-auto">
            Architecting the future of digital infrastructure.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4 mb-24">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
            />
          ))}
        </div>

        {/* System Status at Bottom */}
        <div className="mt-auto flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-semibold text-blue-200 tracking-widest uppercase">
              System v2.0 Online
            </span>
          </div>

          <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
              <MadeWithDyad />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;