import React from 'react';
import './App.css';

const Rose = ({ x, y, scale = 1, rotate = 0, opacity = 1 }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale}) rotate(${rotate})`} opacity={opacity}>
    <circle cx="0" cy="0" r="35" fill="url(#roseGrad1)" />
    <path d="M-10,25 C-30,20 -35,-5 -20,-20 C-5,-35 25,-30 30,-10 C35,10 20,30 -10,25 Z" fill="url(#roseGrad2)" />
    <path d="M15,-15 C30,-5 25,20 5,25 C-15,30 -25,5 -10,-10 Z" fill="url(#roseGrad3)" />
    <path d="M-5,-10 C-15,-20 10,-25 20,-10 C30,5 5,25 -5,-10 Z" fill="url(#roseGrad1)" />
    <path d="M0,10 C15,15 20,-5 5,-15 C-10,-25 -15,5 0,10 Z" fill="url(#roseGrad2)" />
    <path d="M-5,5 C-10,-5 5,-10 10,0 C15,10 -5,15 -5,5 Z" fill="url(#roseGrad3)" />
    <path d="M-20,-20 Q-5,-10 -10,25" fill="none" stroke="#fcf6f5" strokeWidth="1.5" opacity="0.5" />
    <path d="M30,-10 Q10,0 5,25" fill="none" stroke="#fcf6f5" strokeWidth="1.5" opacity="0.5" />
    <path d="M-10,-10 Q5,-5 20,-10" fill="none" stroke="#fcf6f5" strokeWidth="1" opacity="0.5" />
    <path d="M0,10 Q5,5 5,-15" fill="none" stroke="#fcf6f5" strokeWidth="1" opacity="0.5" />
  </g>
);

const Leaf = ({ x, y, scale = 1, rotate = 0, color = "#bcc1b4" }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale}) rotate(${rotate})`}>
    <path d="M 0 0 C 10 -20, 30 -30, 45 -45 C 45 -30, 25 -10, 0 0 Z" fill={color} />
  </g>
);

const RoundLeaf = ({ x, y, scale = 1, rotate = 0 }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale}) rotate(${rotate})`}>
    <path d="M 0 0 C 15 -10, 20 -25, 30 -30 C 35 -15, 20 0, 0 0 Z" fill="#d6c6b9" />
  </g>
);

const Branch = ({ x, y, scale = 1, rotate = 0 }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale}) rotate(${rotate})`}>
    <path d="M 0 0 Q 30 -10 60 5" fill="none" stroke="#8d8177" strokeWidth="1.5" />
    <circle cx="20" cy="-6" r="3" fill="#d9baa7" />
    <circle cx="40" cy="-2" r="2.5" fill="#d9baa7" />
    <circle cx="60" cy="5" r="2.5" fill="#d9baa7" />
    <circle cx="30" cy="2" r="2" fill="#d9baa7" />
  </g>
);

const RoseCorner = ({ className, style }) => {
  return (
    <svg width="400" height="400" viewBox="0 0 400 400" fill="none" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="roseGrad1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f3e8e8" />
          <stop offset="100%" stopColor="#e5d0d2" />
        </radialGradient>
        <radialGradient id="roseGrad2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e5d0d2" />
          <stop offset="100%" stopColor="#d5b5b8" />
        </radialGradient>
        <radialGradient id="roseGrad3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#d5b5b8" />
          <stop offset="100%" stopColor="#c5999c" />
        </radialGradient>
      </defs>

      {/* Watercolor blobs */}
      <path d="M 0 0 L 350 0 Q 200 200 0 350 Z" fill="#fdf8f6" opacity="0.8" />
      <path d="M 0 0 L 250 0 Q 150 150 0 250 Z" fill="#fae8e5" opacity="0.5" />

      {/* Stems and Branches */}
      <path d="M 0 0 Q 150 50 300 120" stroke="#a79e95" strokeWidth="2" fill="none" />
      <path d="M 0 0 Q 50 150 120 300" stroke="#a79e95" strokeWidth="2" fill="none" />
      
      {/* Background leaves */}
      <Leaf x={100} y={40} scale={1.5} rotate={20} color="#bac1b5" />
      <Leaf x={150} y={80} scale={1.2} rotate={45} color="#d4ccb8" />
      <Leaf x={250} y={100} scale={1.3} rotate={70} color="#90998f" />
      
      <Leaf x={40} y={100} scale={1.5} rotate={70} color="#bac1b5" />
      <Leaf x={80} y={150} scale={1.2} rotate={100} color="#d4ccb8" />
      <Leaf x={100} y={250} scale={1.3} rotate={140} color="#90998f" />

      {/* Berries */}
      <Branch x={180} y={50} scale={1.2} rotate={10} />
      <Branch x={220} y={100} scale={1} rotate={40} />
      
      <Branch x={50} y={180} scale={1.2} rotate={70} />
      <Branch x={100} y={220} scale={1} rotate={120} />

      {/* Foreground Roses */}
      <Rose x={50} y={50} scale={1.8} rotate={15} />
      <Rose x={180} y={30} scale={1.4} rotate={-30} />
      <Rose x={280} y={110} scale={1.2} rotate={45} />
      
      <Rose x={30} y={180} scale={1.4} rotate={60} />
      <Rose x={110} y={280} scale={1.2} rotate={80} />
      
      {/* Extra floating petals / mini flowers */}
      <RoundLeaf x={240} y={50} scale={1} rotate={-10} />
      <RoundLeaf x={50} y={240} scale={1} rotate={80} />
      <RoundLeaf x={120} y={140} scale={0.8} rotate={40} />
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
        <RoseCorner className="corner-top-left" />
        <RoseCorner className="corner-top-right" style={{transform: 'scaleX(-1)'}} />
        <RoseCorner className="corner-bottom-left" style={{transform: 'scaleY(-1)'}} />
        <RoseCorner className="corner-bottom-right" style={{transform: 'scale(-1, -1)'}} />
        
        <div className="hero-content">
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
