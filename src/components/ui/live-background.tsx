import React from 'react';

const LiveBackground = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden',
        backgroundColor: '#000',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '120%',
          height: '120%',
          backgroundImage: 'url(/aurora-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'translate(-50%, -50%)',
          animation: 'pan 60s linear infinite alternate',
        }}
      />
      <style>
        {`
          @keyframes pan {
            0% {
              transform: translate(-50%, -50%) scale(1);
            }
            100% {
              transform: translate(-55%, -55%) scale(1.1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default LiveBackground;