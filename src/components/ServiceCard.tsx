"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Rocket, ShieldCheck, Settings, Lightbulb, LucideIcon } from 'lucide-react'; // Import LucideIcon

interface ServiceCardProps {
  title: string;
  description: string;
  link?: string;
  status?: string;
  icon: LucideIcon; // Changed from React.ElementType to LucideIcon
  className?: string;
  colorClass?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  link,
  status,
  icon: Icon,
  className,
  colorClass = "bg-blue-500"
}) => {
  const isDisabled = status === "On Progress";

  const cardContent = (
    <>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <Icon className={cn("h-8 w-8 text-white", colorClass)} />
      </CardHeader>
      <CardContent>
        <CardDescription className="text-white text-opacity-80">
          {description}
        </CardDescription>
        {isDisabled && (
          <p className="mt-4 text-sm font-semibold text-yellow-300">
            Status: {status}
          </p>
        )}
      </CardContent>
    </>
  );

  return (
    <Card
      className={cn(
        "relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105",
        colorClass,
        isDisabled ? "opacity-60 cursor-not-allowed" : "hover:shadow-xl",
        className
      )}
    >
      {isDisabled ? (
        <div className="p-6 text-white">
          {cardContent}
        </div>
      ) : (
        <Link to={link || "#"} target="_blank" rel="noopener noreferrer" className="block p-6 text-white">
          {cardContent}
        </Link>
      )}
    </Card>
  );
};

export default ServiceCard;