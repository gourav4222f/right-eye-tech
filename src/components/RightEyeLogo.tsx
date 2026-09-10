import React from 'react';
import { ThemeMode } from '../types';

interface RightEyeLogoProps {
  theme: ThemeMode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'mark' | 'badge' | 'emblem';
  showTagline?: boolean;
}

export const RightEyeLogo: React.FC<RightEyeLogoProps> = ({
  theme,
  className = '',
  size = 'md',
  variant = 'full',
  showTagline,
}) => {
  const isDark = theme === 'dark';

  // Proportional dimensional scale
  const config = {
    sm: {
      markWidth: 32,
      markHeight: 32,
      primaryText: 'text-sm sm:text-base font-extrabold',
      dashWidth: 'w-2.5 sm:w-3 h-1',
      secondaryText: 'text-[9px] sm:text-[10px] tracking-[0.14em]',
      taglineText: 'text-[7.5px] sm:text-[8px] tracking-[0.08em]',
      gap: 'gap-2',
    },
    md: {
      markWidth: 42,
      markHeight: 42,
      primaryText: 'text-lg sm:text-xl font-extrabold',
      dashWidth: 'w-3 sm:w-3.5 h-1.5',
      secondaryText: 'text-[11px] sm:text-[12px] tracking-[0.16em]',
      taglineText: 'text-[8.5px] sm:text-[9.5px] tracking-[0.08em]',
      gap: 'gap-2.5',
    },
    lg: {
      markWidth: 54,
      markHeight: 54,
      primaryText: 'text-2xl sm:text-3xl font-extrabold',
      dashWidth: 'w-4 sm:w-5 h-2',
      secondaryText: 'text-[13px] sm:text-[14px] tracking-[0.18em]',
      taglineText: 'text-[10px] sm:text-[11px] tracking-[0.1em]',
      gap: 'gap-3.5',
    },
    xl: {
      markWidth: 70,
      markHeight: 70,
      primaryText: 'text-3xl sm:text-4xl font-extrabold',
      dashWidth: 'w-5 sm:w-6 h-2.5',
      secondaryText: 'text-[16px] sm:text-[18px] tracking-[0.2em]',
      taglineText: 'text-[12px] sm:text-[13px] tracking-[0.12em]',
      gap: 'gap-4',
    },
  }[size];

  // Show tagline for lg and xl by default, or when explicitly requested
  const displayTagline = showTagline !== undefined ? showTagline : (size === 'lg' || size === 'xl');

  // Primary R letter body color (White in dark theme, Deep Navy in light theme)
  const rBodyColor = isDark ? '#FFFFFF' : '#00091B';
  const textColor = isDark ? 'text-white' : 'text-[#00091B]';
  const subTextColor = isDark ? 'text-slate-300' : 'text-slate-700';
  const taglineColor = isDark ? 'text-slate-400' : 'text-slate-600';

  // Precision vector SVG of the stylized 'R' with embedded eye & bottom-left cyan wedge
  const EyeMark = (
    <div
      className="relative flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
      style={{ width: config.markWidth, height: config.markHeight }}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_12px_rgba(1,189,252,0.35)]"
        aria-hidden="true"
      >
        <defs>
          <filter id={`eye-glow-${size}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="glow" />
            <feComposite in="SourceGraphic" in2="glow" operator="over" />
          </filter>
        </defs>

        {/* 1. Main R Body Silhouette */}
        <path
          d="M 14 12 L 115 12 C 158 12 188 38 188 78 C 188 110 162 130 130 138 L 188 190 L 136 190 L 88 142 L 56 142 L 56 190 L 14 190 Z"
          fill={rBodyColor}
        />

        {/* 2. Distinctive Cyan Accent Wedge at Bottom-Left Corner of R */}
        <polygon
          points="14,130 56,155 56,190 14,190"
          fill="#01BDFC"
        />

        {/* 3. Eye Cutout Inside the Upper Bowl of the R */}
        <g>
          {/* Sclera Almond Contour (Dark contrast background) */}
          <path
            d="M 48 78 C 68 46, 130 46, 152 78 C 130 110, 68 110, 48 78 Z"
            fill="#00091B"
            stroke={isDark ? "none" : "#01BDFC"}
            strokeWidth={isDark ? "0" : "1.5"}
          />

          {/* Electric Cyan Iris */}
          <circle
            cx="100"
            cy="78"
            r="22"
            fill="#01BDFC"
            filter={`url(#eye-glow-${size})`}
          />

          {/* Dark Pupil Core */}
          <circle
            cx="100"
            cy="78"
            r="11"
            fill="#00091B"
          />

          {/* Specular Light Reflection Glint */}
          <circle
            cx="106"
            cy="72"
            r="3.5"
            fill="#FFFFFF"
          />
        </g>
      </svg>
    </div>
  );

  // Variant: Standalone mark
  if (variant === 'mark') {
    return EyeMark;
  }

  // Variant: Pill badge / Emblem
  if (variant === 'emblem' || variant === 'badge') {
    return (
      <div
        className={`inline-flex items-center ${config.gap} px-3.5 py-2 rounded-xl border backdrop-blur-md select-none transition-all ${
          isDark
            ? 'bg-[#00091B]/80 border-[#01BDFC]/35 shadow-[0_0_20px_rgba(1,189,252,0.15)] text-white'
            : 'bg-white/90 border-slate-200 shadow-sm text-[#00091B]'
        } ${className}`}
      >
        {EyeMark}
        <div className="flex flex-col text-left leading-none">
          <div className="flex items-center gap-1.5">
            <span className={`font-display font-extrabold tracking-wider uppercase ${config.primaryText} ${textColor}`}>
              RIGHT
            </span>
            <span className={`${config.dashWidth} bg-[#01BDFC] rounded-sm shrink-0 inline-block`} />
            <span className={`font-display font-extrabold tracking-wider uppercase ${config.primaryText} ${textColor}`}>
              EYE
            </span>
          </div>
          <span className="text-[9.5px] font-mono tracking-[0.24em] uppercase text-[#01BDFC] mt-1 font-semibold">
            TECHNOLOGY
          </span>
        </div>
      </div>
    );
  }

  // Default 'full' horizontal lockup as requested
  return (
    <div className={`inline-flex items-center ${config.gap} select-none ${className}`}>
      {EyeMark}
      <div className="flex flex-col text-left leading-tight">
        {/* Line 1: RIGHT - EYE */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className={`font-display ${config.primaryText} tracking-wider uppercase ${textColor}`}>
            RIGHT
          </span>
          <span className={`${config.dashWidth} bg-[#01BDFC] rounded-sm shrink-0 inline-block shadow-[0_0_8px_rgba(1,189,252,0.6)]`} />
          <span className={`font-display ${config.primaryText} tracking-wider uppercase ${textColor}`}>
            EYE
          </span>
        </div>

        {/* Line 2: Technology */}
        <div className={`font-display font-medium ${config.secondaryText} ${subTextColor} mt-0.5`}>
          Technology
        </div>

        {/* Line 3: Digital Solutions & Business Excellence (Tagline) */}
        {displayTagline && (
          <div className={`font-sans font-medium ${config.taglineText} ${taglineColor} mt-1 whitespace-nowrap`}>
            Digital Solutions <span className="text-[#01BDFC] font-bold">&amp;</span> Business Excellence
          </div>
        )}
      </div>
    </div>
  );
};
