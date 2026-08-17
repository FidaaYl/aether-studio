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
  width = 'w-[340px]',
  height = 'h-[390px]',
  style = {},
}) {
  return (
    <div
      style={{
        transform: `rotate(${rotation}deg) translateY(${translateY}px)`,
        zIndex,
        ...style,
      }}
      className={`aether-card relative flex flex-col justify-between ${width} ${height} p-6 sm:p-7 flex-shrink-0 cursor-pointer ${className}`}
      onClick={onLearnMore}
    >
      {/* Top Icon Badge */}
      <div className="relative">
        <div className="w-[52px] h-[52px] rounded-[16px] overflow-hidden flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:rotate-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.04)]">
          <img
            src={iconSrc}
            alt={title}
            className="w-full h-full object-contain pointer-events-none"
          />
        </div>
      </div>

      {/* Center Text Content */}
      <div className="relative my-auto">
        <h3 className="text-[21px] font-extrabold text-[#111827] tracking-tight leading-snug mb-2.5">
          {title}
        </h3>
        <p className="text-[13.5px] leading-relaxed text-slate-500 font-normal">
          {description}
        </p>
      </div>

      {/* Bottom Circle Action Button */}
      <div className="relative pt-1">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onLearnMore && onLearnMore();
          }}
          aria-label={`Learn more about ${title}`}
          className="w-[38px] h-[38px] rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:translate-x-0.5 active:scale-95 drop-shadow-[0_2px_4px_rgba(0,0,0,0.05)]"
        >
          <img
            src="/assets/cropped/17.png"
            alt="Arrow link"
            className="w-full h-full object-contain pointer-events-none"
          />
        </button>
      </div>
    </div>
  );
}
