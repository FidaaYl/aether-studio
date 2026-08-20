import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import FloatingDecorations from './FloatingDecorations';

interface Props {
  T?: any;
  L?: boolean;
  onServiceSelect?: (service: any) => void;
  onBuildTogetherClick?: () => void;
}

export default function WorkShowcase({
  onServiceSelect,
  onBuildTogetherClick,
}: Props) {
  const [teamHover, setTeamHover] = useState(false);

  const handleScrollToContact = () => {
    if (onBuildTogetherClick) {
      onBuildTogetherClick();
    } else {
      const contactElem = document.getElementById('contact');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleCardSelect = (service: any) => {
    if (onServiceSelect) {
      onServiceSelect(service);
    } else {
      const contactElem = document.getElementById('contact');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="services"
      style={{
        position: 'relative',
        width: '100%',
        background: '#faf9f5',
        minHeight: '920px',
        overflow: 'hidden',
        boxSizing: 'border-box',
        userSelect: 'none',
      }}
    >
      {/* Centered Desktop Stage (1440 × 900) */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1440px',
          height: '900px',
          margin: '0 auto',
        }}
      >
        {/* Floating Spatial Decorations Layer */}
        <FloatingDecorations />

        {/* 1. Upper Left: Headline & Text Block (Above Card 1) */}
        <div
          style={{
            position: 'absolute',
            top: '105px',
            left: '170px',
            zIndex: 35,
            maxWidth: '420px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            pointerEvents: 'auto',
          }}
        >
          {/* Category Tag */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span
              style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                backgroundColor: '#94a3b8',
                display: 'inline-block',
              }}
            />
            <span
              style={{
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#64748b',
              }}
            >
              SERVICES
            </span>
          </div>

          {/* Main Headline */}
          <h2
            style={{
              fontFamily: "'Syne', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: '42px',
              fontWeight: 900,
              color: '#111827',
              letterSpacing: '-0.035em',
              lineHeight: 1.08,
              margin: '0 0 12px 0',
            }}
          >
            Solutions designed<br />
            to move your ideas<br />
            <span
              style={{
                fontFamily: "'Instrument Serif', 'Playfair Display', Georgia, serif",
                fontStyle: 'italic',
                fontWeight: 400,
                color: '#7cb305',
                fontSize: '52px',
                lineHeight: 1.05,
                display: 'inline-block',
                cursor: 'default',
                transition: 'transform 0.3s ease',
              }}
              className="hover:scale-105"
            >
              forward
            </span>
          </h2>

          {/* Subtitle Description */}
          <p
            style={{
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: '13.5px',
              lineHeight: 1.6,
              color: '#64748b',
              fontWeight: 400,
              maxWidth: '335px',
              margin: '0 0 18px 0',
            }}
          >
            We combine strategy, creativity, and technology to build digital experiences that are intelligent, meaningful, and built to scale.
          </p>

          {/* CTA Action Pill Button (Sitting cleanly above Card 1) */}
          <button
            onClick={handleScrollToContact}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '6px 8px 6px 20px',
              backgroundColor: '#ffffff',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              borderRadius: '9999px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            className="hover:shadow-[0_8px_24px_rgba(0,0,0,0.09)] hover:border-black/[0.12] active:scale-98"
          >
            <span
              style={{
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: '13px',
                fontWeight: 700,
                color: '#111827',
                letterSpacing: '-0.01em',
              }}
            >
              Let's build together
            </span>
            <div
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src="/assets/cropped/17.png"
                alt="Arrow"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
          </button>
        </div>

        {/* 2. Top-Right Floating Social Proof Badge */}
        <div
          style={{
            position: 'absolute',
            top: '135px',
            left: '1000px',
            zIndex: 35,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            pointerEvents: 'auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'transform 0.3s ease',
            }}
            className="hover:scale-105"
          >
            <img
              src="/assets/cropped/8.png"
              alt="Trusted by 200+ global brands"
              style={{
                width: '185px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.09))',
              }}
            />
            <div style={{ width: '32px' }}>
              <img
                src="/assets/cropped/12.png"
                alt="Plus action"
                style={{
                  width: '100%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.07))',
                  cursor: 'pointer',
                }}
                className="hover:rotate-90 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* 3. Art-Directed Overlapping Card Stage Container */}
        <div
          style={{
            position: 'absolute',
            top: '405px',
            left: '140px',
            width: '1200px',
            height: '420px',
            zIndex: 20,
          }}
        >
          {/* Card 1: AI & Spatial Strategy (x=0, y=30, -3.5° rotation, 275×365px, z-10) */}
          <div style={{ position: 'absolute', left: '0px', top: '30px', zIndex: 10 }}>
            <ServiceCard
              iconSrc="/assets/cropped/16.png"
              title="AI & Spatial Strategy"
              description="We identify high-impact opportunities for spatial and generative AI integration directly into your product workflows."
              rotation={-3.5}
              translateY={0}
              zIndex={10}
              width={275}
              height={365}
              onLearnMore={() =>
                handleCardSelect({
                  title: 'AI & Spatial Strategy',
                  iconSrc: '/assets/cropped/16.png',
                  description:
                    'We identify high-impact opportunities for spatial and generative AI integration directly into your product workflows.',
                })
              }
            />
          </div>

          {/* Card 2: Creative Direction (x=285, y=0, 0° rotation, 285×380px, Dominant Front Card, z-30) */}
          <div style={{ position: 'absolute', left: '285px', top: '0px', zIndex: 30 }}>
            <ServiceCard
              iconSrc="/assets/cropped/18.png"
              title="Creative Direction"
              description="We architect distinct visual systems and brand guidelines that drive customer loyalty and set category standards."
              rotation={0}
              translateY={0}
              zIndex={30}
              width={285}
              height={380}
              onLearnMore={() =>
                handleCardSelect({
                  title: 'Creative Direction',
                  iconSrc: '/assets/cropped/18.png',
                  description:
                    'We architect distinct visual systems and brand guidelines that drive customer loyalty and set category standards.',
                })
              }
            />
          </div>

          {/* Card 3: Data & Architecture (x=575, y=25, +3° rotation, 275×365px, z-15) */}
          <div style={{ position: 'absolute', left: '575px', top: '25px', zIndex: 15 }}>
            <ServiceCard
              iconSrc="/assets/cropped/19.png"
              title="Data & Architecture"
              description="We turn complex technical systems into sub-second interfaces using modern full-stack frameworks and edge compute."
              rotation={3}
              translateY={0}
              zIndex={15}
              width={275}
              height={365}
              onLearnMore={() =>
                handleCardSelect({
                  title: 'Data & Architecture',
                  iconSrc: '/assets/cropped/19.png',
                  description:
                    'We turn complex technical systems into sub-second interfaces using modern full-stack frameworks and edge compute.',
                })
              }
            />
          </div>

          {/* Card 4: Team Collaboration Photo Card (x=860, y=10, -1° rotation, 275×365px) */}
          <div
            style={{
              position: 'absolute',
              left: '860px',
              top: '10px',
              width: '275px',
              height: '365px',
              borderRadius: '26px',
              overflow: 'hidden',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: teamHover
                ? '0 30px 65px -15px rgba(0,0,0,0.15)'
                : '0 20px 45px -15px rgba(0,0,0,0.08)',
              transform: `rotate(-1deg) translateY(${teamHover ? -8 : 0}px) scale(${teamHover ? 1.02 : 1})`,
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              flexShrink: 0,
              cursor: 'pointer',
              zIndex: teamHover ? 50 : 12,
            }}
            onMouseEnter={() => setTeamHover(true)}
            onMouseLeave={() => setTeamHover(false)}
            onClick={handleScrollToContact}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&auto=format&fit=crop&q=80"
              alt="Creative collaborative team at work"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                transition: 'transform 0.7s ease',
                transform: teamHover ? 'scale(1.06)' : 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.55), transparent)',
                pointerEvents: 'none',
              }}
            />

            {/* Bottom Badge: "Collaborative by nature" (Asset 15.png) */}
            <div
              style={{
                position: 'absolute',
                bottom: '18px',
                left: '16px',
                right: '16px',
                pointerEvents: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <img
                src="/assets/cropped/15.png"
                alt="Collaborative by nature"
                style={{
                  width: '175px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.3))',
                  transition: 'transform 0.3s ease',
                }}
                className="hover:scale-105"
              />
            </div>
          </div>

        </div>

        {/* 4. Bottom Floating Pulse Waveform Widget (Sitting under Card 3 / Card 4 gap) */}
        <div
          style={{
            position: 'absolute',
            top: '755px',
            left: '865px',
            zIndex: 35,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            pointerEvents: 'auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'transform 0.3s ease',
            }}
            className="hover:scale-105"
          >
            <img
              src="/assets/cropped/2.png"
              alt="Performance sparkline"
              style={{
                width: '140px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 16px 36px rgba(0,0,0,0.06))',
              }}
            />
            <div style={{ width: '30px' }}>
              <img
                src="/assets/cropped/12.png"
                alt="Plus action"
                style={{
                  width: '100%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.05))',
                  cursor: 'pointer',
                }}
                className="hover:rotate-90 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
