import React from 'react';

export default function FloatingDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-10">
      
      {/* Dashed Orbit Curved Lines */}
      <svg className="absolute top-[8%] left-[2%] w-[96%] h-[80%] opacity-35 pointer-events-none" viewBox="0 0 1400 800" fill="none">
        <path
          d="M 30,360 C 180,220 620,80 1020,140 C 1240,170 1350,300 1390,450"
          stroke="#94a3b8"
          strokeWidth="1.5"
          strokeDasharray="6 7"
          className="animate-dash"
        />
        <path
          d="M 100,560 C 320,580 620,700 880,740"
          stroke="#cbd5e1"
          strokeWidth="1.2"
          strokeDasharray="4 6"
        />
      </svg>

      {/* Background Dot Matrix Card behind Card 1 (Asset 3.png) */}
      <div className="absolute top-[64%] left-[3%] w-[165px] sm:w-[190px] -translate-y-1/2 opacity-85 -z-10 -rotate-3 transition-transform duration-700 hover:rotate-0">
        <img
          src="/assets/cropped/3.png"
          alt="Dot pattern card"
          className="w-full object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.03)]"
        />
      </div>

      {/* Top Left: 3D Refractive Glass Plus (Asset 1.png) */}
      <div className="absolute top-[12%] left-[4.5%] w-[85px] sm:w-[95px] animate-float-slow transition-transform duration-300 hover:scale-105 pointer-events-auto">
        <img
          src="/assets/cropped/1.png"
          alt="3D Glass Plus"
          className="w-full object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.06)]"
        />
      </div>

      {/* Mid Left: 3D Optical Glass Prism (Asset 4.png) */}
      <div className="absolute top-[30%] left-[6%] w-[50px] sm:w-[62px] animate-float-reverse transition-transform duration-300 hover:scale-105 pointer-events-auto">
        <img
          src="/assets/cropped/4.png"
          alt="3D Optical Prism"
          className="w-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.05)]"
        />
      </div>

      {/* Bottom Center: 3D Refractive Glass Ring (Asset 9.png) */}
      <div className="absolute bottom-[0%] left-[47%] -translate-x-1/2 w-[125px] sm:w-[145px] animate-float-slow transition-transform duration-300 hover:scale-105 pointer-events-auto">
        <img
          src="/assets/cropped/9.png"
          alt="3D Glass Torus"
          className="w-full object-contain drop-shadow-[0_14px_28px_rgba(0,0,0,0.06)]"
        />
      </div>

      {/* Sparkles & Star Accents (Assets 6, 11, 20) */}
      <div className="absolute top-[42%] left-[5%] w-[18px] text-[#84cc16] animate-pulse-glow" style={{ animationDelay: '0.2s' }}>
        <img src="/assets/cropped/6.png" alt="Sparkle" className="w-full object-contain" />
      </div>
      <div className="absolute top-[26%] left-[48%] w-[26px] animate-pulse-glow" style={{ animationDelay: '1.2s' }}>
        <img src="/assets/cropped/11.png" alt="Sparkles set" className="w-full object-contain" />
      </div>
      <div className="absolute top-[18%] right-[8%] w-[16px] opacity-60 animate-pulse-glow" style={{ animationDelay: '2.1s' }}>
        <img src="/assets/cropped/6.png" alt="Sparkle" className="w-full object-contain" />
      </div>
      <div className="absolute top-[32%] right-[11%] w-[16px] opacity-75 animate-pulse-glow" style={{ animationDelay: '0.6s' }}>
        <img src="/assets/cropped/6.png" alt="Sparkle" className="w-full object-contain" />
      </div>
      <div className="absolute bottom-[5%] left-[20%] w-[18px] animate-pulse-glow" style={{ animationDelay: '1.5s' }}>
        <img src="/assets/cropped/6.png" alt="Sparkle" className="w-full object-contain" />
      </div>

      {/* Decorative dots scatter (Asset 20.png) */}
      <div className="absolute top-[18%] left-[55%] w-[320px] opacity-35 -z-10 pointer-events-none">
        <img src="/assets/cropped/20.png" alt="Dots scatter" className="w-full object-contain" />
      </div>

      {/* Bottom Right Subtle Dot Matrix */}
      <div className="absolute bottom-0 right-0 w-[240px] h-[160px] bg-dot-pattern opacity-35 -z-10 pointer-events-none" />

      {/* Handwritten Doodles (Delicately scaled to match exact reference) */}

      {/* 1. Above Center Cards: "strategy -> design -> impact" (Asset 7.png) */}
      <div className="absolute top-[15%] left-[54%] -translate-x-1/2 w-[115px] sm:w-[125px] pointer-events-auto transform -rotate-2 hover:scale-105 transition-transform duration-300">
        <img
          src="/assets/cropped/7.png"
          alt="strategy design impact"
          className="w-full object-contain drop-shadow-sm"
        />
      </div>

      {/* 2. Bottom Left: "Insightful by design" + arrow (Asset 13.png - Compact & Delicate matching reference) */}
      <div className="absolute bottom-[4%] left-[3%] sm:left-[3.5%] w-[105px] sm:w-[115px] pointer-events-auto transform -rotate-3 hover:scale-105 transition-transform duration-300">
        <img
          src="/assets/cropped/13.png"
          alt="Insightful by design"
          className="w-full object-contain drop-shadow-sm"
        />
      </div>

      {/* 3. Bottom Right: Hand-drawn arrow + "Real people. Real results." */}
      <div className="absolute bottom-[2%] right-[5%] sm:right-[7%] flex flex-col items-start pointer-events-auto">
        {/* Hand-drawn curved arrow curving UP towards the bottom edge of the photo card */}
        <div className="w-[28px] sm:w-[32px] h-[36px] mb-0.5 ml-2 pointer-events-none transform -rotate-6">
          <svg viewBox="0 0 40 48" fill="none" className="w-full h-full text-slate-700">
            <path
              d="M 28 46 C 14 34, 10 18, 14 4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M 6 14 L 14 4 L 20 14"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Text: "Real people. Real results." (Asset 14.png - Delicate & proportional) */}
        <div className="w-[115px] sm:w-[125px] transform rotate-1 hover:scale-105 transition-transform duration-300">
          <img
            src="/assets/cropped/14.png"
            alt="Real people. Real results."
            className="w-full object-contain drop-shadow-sm"
          />
        </div>
      </div>

    </div>
  );
}
