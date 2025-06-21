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
          width: '200%',
          height: '200%',
          backgroundImage: 'url(https://i.imgur.com/eC3mws6.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'translate(-50%, -50%)',
          animation: 'pan 60s linear infinite',
        }}
      />
      <style>
        {`
          @keyframes pan {
            0% {
              transform: translate(-50%, -50%) scale(1);
            }
            50% {
              transform: translate(-52%, -48%) scale(1.1);
            }
            100% {
              transform: translate(-50%, -50%) scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default LiveBackground;