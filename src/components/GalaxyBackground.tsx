"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const RotatingStars = () => {
  const starsRef = useRef<any>();

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0005;
      starsRef.current.rotation.x += 0.0002;
    }
  });

  return <Stars ref={starsRef} radius={200} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />;
};

const GalaxyBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }} events={false}>
        <ambientLight intensity={0.5} />
        <RotatingStars />
      </Canvas>
    </div>
  );
};

export default GalaxyBackground;