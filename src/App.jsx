import React from 'react';
import './App.css';

const Blossom = ({ x, y, scale = 1, rotate = 0, dark = false }) => {
  const fill = dark ? "url(#petalDarkGrad)" : "url(#petalGrad)";
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale}) rotate(${rotate})`}>
      {/* 5 Petals */}
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <path key={`p${i}`} transform={`rotate(${angle})`} d="M 0 0 C -10 -15, -12 -25, -2 -24 L 0 -20 L 2 -24 C 12 -25, 10 -15, 0 0 Z" fill={fill} opacity="0.9" />
      ))}
      {/* Center stamens */}
      <circle cx="0" cy="0" r="3" fill="#fb6f92" />
      <circle cx="0" cy="0" r="1.5" fill="#5c4d4d" />
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <line key={`l${i}`} x1="0" y1="0" x2="0" y2="-8" stroke="#fb6f92" strokeWidth="0.5" transform={`rotate(${angle + 36})`} />
      ))}
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <circle key={`c${i}`} cx="0" cy="-8" r="1" fill="#5c4d4d" transform={`rotate(${angle + 36})`} />
      ))}
    </g>
  );
};

const Bud = ({ x, y, scale = 1, rotate = 0 }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale}) rotate(${rotate})`}>
    <path d="M 0 0 C -5 -5, -8 -12, 0 -15 C 8 -12, 5 -5, 0 0 Z" fill="url(#petalDarkGrad)" />
    <path d="M -3 -2 C -5 -5, 0 -8, 0 -8 C 0 -8, 5 -5, 3 -2 Z" fill="#5c4d4d" stroke="#5c4d4d" strokeWidth="1" />
  </g>
);

const CherryBlossomSVG = ({ flip = false }) => {
  const transform = flip ? "rotate(180deg)" : "";
  return (
    <svg width="320" height="90" viewBox="0 0 320 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform, transition: 'all 0.3s ease' }}>
      <defs>
        <radialGradient id="petalGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff0f3" />
          <stop offset="60%" stopColor="#ffb3c6" />
          <stop offset="100%" stopColor="#ff8fab" />
        </radialGradient>
        <radialGradient id="petalDarkGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffb3c6" />
          <stop offset="100%" stopColor="#fb6f92" />
        </radialGradient>
      </defs>

      {/* Main branch */}
      <path d="M 10 75 Q 160 -20 310 75" stroke="#4a3b3b" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Sub branches */}
      <path d="M 85 39 Q 70 25 50 20" stroke="#4a3b3b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 120 32 Q 130 10 150 5" stroke="#4a3b3b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 235 39 Q 250 25 270 20" stroke="#4a3b3b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      
      {/* Buds */}
      <Bud x={50} y={20} scale={0.7} rotate={-45} />
      <Bud x={150} y={5} scale={0.8} rotate={15} />
      <Bud x={270} y={20} scale={0.7} rotate={45} />
      <Bud x={100} y={35} scale={0.6} rotate={-20} />
      <Bud x={200} y={35} scale={0.6} rotate={20} />
      <Bud x={285} y={60} scale={0.5} rotate={60} />
      <Bud x={35} y={60} scale={0.5} rotate={-60} />

      {/* Flowers */}
      <Blossom x={85} y={39} scale={0.8} rotate={15} />
      <Blossom x={120} y={32} scale={0.9} rotate={-10} dark={true} />
      <Blossom x={160} y={27} scale={1.2} rotate={5} />
      <Blossom x={190} y={30} scale={0.9} rotate={25} />
      <Blossom x={235} y={39} scale={0.8} rotate={-15} dark={true} />
      <Blossom x={265} y={51} scale={0.7} rotate={10} />
      <Blossom x={55} y={51} scale={0.7} rotate={-30} />
    </svg>
  );
};

const FallingPetals = () => {
  const petals = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    duration: 5 + Math.random() * 10,
    delay: Math.random() * 10,
    size: 8 + Math.random() * 12,
  }));

  return (
    <div className="petals-container">
      {petals.map((p) => (
        <div 
          key={p.id}
          className="petal-wrapper"
          style={{
            left: `${p.left}vw`,
            animationDuration: `${p.duration}s`,
            animationDelay: `-${p.delay}s`,
          }}
        >
          <div 
            className="falling-petal"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="app-container">
      <FallingPetals />
      <header className="hero-section">
        <div className="hoop-frame">
          <div className="floral-top">
            <CherryBlossomSVG />
          </div>
          
          <div className="quote-container mb-4 mt-4">
            <p className="bible-verse">
              "Para que todos vejam,<br />
              e saibam, e considerem,<br />
              e juntamente, entendam que a mão<br />
              do Senhor fez isso."
            </p>
            <p className="verse-ref">Isaías 41:20</p>
          </div>

          <h1 className="couple-names mb-4">Leônidas e Jeane</h1>

          <div className="date-container mb-4">
            <p className="wedding-date">31 . 07 . 2026</p>
          </div>

          <div className="floral-bottom">
            <CherryBlossomSVG flip={true} />
          </div>
        </div>
      </header>

      <main className="container text-center mt-4">
        <section className="details-section mb-4">
          <h2>Nossa História</h2>
          <p>Com a bênção de Deus e de nossos pais, convidamos você para celebrar conosco este momento especial.</p>
        </section>

        <section className="location-section mb-4">
          <h2>Onde e Quando</h2>
          
          <div className="event-details mb-4">
            <p><strong>Cerimônia Civil</strong></p>
            <p>31 de Julho de 2026, às 16h00</p>
            <p>Cartório Silva Luz - Novo Paquetá</p>
          </div>

          <div className="event-details">
            <p><strong>Recepção</strong></p>
            <p>No Escondido</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
