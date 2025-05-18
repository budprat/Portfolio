import { useEffect, useRef } from 'react';

interface ConstellationProps {
  className?: string;
}

export default function Constellation({ className = '' }: ConstellationProps) {
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
    
    // Create constellation points
    const points: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
    const pointCount = 20; // Number of constellation points
    
    for (let i = 0; i < pointCount; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.1, // Slow movement
        vy: (Math.random() - 0.5) * 0.1,
        size: Math.random() * 2 + 1
      });
    }
    
    // Function to draw lines between points within a certain distance
    const drawLines = () => {
      const maxDistance = 200; // Maximum distance to draw a line between points
      
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            // Calculate opacity based on distance
            const opacity = 1 - (distance / maxDistance);
            
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = `rgba(124, 58, 237, ${opacity * 0.2})`; // Purple color with variable opacity
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };
    
    // Animation loop
    let animationFrameId: number;
    
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw points
      points.forEach(point => {
        // Update position
        point.x += point.vx;
        point.y += point.vy;
        
        // Wrap around edges
        if (point.x < 0) point.x = canvas.width;
        if (point.x > canvas.width) point.x = 0;
        if (point.y < 0) point.y = canvas.height;
        if (point.y > canvas.height) point.y = 0;
        
        // Draw point
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(124, 58, 237, 0.5)'; // Purple color
        ctx.fill();
      });
      
      // Draw lines between points
      drawLines();
      
      animationFrameId = window.requestAnimationFrame(render);
    };
    
    render();
    
    // Cleanup
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed top-0 left-0 w-full h-full pointer-events-none -z-15 ${className}`}
    />
  );
}