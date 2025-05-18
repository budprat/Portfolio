import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SpaceBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate star positions
  const starCount = 50;
  const stars = Array.from({ length: starCount }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5
  }));

  return (
    <div className="space-bg fixed inset-0 -z-20">
      {/* Stars */}
      <div className="stars">
        {stars.map(star => (
          <div 
            key={star.id}
            className="star"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: star.top,
              left: star.left,
              animationDelay: `${star.delay}s`
            }}
          />
        ))}
      </div>

      {/* Nebulae */}
      <motion.div 
        className="nebula nebula-1"
        style={{ 
          x: mousePosition.x * -20,
          y: mousePosition.y * -20
        }}
      />
      <motion.div 
        className="nebula nebula-2"
        style={{ 
          x: mousePosition.x * 20,
          y: mousePosition.y * 20
        }}
      />
      <motion.div 
        className="nebula nebula-3"
        style={{ 
          x: mousePosition.x * -30,
          y: mousePosition.y * -30
        }}
      />

      {/* Shooting stars - appear occasionally */}
      <div 
        className="shooting-star"
        style={{ 
          top: '15%', 
          left: '10%', 
          animationDelay: '3s'
        }}
      />
      <div 
        className="shooting-star"
        style={{ 
          top: '60%', 
          left: '70%', 
          animationDelay: '8s'
        }}
      />

      {/* Space grid overlay */}
      <div className="space-grid" />
    </div>
  );
}