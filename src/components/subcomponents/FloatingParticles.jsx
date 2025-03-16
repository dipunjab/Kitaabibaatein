import React from "react";

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => {
        const size = Math.random() * 6 + 3; 
        return (
          <div
            key={i}
            className="absolute rounded-full bg-blue-400 opacity-40 animate-float"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 3}s`, 
              animationDelay: `${Math.random() * 2}s`, 
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingParticles;
