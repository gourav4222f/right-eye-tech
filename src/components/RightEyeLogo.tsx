import React from 'react';
import { ThemeMode } from '../types';

interface RightEyeLogoProps {
  theme: ThemeMode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'mark' | 'badge' | 'emblem';
}

export const RightEyeLogo: React.FC<RightEyeLogoProps> = ({
  theme,
  className = '',
  size = 'md',
  variant = 'full',
}) => {
  const isDark = theme === 'dark';

  const dimensions = {
    sm: { height: 32, iconSize: 26, fontSize: 'text-base', subSize: 'text-[9px]' },
    md: { height: 40, iconSize: 34, fontSize: 'text-xl', subSize: 'text-[10px]' },
    lg: { height: 56, iconSize: 48, fontSize: 'text-3xl', subSize: 'text-xs' },
    xl: { height: 72, iconSize: 64, fontSize: 'text-4xl', subSize: 'text-sm' },
  }[size];

  // Standalone Optical Mark SVG
  const EyeMark = (
    <div
      className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0"
      style={{ width: dimensions.iconSize, height: dimensions.iconSize }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_12px_rgba(1,189,252,0.45)]"
      >
        {/* Outer Calibrated Reticle Ring */}
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="#01BDFC"
          strokeWidth="1.2"
          strokeDasharray="4 6"
          strokeOpacity={isDark ? "0.55" : "0.65"}
        />

        {/* Secondary Inner Precision Ring */}
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#01BDFC"
          strokeWidth="0.75"
          strokeOpacity={isDark ? "0.3" : "0.4"}
        />

        {/* Outer Optical Contour / Geometric Sclera */}
        <path
          d="M 8 50 Q 50 14 92 50 Q 50 86 8 50 Z"
          stroke={isDark ? "#FFFFFF" : "#021630"}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill={isDark ? "#021630" : "#FFFFFF"}
        />

        {/* Inner Geometric Aperture Accent */}
        <path
          d="M 28 50 Q 50 25 72 50 Q 50 75 28 50 Z"
          stroke="#01BDFC"
          strokeWidth="2"
          strokeDasharray="5 3"
          fill={isDark ? "rgba(1,189,252,0.06)" : "rgba(1,189,252,0.08)"}
        />

        {/* Glowing Electric Cyan Iris */}
        <circle
          cx="50"
          cy="50"
          r="18"
          fill="#01BDFC"
          className="animate-pulse"
        />

        {/* Biometric Aperture Spokes */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <line
            key={deg}
            x1="50"
            y1="34"
            x2="50"
            y2="38"
            stroke={isDark ? "#00091B" : "#FFFFFF"}
            strokeWidth="1.5"
            transform={`rotate(${deg} 50 50)`}
          />
        ))}

        {/* Precision Pupil Core */}
        <circle
          cx="50"
          cy="50"
          r="7.5"
          fill={isDark ? "#00091B" : "#021630"}
        />

        {/* Optical Specular Glint */}
        <circle
          cx="54.5"
          cy="45.5"
          r="2.5"
          fill="#FFFFFF"
        />

        {/* HUD Targeting Crosshair Notches */}
        <line x1="50" y1="18" x2="50" y2="26" stroke="#01BDFC" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="50" y1="74" x2="50" y2="82" stroke="#01BDFC" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="18" y1="50" x2="26" y2="50" stroke="#01BDFC" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="74" y1="50" x2="82" y2="50" stroke="#01BDFC" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    </div>
  );

  if (variant === 'mark') {
    return EyeMark;
  }

  if (variant === 'emblem' || variant === 'badge') {
    return (
      <div
        className={`inline-flex items-center gap-3 px-3.5 py-2 rounded-xl border backdrop-blur-md select-none transition-all ${
          isDark
            ? 'bg-[#00091B]/80 border-[#01BDFC]/35 shadow-[0_0_20px_rgba(1,189,252,0.15)] text-white'
            : 'bg-white/90 border-slate-200 shadow-sm text-[#021630]'
        } ${className}`}
      >
        {EyeMark}
        <div className="flex flex-col text-left leading-none">
          <span className={`font-display font-bold tracking-wider uppercase ${dimensions.fontSize}`}>
            RIGHT<span className="text-[#01BDFC] ml-1">EYE</span>
          </span>
          <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-[#01BDFC] mt-0.5">
            TECHNOLOGY // OPTICAL INTELLIGENCE
          </span>
        </div>
      </div>
    );
  }

  // Default 'full' variant lockup
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {EyeMark}
      <div className="flex flex-col leading-none text-left">
        <div className="flex items-center gap-1">
          <span
            className={`font-display font-bold tracking-wider uppercase ${dimensions.fontSize} ${
              isDark ? 'text-white' : 'text-[#021630]'
            }`}
          >
            RIGHT<span className="text-[#01BDFC] ml-1">EYE</span>
          </span>
        </div>
        <span
          className={`font-mono font-medium tracking-[0.22em] uppercase ${dimensions.subSize} ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          TECHNOLOGY
        </span>
      </div>
    </div>
  );
};

