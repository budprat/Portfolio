import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
}

const colors = [
  "rgba(193, 122, 94, 0.6)", // Terracotta (primary)
  "rgba(125, 140, 117, 0.5)", // Sage green (secondary)
  "rgba(148, 167, 174, 0.4)", // Dusty blue (accent)
  "rgba(230, 221, 198, 0.3)", // Soft sand
];

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, moving: false });
  const animationFrameRef = useRef<number>(0);
  const dimensionsRef = useRef({ width: 0, height: 0 });

  // Initialize the canvas and particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateDimensions = () => {
      if (!canvas || !canvas.parentElement) return;
      
      const { width, height } = canvas.parentElement.getBoundingClientRect();
      dimensionsRef.current = { width, height };
      canvas.width = width;
      canvas.height = height;
      
      // Create particles based on the canvas size
      const particleCount = Math.floor((width * height) / 15000); // Adjust density here
      
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(createParticle(width, height));
      }
    };

    updateDimensions();
    
    // Handle window resize
    window.addEventListener("resize", updateDimensions);
    
    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        moving: true
      };
      
      // Reset the mouse movement flag after a period of inactivity
      setTimeout(() => {
        mouseRef.current.moving = false;
      }, 100);
    };
    
    window.addEventListener("mousemove", handleMouseMove);

    // Start the animation loop
    const animate = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      
      ctx.clearRect(0, 0, dimensionsRef.current.width, dimensionsRef.current.height);
      
      const particles = particlesRef.current;
      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Boundary checking - wrap around
        if (particle.x < 0) particle.x = dimensionsRef.current.width;
        if (particle.x > dimensionsRef.current.width) particle.x = 0;
        if (particle.y < 0) particle.y = dimensionsRef.current.height;
        if (particle.y > dimensionsRef.current.height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace("0.6", particle.opacity.toString());
        ctx.fill();
        
        // Connect particles within distance
        connectParticles(ctx, particle, particles, 150);

        // Mouse interaction
        if (mouseRef.current.moving) {
          const dx = particle.x - mouseRef.current.x;
          const dy = particle.y - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Repel particles from mouse
          if (distance < 100) {
            const angle = Math.atan2(dy, dx);
            const force = 0.1; // Repulsion strength
            particle.speedX += Math.cos(angle) * force;
            particle.speedY += Math.sin(angle) * force;
            
            // Limit max speed
            const maxSpeed = 2;
            const currentSpeed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY);
            if (currentSpeed > maxSpeed) {
              particle.speedX = (particle.speedX / currentSpeed) * maxSpeed;
              particle.speedY = (particle.speedY / currentSpeed) * maxSpeed;
            }
          }
        }
        
        // Add some randomness to movement
        if (Math.random() < 0.01) {
          particle.speedX += (Math.random() - 0.5) * 0.2;
          particle.speedY += (Math.random() - 0.5) * 0.2;
          
          // Dampen speed over time
          particle.speedX *= 0.99;
          particle.speedY *= 0.99;
        }
      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  // Helper functions
  const createParticle = (width: number, height: number): Particle => {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: 0.1 + Math.random() * 0.4,
    };
  };

  const connectParticles = (
    ctx: CanvasRenderingContext2D,
    particle: Particle,
    particles: Particle[],
    maxDistance: number
  ) => {
    particles.forEach(otherParticle => {
      if (particle === otherParticle) return;
      
      const dx = particle.x - otherParticle.x;
      const dy = particle.y - otherParticle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < maxDistance) {
        // Create lines between particles that are close to each other
        const opacity = 1 - distance / maxDistance;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(230, 221, 198, ${opacity * 0.15})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(otherParticle.x, otherParticle.y);
        ctx.stroke();
      }
    });
  };

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
}