import React, { useMemo } from 'react';

const StarBackground: React.FC = () => {
  // Generate random stars only once
  const stars = useMemo(() => {
    return Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 3 + 2}s`
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full opacity-70 animate-twinkle"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
      {/* Nebulas */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-900/20 to-black/80 z-0"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl filter"></div>
      <div className="absolute bottom-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl filter"></div>
    </div>
  );
};

export default StarBackground;