import React from 'react';

export default function FloatingDecorations() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'visible',
        zIndex: 10,
      }}
    >
      {/* ─── 1. SVG ORBITAL TRAJECTORIES & ENERGY NODES ─── */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          opacity: 0.65,
        }}
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Main Sweeping Orbital Trajectory connecting across the canvas */}
        <path
          d="M 30 380 C 120 280, 240 210, 420 180 C 600 150, 780 130, 940 180 C 1080 220, 1180 140, 1310 150 C 1410 160, 1465 260, 1435 380 C 1400 500, 1335 620, 1260 720"
          stroke="#cbd5e1"
          strokeWidth="1.2"
          strokeDasharray="4 6"
          strokeLinecap="round"
        />

        {/* Lower Left Connecting Wave Arc behind Dot Matrix card */}
        <path
          d="M 60 550 C 200 580, 480 660, 760 720"
          stroke="#cbd5e1"
          strokeWidth="1.1"
          strokeDasharray="4 6"
          strokeLinecap="round"
        />

        {/* Energy Nodes (Lime & Slate dots along orbital trajectory) */}
        <circle cx="180" cy="240" r="3.2" fill="#84cc16" opacity="0.9" />
        <circle cx="540" cy="155" r="3.2" fill="#84cc16" opacity="0.85" />
        <circle cx="910" cy="175" r="3" fill="#84cc16" opacity="0.85" />
        <circle cx="1200" cy="150" r="3.2" fill="#84cc16" opacity="0.9" />
        <circle cx="1435" cy="330" r="3.2" fill="#94a3b8" opacity="0.8" />
        <circle cx="1310" cy="650" r="3" fill="#84cc16" opacity="0.85" />

        {/* Star Sparkles along trajectory */}
        <g transform="translate(110, 640)">
          <path d="M0 -5.5 Q0 0 5.5 0 Q0 0 0 5.5 Q0 0 -5.5 0 Q0 0 0 -5.5" fill="#84cc16" opacity="0.85" />
        </g>
        <g transform="translate(640, 135)">
          <path d="M0 -5.5 Q0 0 5.5 0 Q0 0 0 5.5 Q0 0 -5.5 0 Q0 0 0 -5.5" fill="#84cc16" opacity="0.85" />
        </g>
        <g transform="translate(720, 145)">
          <path d="M0 -5 Q0 0 5 0 Q0 0 0 5 Q0 0 -5 0 Q0 0 0 -5" fill="#94a3b8" opacity="0.8" />
        </g>
        <g transform="translate(1040, 215)">
          <path d="M0 -5.5 Q0 0 5.5 0 Q0 0 0 5.5 Q0 0 -5.5 0 Q0 0 0 -5.5" fill="#84cc16" opacity="0.85" />
        </g>
        <g transform="translate(1410, 270)">
          <path d="M0 -5 Q0 0 5 0 Q0 0 0 5 Q0 0 -5 0 Q0 0 0 -5" fill="#94a3b8" opacity="0.8" />
        </g>
        <g transform="translate(1350, 510)">
          <path d="M0 -5.5 Q0 0 5.5 0 Q0 0 0 5.5 Q0 0 -5.5 0 Q0 0 0 -5.5" fill="#84cc16" opacity="0.85" />
        </g>
        <g transform="translate(1100, 720)">
          <path d="M0 -5 Q0 0 5 0 Q0 0 0 5 Q0 0 -5 0 Q0 0 0 -5" fill="#84cc16" opacity="0.85" />
        </g>
      </svg>

      {/* ─── 2. UPPER-LEFT 3D REFRACTIVE GLASS ASSETS ─── */}
      {/* 3D Glass Plus (Asset 1.png) */}
      <div
        style={{
          position: 'absolute',
          top: '65px',
          left: '70px',
          width: '78px',
          zIndex: 30,
          pointerEvents: 'auto',
          transition: 'transform 0.3s ease',
        }}
        className="hover:scale-105"
      >
        <img
          src="/assets/cropped/1.png"
          alt="3D Glass Plus"
          style={{ width: '100%', objectFit: 'contain', filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.06))' }}
        />
      </div>

      {/* 3D Optical Glass Prism (Asset 4.png) */}
      <div
        style={{
          position: 'absolute',
          top: '260px',
          left: '95px',
          width: '50px',
          zIndex: 30,
          pointerEvents: 'auto',
          transition: 'transform 0.3s ease',
        }}
        className="hover:scale-105"
      >
        <img
          src="/assets/cropped/4.png"
          alt="3D Optical Prism"
          style={{ width: '100%', objectFit: 'contain', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.05))' }}
        />
      </div>

      {/* ─── 3. BACKGROUND DOT MATRIX PANELS & PARTICLES ─── */}
      {/* Background Dot Matrix Card behind Card 1 (Asset 3.png) */}
      <div
        style={{
          position: 'absolute',
          top: '540px',
          left: '30px',
          width: '165px',
          transform: 'rotate(-6deg)',
          opacity: 0.85,
          zIndex: 10,
          pointerEvents: 'none',
        }}
      >
        <img
          src="/assets/cropped/3.png"
          alt="Dot pattern card"
          style={{ width: '100%', objectFit: 'contain', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.03))' }}
        />
      </div>

      {/* Bottom Right Subtle Dot Matrix Grid */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '240px',
          height: '170px',
          backgroundImage: 'radial-gradient(rgba(148, 163, 184, 0.22) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
          opacity: 0.4,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* ─── 4. HANDWRITTEN ANNOTATIONS & DOODLES ─── */}
      {/* 1. Above Center Cards: "strategy -> design -> impact" (Asset 7.png) */}
      <div
        style={{
          position: 'absolute',
          top: '110px',
          left: '710px',
          width: '120px',
          transform: 'rotate(-2deg)',
          pointerEvents: 'auto',
          zIndex: 30,
          transition: 'transform 0.3s ease',
        }}
        className="hover:scale-105"
      >
        <img
          src="/assets/cropped/7.png"
          alt="strategy design impact"
          style={{ width: '100%', objectFit: 'contain', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.04))' }}
        />
      </div>

      {/* 2. Bottom Left: "Insightful by design" + arrow pointing directly to Card 1 (Asset 13.png) */}
      <div
        style={{
          position: 'absolute',
          top: '760px',
          left: '50px',
          width: '125px',
          transform: 'rotate(-1deg)',
          pointerEvents: 'auto',
          zIndex: 30,
          transition: 'transform 0.3s ease',
        }}
        className="hover:scale-105"
      >
        <img
          src="/assets/cropped/13.png"
          alt="Insightful by design"
          style={{ width: '100%', objectFit: 'contain', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.04))' }}
        />
      </div>

      {/* 3. Bottom Right: Hand-drawn arrow (10.png) + "Real people. Real results." (14.png) pointing to Team Photo Card */}
      <div
        style={{
          position: 'absolute',
          top: '665px',
          left: '1285px',
          zIndex: 35,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          pointerEvents: 'auto',
        }}
      >
        {/* Authentic hand-drawn arrow (Asset 10.png) curling up-left directly towards Team card */}
        <div
          style={{
            width: '34px',
            marginBottom: '-2px',
            marginLeft: '-8px',
            pointerEvents: 'none',
          }}
        >
          <img
            src="/assets/cropped/10.png"
            alt="Arrow pointing to team"
            style={{ width: '100%', objectFit: 'contain' }}
          />
        </div>

        {/* Text: "Real people. Real results." (Asset 14.png) */}
        <div
          style={{
            width: '118px',
            transform: 'rotate(1deg)',
            transition: 'transform 0.3s ease',
          }}
          className="hover:scale-105"
        >
          <img
            src="/assets/cropped/14.png"
            alt="Real people. Real results."
            style={{ width: '100%', objectFit: 'contain', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.04))' }}
          />
        </div>
      </div>

      {/* ─── 5. 3D GLASS TORUS (BOTTOM CENTER) ─── */}
      {/* 3D Refractive Glass Ring (Asset 9.png) */}
      <div
        style={{
          position: 'absolute',
          top: '755px',
          left: '635px',
          width: '138px',
          transform: 'translateX(-50%)',
          zIndex: 30,
          pointerEvents: 'auto',
          transition: 'transform 0.3s ease',
        }}
        className="hover:scale-105"
      >
        <img
          src="/assets/cropped/9.png"
          alt="3D Glass Torus"
          style={{ width: '100%', objectFit: 'contain', filter: 'drop-shadow(0 14px 28px rgba(0,0,0,0.06))' }}
        />
      </div>

    </div>
  );
}
