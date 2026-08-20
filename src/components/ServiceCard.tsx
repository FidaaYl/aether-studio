import React from 'react';

export default function ServiceCard({
  iconSrc,
  title,
  description,
  rotation = 0,
  translateY = 0,
  zIndex = 10,
  onLearnMore,
  className = '',
  width = 275,
  height = 365,
  style = {},
}: {
  iconSrc: string;
  title: string;
  description: string;
  rotation?: number;
  translateY?: number;
  zIndex?: number;
  onLearnMore?: () => void;
  className?: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        transform: `rotate(${rotation}deg) translateY(${translateY + (isHovered ? -8 : 0)}px) scale(${isHovered ? 1.02 : 1})`,
        zIndex: isHovered ? 50 : zIndex,
        background: '#ffffff',
        borderRadius: '26px',
        border: '1px solid rgba(0, 0, 0, 0.06)',
        borderBottom: '3px solid #bbf812',
        boxShadow: isHovered
          ? '0 30px 65px -15px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.04)'
          : '0 20px 45px -15px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.02)',
        padding: '26px 24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexShrink: 0,
        cursor: 'pointer',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        boxSizing: 'border-box',
        ...style,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onLearnMore}
      className={className}
    >
      {/* Top Icon Badge */}
      <div style={{ position: 'relative' }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 14,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.3s ease',
            transform: isHovered ? 'scale(1.06) rotate(4deg)' : 'none',
          }}
        >
          <img
            src={iconSrc}
            alt={title}
            style={{ width: '100%', height: '100%', objectFit: 'contain', pointerEvents: 'none' }}
          />
        </div>
      </div>

      {/* Center Text Content */}
      <div style={{ position: 'relative', margin: 'auto 0' }}>
        <h3
          style={{
            fontFamily: "'Syne', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontSize: '19px',
            fontWeight: 800,
            color: '#111827',
            letterSpacing: '-0.025em',
            lineHeight: 1.25,
            marginBottom: '8px',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontSize: '12.5px',
            lineHeight: 1.6,
            color: '#64748b',
            fontWeight: 400,
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>

      {/* Bottom Circle Action Button */}
      <div style={{ position: 'relative', paddingTop: 4 }}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onLearnMore && onLearnMore();
          }}
          aria-label={`Learn more about ${title}`}
          style={{
            width: 34,
            height: 34,
            borderRadius: '50%',
            overflow: 'hidden',
            border: 'none',
            background: 'transparent',
            padding: 0,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            transform: isHovered ? 'scale(1.1) translateX(2px)' : 'none',
          }}
        >
          <img
            src="/assets/cropped/17.png"
            alt="Arrow link"
            style={{ width: '100%', height: '100%', objectFit: 'contain', pointerEvents: 'none' }}
          />
        </button>
      </div>
    </div>
  );
}
