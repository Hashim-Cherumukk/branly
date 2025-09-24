import React from 'react';

export const WorkCard = ({ src, type, borderColor }: { src: string; type: 'image' | 'video'; borderColor: string }) => {
  return (
    // CHANGED: Corner radius increased to 'rounded-3xl' and aspect ratio changed to 'aspect-[3/4]'.
    <div 
      className="relative rounded-3xl aspect-[3/4] overflow-hidden"
      style={{ border: `2px solid ${borderColor}` }}
    >
      {/* The media tag fills the container completely. */}
      {type === 'video' ? (
        <video 
          src={src} 
          muted 
          autoPlay 
          loop 
          playsInline
          className="w-full h-full object-cover"
        />
      ) : (
        <img 
          src={src} 
          alt=""
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};