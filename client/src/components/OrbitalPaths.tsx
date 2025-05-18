import { useEffect, useRef } from 'react';

interface OrbitalPathsProps {
  className?: string;
}

export default function OrbitalPaths({ className = '' }: OrbitalPathsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Handle resize to make canvas full screen
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Create orbital paths
    const orbits = [
      {
        centerX: canvas.width * 0.3,
        centerY: canvas.height * 0.2,
        radius: 80,
        rotation: 0,
        rotationSpeed: 0.0005,
        color: 'rgba(124, 58, 237, 0.15)' // Purple
      },
      {
        centerX: canvas.width * 0.7,
        centerY: canvas.height * 0.8,
        radius: 120,
        rotation: 0,
        rotationSpeed: 0.0003,
        color: 'rgba(59, 130, 246, 0.15)' // Blue
      },
      {
        centerX: canvas.width * 0.8,
        centerY: canvas.height * 0.3,
        radius: 100,
        rotation: 0,
        rotationSpeed: 0.0007,
        color: 'rgba(236, 72, 153, 0.15)' // Pink
      }
    ];
    
    // Animation loop
    let animationFrameId: number;
    
    const render = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw orbits
      orbits.forEach(orbit => {
        // Update rotation
        orbit.rotation += orbit.rotationSpeed * timestamp;
        
        // Draw orbit path
        ctx.beginPath();
        ctx.ellipse(
          orbit.centerX,
          orbit.centerY,
          orbit.radius,
          orbit.radius * 0.7, // Make it slightly elliptical
          Math.PI / 4, // Rotation of the ellipse
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = orbit.color;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Draw orbital object
        const x = orbit.centerX + Math.cos(orbit.rotation) * orbit.radius;
        const y = orbit.centerY + Math.sin(orbit.rotation) * orbit.radius * 0.7;
        
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = orbit.color.replace('0.15', '0.6'); // More opaque for the object
        ctx.fill();
        
        // Draw glow effect
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 15);
        gradient.addColorStop(0, orbit.color.replace('0.15', '0.4'));
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.beginPath();
        ctx.arc(x, y, 15, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });
      
      animationFrameId = window.requestAnimationFrame(render);
    };
    
    animationFrameId = window.requestAnimationFrame(render);
    
    // Cleanup
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed top-0 left-0 w-full h-full pointer-events-none -z-10 ${className}`}
    />
  );
}