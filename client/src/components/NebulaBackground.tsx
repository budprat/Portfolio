import React from 'react';

interface NebulaBackgroundProps {
  className?: string;
}

export default function NebulaBackground({ className = '' }: NebulaBackgroundProps) {
  return (
    <div className={`fixed inset-0 pointer-events-none -z-10 ${className}`}>
      {/* Purple nebula in top right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-500/5 via-purple-400/10 to-transparent blur-3xl transform rotate-45" />
      
      {/* Blue nebula in bottom left */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-500/5 via-blue-400/10 to-transparent blur-3xl transform -rotate-45" />
      
      {/* Pink accent in center right */}
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-pink-500/5 via-pink-400/5 to-transparent blur-3xl" />
      
      {/* Cyan accent in bottom center */}
      <div className="absolute bottom-1/4 left-1/3 w-[250px] h-[250px] rounded-full bg-gradient-to-br from-cyan-500/5 via-cyan-400/5 to-transparent blur-3xl" />
      
      {/* Grid background overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
    </div>
  );
}