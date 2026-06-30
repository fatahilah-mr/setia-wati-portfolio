import React, { useState } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  id?: string;
}

// Reusable LazyImage Component with elegant shimmering skeleton and smooth fade-in
export function LazyImage({ src, alt, className, id }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div className={`lazy-image-container ${isLoaded ? 'loaded' : 'loading'}`} style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {!isLoaded && (
        <div className="shimmer-fallback" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(90deg, #ffe4e1 25%, #ffb7c5 50%, #ffe4e1 75%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.5s infinite linear',
          zIndex: 1
        }}></div>
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        id={id}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s ease',
          opacity: isLoaded ? 1 : 0,
          willChange: 'opacity, transform'
        }}
      />
    </div>
  );
}
