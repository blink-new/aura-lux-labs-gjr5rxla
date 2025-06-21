import LiveBackground from './components/ui/live-background';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', fontWeight: 'bold', fontStyle: 'italic' }}>
      <LiveBackground />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          color: 'white',
          fontSize: '5rem',
          textAlign: 'center',
          textShadow: '0 0 10px #000, 0 0 20px #000, 0 0 30px #000',
        }}
      >
        Aura Lux Labs
      </div>
    </div>
  );
}

export default App;