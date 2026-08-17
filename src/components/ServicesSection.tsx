import React from 'react';
import ServiceCard from './ServiceCard';

export default function ServicesSection({ onServiceSelect, onBuildTogetherClick }) {
  return (
    <section id="services" className="relative w-full max-w-[1550px] mx-auto min-h-[1060px] px-4 sm:px-6 lg:px-8 pt-32 pb-24 select-none">
      
      {/* 1. Upper Left: Headline & Text Block (Above Card 1) */}
      <div className="relative xl:absolute xl:top-[130px] xl:left-[80px] z-40 max-w-[440px] flex flex-col items-start mb-10 xl:mb-0 pointer-events-auto">
        
        {/* Category Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-500 font-sans">
            SERVICES
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-[38px] sm:text-[42px] lg:text-[44px] font-extrabold text-[#111827] tracking-tight leading-[1.1] mb-4">
          Solutions designed<br />
          to move your ideas<br />
          <span className="font-serif-italic font-normal text-[#75aa16] text-[48px] sm:text-[54px] lg:text-[58px] tracking-normal inline-block hover:scale-105 transition-transform duration-300 cursor-default">
            forward
          </span>
        </h1>

        {/* Subtitle Description */}
        <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-slate-500 font-normal mb-5 max-w-[340px]">
          We combine strategy, creativity, and technology to build digital experiences that are intelligent, meaningful, and built to scale.
        </p>

        {/* CTA Action Pill Button (Sitting right above Card 1) */}
        <button
          onClick={onBuildTogetherClick}
          className="group flex items-center gap-3 pl-5 pr-2 py-1.5 bg-white hover:bg-slate-50 border border-black/[0.08] rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.09)] hover:border-black/[0.12] active:scale-98"
        >
          <span className="text-[13px] font-bold text-[#111827] tracking-tight font-sans">
            Let's build together
          </span>
          <div className="w-[30px] h-[30px] rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105 group-hover:rotate-12">
            <img
              src="/assets/cropped/17.png"
              alt="Arrow"
              className="w-full h-full object-contain"
            />
          </div>
        </button>
      </div>

      {/* 2. Top-Right Floating Social Proof Badge */}
      <div className="absolute top-[170px] right-[60px] lg:right-[100px] z-40 animate-float-slow pointer-events-auto hidden sm:block">
        <div className="relative flex items-center gap-2 transition-transform duration-300 hover:scale-105">
          <img
            src="/assets/cropped/8.png"
            alt="Trusted by 200+ global brands"
            className="w-[180px] sm:w-[200px] object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.09)]"
          />
          <div className="w-[34px] sm:w-[38px] -ml-2">
            <img
              src="/assets/cropped/12.png"
              alt="Plus action"
              className="w-full object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.07)] cursor-pointer hover:rotate-90 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* 3. Art-Directed Overlapping Card Stage Container */}
      <div className="relative xl:absolute xl:top-[430px] xl:left-[60px] xl:w-[1380px] xl:h-[480px] z-20 flex flex-wrap xl:block items-center justify-center gap-6 xl:gap-0">
        
        {/* Card 1: AI & Spatial Strategy (x=0, y=70, -5° rotation, 340×390px, z-10) */}
        <div className="xl:absolute xl:left-[0px] xl:top-[70px] z-10">
          <ServiceCard
            iconSrc="/assets/cropped/16.png"
            title="AI & Spatial Strategy"
            description="We identify high-impact opportunities for spatial and generative AI integration directly into your product workflows."
            rotation={-5}
            translateY={0}
            zIndex={10}
            width="w-[340px]"
            height="h-[390px]"
            onLearnMore={() => onServiceSelect && onServiceSelect({ title: 'AI & Spatial Strategy', iconSrc: '/assets/cropped/16.png', description: 'We identify high-impact opportunities for spatial and generative AI integration directly into your product workflows.' })}
          />
        </div>

        {/* Card 2: Creative Direction (x=310, y=0, 0° rotation, 360×420px, Dominant Front Card, z-30) */}
        <div className="xl:absolute xl:left-[310px] xl:top-[0px] z-30">
          <ServiceCard
            iconSrc="/assets/cropped/18.png"
            title="Creative Direction"
            description="We architect distinct visual systems and brand guidelines that drive customer loyalty and set category standards."
            rotation={0}
            translateY={0}
            zIndex={30}
            width="w-[360px]"
            height="h-[420px]"
            onLearnMore={() => onServiceSelect && onServiceSelect({ title: 'Creative Direction', iconSrc: '/assets/cropped/18.png', description: 'We architect distinct visual systems and brand guidelines that drive customer loyalty and set category standards.' })}
          />
        </div>

        {/* Card 3: Data & Architecture (x=645, y=35, +4° rotation, 330×390px, z-15 sitting underneath Card 2 with 5-8% left margin overlap) */}
        <div className="xl:absolute xl:left-[645px] xl:top-[35px] z-15">
          <ServiceCard
            iconSrc="/assets/cropped/19.png"
            title="Data & Architecture"
            description="We turn complex technical systems into sub-second interfaces using modern full-stack frameworks and edge compute."
            rotation={4}
            translateY={0}
            zIndex={15}
            width="w-[330px]"
            height="h-[390px]"
            onLearnMore={() => onServiceSelect && onServiceSelect({ title: 'Data & Architecture', iconSrc: '/assets/cropped/19.png', description: 'We turn complex technical systems into sub-second interfaces using modern full-stack frameworks and edge compute.' })}
          />
        </div>

        {/* Card 4: Team Collaboration Photo Card (x=985, y=20, -2° rotation, 330×390px) */}
        <div 
          style={{
            transform: 'rotate(-2deg)',
            zIndex: 12,
          }}
          className="xl:absolute xl:left-[985px] xl:top-[20px] relative group w-[330px] h-[390px] rounded-[28px] overflow-hidden border border-black/[0.08] shadow-[0_20px_45px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_65px_-15px_rgba(0,0,0,0.15)] flex-shrink-0 cursor-pointer"
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&auto=format&fit=crop&q=80"
            alt="Creative collaborative team at work"
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

          {/* Bottom Badge: "Collaborative by nature" (Asset 15.png) */}
          <div className="absolute bottom-5 left-4 right-4 pointer-events-auto flex items-center justify-start">
            <img
              src="/assets/cropped/15.png"
              alt="Collaborative by nature"
              className="w-[185px] sm:w-[200px] object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

      </div>

      {/* 4. Bottom Floating Pulse Waveform Widget (Sitting under Card 3 / Card 4 gap) */}
      <div className="absolute bottom-4 right-[330px] lg:right-[410px] z-30 animate-float-reverse pointer-events-auto hidden sm:block">
        <div className="relative flex items-center gap-2 transition-transform duration-300 hover:scale-105">
          <img
            src="/assets/cropped/2.png"
            alt="Performance sparkline"
            className="w-[135px] sm:w-[150px] object-contain drop-shadow-[0_16px_36px_rgba(0,0,0,0.06)]"
          />
          <div className="w-[30px] sm:w-[34px] -ml-2">
            <img
              src="/assets/cropped/12.png"
              alt="Plus action"
              className="w-full object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.05)] cursor-pointer hover:rotate-90 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

    </section>
  );
}
