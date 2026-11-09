import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'light' | 'dark';
  textColor?: string;
  subtitleColor?: string;
  subtitle?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  emblemVariant?: 'light' | 'dark';
}

/**
 * Official Logo for GEOVERSED Playground AI Solution OPC Pvt LTD
 * Precision SVG vector rendering matching the official brand identity:
 * - Emblem on left: Stylized "A" / mountain peak with dynamic upward arrow cutout,
 *   deep navy left wing, bronze upper peak & right leg, and surveyor crosshair reticle.
 * - Wordmark on right: Bold uppercase "GEOVERSED" and "Playground AI Solution OPC Pvt LTD"
 */
export const Logo: React.FC<LogoProps> = ({
  className = '',
  showText = true,
  variant = 'dark',
  textColor,
  subtitleColor,
  subtitle = 'Playground AI Solution OPC Pvt LTD',
  size = 'md',
  emblemVariant,
}) => {
  // Height and scale configurations for responsive sizing
  const sizeConfigs = {
    sm: {
      height: 'h-8 sm:h-9',
      emblemWidth: 36,
      emblemHeight: 36,
      titleSize: 'text-base sm:text-lg',
      subSize: 'text-[9px] sm:text-[10px]',
      gap: 'gap-2 sm:gap-2.5',
    },
    md: {
      height: 'h-10 sm:h-12',
      emblemWidth: 46,
      emblemHeight: 46,
      titleSize: 'text-lg sm:text-xl md:text-2xl',
      subSize: 'text-[10px] sm:text-xs md:text-[13px]',
      gap: 'gap-2.5 sm:gap-3',
    },
    lg: {
      height: 'h-12 sm:h-14',
      emblemWidth: 54,
      emblemHeight: 54,
      titleSize: 'text-xl sm:text-2xl md:text-3xl',
      subSize: 'text-xs sm:text-sm',
      gap: 'gap-3 sm:gap-4',
    },
    xl: {
      height: 'h-16 sm:h-20',
      emblemWidth: 68,
      emblemHeight: 68,
      titleSize: 'text-2xl sm:text-3xl md:text-4xl',
      subSize: 'text-sm sm:text-base',
      gap: 'gap-4 sm:gap-5',
    },
  };

  const currentSize = sizeConfigs[size];

  // Palette adaptation for Light (Header) vs Dark (Footer) backgrounds
  const isDarkBg = variant === 'light';
  const isLightEmblem = emblemVariant ? emblemVariant === 'light' : isDarkBg;
  
  const emblemColors = {
    navy: isLightEmblem ? '#FFFFFF' : '#1A3258',
    bronze: isLightEmblem ? '#D4A76A' : '#946E44',
  };

  const colors = {
    titleText: textColor || (isDarkBg ? 'text-white' : 'text-[#1A3258]'),
    subText: isDarkBg ? 'text-[#D4A76A]' : 'text-[#87A9FF]',
  };

  return (
    <div
      className={`inline-flex items-center ${currentSize.gap} ${className} select-none group`}
      aria-label={`GEOVERSED ${subtitle}`}
    >
      {/* Precision Vector Emblem Graphic */}
      <div
        className={`relative shrink-0 flex items-center justify-center transition-all duration-300 ${
          isLightEmblem && !isDarkBg
            ? 'bg-[#0A0F1D] p-1 sm:p-1.5 rounded-xl border border-slate-800/80 shadow-xs'
            : ''
        }`}
      >
        <svg
          width={currentSize.emblemWidth}
          height={currentSize.emblemHeight}
          viewBox="0 0 68 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-[1.02]"
        >
          {/* Lower Left Navy Wing of "A" */}
          <path
            d="M 5 56 L 3 56 L 18 26 L 24 37 L 16 50 L 20 56 L 5 56 Z"
            fill={emblemColors.navy}
          />

          {/* Upper Peak and Right Downward Leg of "A" in Bronze */}
          <path
            d="M 28 5 L 34 5 L 59 56 L 45 56 L 40 45 L 28 45 L 24 51 L 28 51 L 24 56 L 16 56 L 30 27 L 34 27 L 26 40 L 37 40 L 32 28 L 28 5 Z"
            fill={emblemColors.bronze}
          />

          {/* Surveyor Reticle / Geospatial Crosshairs Target */}
          <g transform="translate(47, 23)">
            {/* Outer Bronze Circle */}
            <circle
              cx="0"
              cy="0"
              r="13.5"
              stroke={emblemColors.bronze}
              strokeWidth="2.4"
              fill="none"
            />

            {/* 4 Cardinal Crosshair Sight Lines */}
            <line
              x1="0"
              y1="-18"
              x2="0"
              y2="-12"
              stroke={emblemColors.bronze}
              strokeWidth="2"
              strokeLinecap="square"
            />
            <line
              x1="0"
              y1="12"
              x2="0"
              y2="18"
              stroke={emblemColors.bronze}
              strokeWidth="2"
              strokeLinecap="square"
            />
            <line
              x1="-18"
              y1="0"
              x2="-12"
              y2="0"
              stroke={emblemColors.bronze}
              strokeWidth="2"
              strokeLinecap="square"
            />
            <line
              x1="12"
              y1="0"
              x2="18"
              y2="0"
              stroke={emblemColors.bronze}
              strokeWidth="2"
              strokeLinecap="square"
            />

            {/* Inner Concentric Circle */}
            <circle
              cx="0"
              cy="0"
              r="8.8"
              stroke={emblemColors.navy}
              strokeWidth="2.2"
              fill="none"
            />

            {/* Center Sighting Bullseye Dot */}
            <circle
              cx="0"
              cy="0"
              r="2.8"
              fill={emblemColors.navy}
            />
          </g>
        </svg>
      </div>

      {/* Official Typography Lockup */}
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          {/* Main Brand Title: GEOVERSED */}
          <span
            className={`font-['Poppins'] font-extrabold tracking-wide uppercase ${colors.titleText} ${currentSize.titleSize}`}
            style={{ letterSpacing: '0.035em' }}
          >
            GEOVERSED
          </span>

          {/* Subtitle */}
          <span
            className={`font-['Poppins'] font-medium tracking-normal mt-0.5 sm:mt-1 ${currentSize.subSize} ${
              subtitleColor?.startsWith('text-') ? subtitleColor : ''
            }`}
            style={{
              letterSpacing: '0.01em',
              color: subtitleColor
                ? (subtitleColor.startsWith('text-') ? undefined : subtitleColor)
                : (isDarkBg ? '#D4A76A' : '#87A9FF'),
            }}
          >
            {subtitle}
          </span>
        </div>
      )}
    </div>
  );
};
