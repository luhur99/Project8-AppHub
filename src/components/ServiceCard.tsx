"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  link?: string;
  status?: string;
  icon: LucideIcon;
  gradient: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  link,
  status,
  icon: Icon,
  className,
  gradient
}) => {
  const isDisabled = status === "On Progress" || status === "Under Construction";
  const statusLabel = status === "Under Construction" ? "Under Construction" : "In Development";

  const Content = () => (
    <div className="relative z-10 h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 shadow-lg", gradient)}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <CardTitle className="text-xl font-bold text-white tracking-wide group-hover:text-blue-200 transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {description}
        </p>
        {isDisabled && (
          <div className="mt-auto pt-4 flex items-center gap-2">
             <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest animate-pulse">
              {statusLabel}
            </span>
          </div>
        )}
      </CardContent>
    </div>
  );

  return (
    <Card
      className={cn(
        "group relative h-full overflow-hidden bg-white/5 border-white/10 backdrop-blur-md transition-all duration-500",
        !isDisabled && "hover:border-white/20 hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)] hover:-translate-y-1",
        isDisabled && "opacity-70 cursor-not-allowed grayscale-[0.5]",
        className
      )}
    >
      {/* Glow Effect */}
      <div 
        className={cn(
          "absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[60px] opacity-0 transition-opacity duration-500 group-hover:opacity-20",
          gradient
        )} 
      />
      
      {isDisabled ? (
        <div className="h-full p-1">
          <Content />
        </div>
      ) : (
        <a href={link || "#"} target="_blank" rel="noopener noreferrer" className="block h-full p-1">
          <Content />
        </a>
      )}
    </Card>
  );
};

export default ServiceCard;