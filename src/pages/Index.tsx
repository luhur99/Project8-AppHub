"use client";

import React from 'react';
import ServiceCard from "@/components/ServiceCard";
import DailyVerse from "@/components/DailyVerse";
import { MadeWithDyad } = from "@/components/made-with-elmony";
import { Rocket, ShieldCheck, Settings, Lightbulb } from 'lucide-react';
import GalaxyBackground from "@/components/GalaxyBackground"; // Re-enable import, but component is now empty

const Index = () => {
  const services = [
    {
      title: "Operation Manager",
      description: "Streamline your operations with efficient management tools.",
      link: "https://luhur99.vercel.app/",
      icon: Settings,
      colorClass: "bg-gradient-to-br from-blue-600 to-purple-600",
    },
    {
      title: "Sales Funnel",
      description: "Optimize your sales process and convert more leads.",
      link: "https://sg-4f64cfd4-ec7d-47fc-aab7-ab2d727a.vercel.app/",
      icon: Rocket,
      colorClass: "bg-gradient-to-br from-green-500 to-teal-500",
    },
    {
      title: "Simcard Care",
      description: "Manage and care for your SIM cards with ease.",
      link: "https://sg-23f7a9c0-9625-4526-98d9-451cd87c.vercel.app/",
      icon: ShieldCheck,
      colorClass: "bg-gradient-to-br from-yellow-500 to-orange-500",
    },
    {
      title: "Smart Complain System",
      description: "An intelligent system to handle customer complaints efficiently.",
      status: "On Progress",
      icon: Lightbulb,
      colorClass: "bg-gradient-to-br from-red-500 to-pink-500",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden">
      <GalaxyBackground /> {/* Now imports an empty component */}

      <div className="relative z-10 text-center mb-12 mt-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
          Budi Karya Teknologi
        </h1>
        <p className="text-2xl md:text-3xl text-gray-200 font-light">
          Brand Technology
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full px-4 mb-16">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            link={service.link}
            status={service.status}
            icon={service.icon}
            colorClass={service.colorClass}
          />
        ))}
      </div>

      <DailyVerse />
      <MadeWithDyad />
    </div>
  );
};

export default Index;