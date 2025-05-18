interface WaveDividerProps {
  position?: 'top' | 'bottom';
  color?: string;
  height?: number;
  className?: string;
}

export default function WaveDivider({ 
  position = 'bottom', 
  color = '#f8fafc', 
  height = 120,
  className = '' 
}: WaveDividerProps) {
  return (
    <div className={`absolute w-full overflow-hidden leading-0 ${position === 'top' ? 'top-0 transform rotate-180' : 'bottom-0'} ${className}`} style={{ height: `${height}px` }}>
      <svg 
        className="w-full h-full" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
      >
        <path 
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
          fill={color}
        />
      </svg>
    </div>
  );
}