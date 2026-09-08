import React, { useState, useEffect } from 'react';
import { ThemeMode } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Zap, Crosshair, Cpu, CheckCircle } from 'lucide-react';

interface HeroEyeScannerProps {
  theme: ThemeMode;
}

type ScanMode = 'optical' | 'revenue' | 'specs';

export const HeroEyeScanner: React.FC<HeroEyeScannerProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState(false);
  const [scanMode, setScanMode] = useState<ScanMode>('optical');
  const [calibrating, setCalibrating] = useState(false);
  const [pulseCount, setPulseCount] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized relative position (-15 to 15 px)
      const x = (e.clientX / window.innerWidth - 0.5) * 24;
      const y = (e.clientY / window.innerHeight - 0.5) * 24;
      setCoords({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const triggerCalibration = () => {
    setCalibrating(true);
    setPulseCount((c) => c + 1);
    setTimeout(() => {
      setCalibrating(false);
    }, 1200);
  };

  return (
    <div className="relative w-full max-w-[480px] flex flex-col items-center select-none">
      {/* Interactive HUD Mode Selector */}
      <div className="flex items-center gap-1.5 p-1 rounded-xl border mb-4 text-[11px] font-mono tracking-wider backdrop-blur-md z-20 transition-all">
        <button
          onClick={() => setScanMode('optical')}
          className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
            scanMode === 'optical'
              ? 'bg-[#01BDFC] text-[#00091B] font-bold shadow-[0_0_12px_rgba(1,189,252,0.4)]'
              : isDark
              ? 'text-slate-400 hover:text-white'
              : 'text-slate-600 hover:text-[#021630]'
          }`}
        >
          <Crosshair className="w-3 h-3" />
          <span>OPTICAL LOCK</span>
        </button>

        <button
          onClick={() => setScanMode('revenue')}
          className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
            scanMode === 'revenue'
              ? 'bg-[#01BDFC] text-[#00091B] font-bold shadow-[0_0_12px_rgba(1,189,252,0.4)]'
              : isDark
              ? 'text-slate-400 hover:text-white'
              : 'text-slate-600 hover:text-[#021630]'
          }`}
        >
          <Zap className="w-3 h-3" />
          <span>REVENUE RADAR</span>
        </button>

        <button
          onClick={() => setScanMode('specs')}
          className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
            scanMode === 'specs'
              ? 'bg-[#01BDFC] text-[#00091B] font-bold shadow-[0_0_12px_rgba(1,189,252,0.4)]'
              : isDark
              ? 'text-slate-400 hover:text-white'
              : 'text-slate-600 hover:text-[#021630]'
          }`}
        >
          <Cpu className="w-3 h-3" />
          <span>SYS TELEMETRY</span>
        </button>
      </div>

      {/* Main Optical Scanner Arena */}
      <div
        className="relative w-full aspect-square max-w-[420px] rounded-3xl p-6 flex items-center justify-center cursor-crosshair group"
        onMouseEnter={() => setIsFocused(true)}
        onMouseLeave={() => setIsFocused(false)}
        onClick={triggerCalibration}
      >
        {/* Outer Calibrated HUD Rings (1px hairline precision) */}
        <div className="absolute inset-0 rounded-full border border-[#01BDFC]/25 pointer-events-none" />
        <div className="absolute inset-3 rounded-full border border-dashed border-[#01BDFC]/35 animate-[spin_60s_linear_infinite] pointer-events-none" />
        <div className="absolute inset-8 rounded-full border border-[#01BDFC]/20 pointer-events-none" />
        <div className="absolute inset-16 rounded-full border border-[#01BDFC]/15 pointer-events-none" />

        {/* Dynamic Calibration Pulse Animation */}
        <AnimatePresence>
          {calibrating && (
            <motion.div
              key={`pulse-${pulseCount}`}
              initial={{ scale: 0.3, opacity: 0.9 }}
              animate={{ scale: 1.15, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute inset-0 rounded-full border-2 border-[#01BDFC] bg-[#01BDFC]/10 pointer-events-none"
            />
          )}
        </AnimatePresence>

        {/* Signature Conic Radar Sweep Beam */}
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <div className="w-full h-full animate-radar origin-center bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,rgba(1,189,252,0.18)_360deg)]" />
        </div>

        {/* Crosshair & Degrees Markings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-[1px] bg-[#01BDFC]/20" />
          <div className="absolute h-full w-[1px] bg-[#01BDFC]/20" />
        </div>

        {/* Biometric Eye Core & Interactive Iris Focus */}
        <div className="relative w-64 h-64 flex items-center justify-center">
          {/* Eye Sclera Envelope */}
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full drop-shadow-[0_0_30px_rgba(1,189,252,0.35)]"
          >
            {/* Outer Protective Optical Shield */}
            <circle
              cx="100"
              cy="100"
              r="94"
              stroke="#01BDFC"
              strokeWidth="1"
              strokeDasharray="4 8"
              strokeOpacity={isDark ? "0.4" : "0.5"}
            />

            {/* Futuristic Eye Sclera Contour */}
            <path
              d="M 16 100 Q 100 26 184 100 Q 100 174 16 100 Z"
              fill={isDark ? "#021630" : "#FFFFFF"}
              stroke={isDark ? "#FFFFFF" : "#021630"}
              strokeWidth="3.2"
              strokeOpacity={isDark ? "0.95" : "0.85"}
            />

            {/* Sclera Scanning Reticle Tracks */}
            <path
              d="M 40 100 Q 100 46 160 100 Q 100 154 40 100 Z"
              fill="none"
              stroke="#01BDFC"
              strokeWidth="1.8"
              strokeDasharray="5 5"
              strokeOpacity={isDark ? "0.55" : "0.6"}
            />

            {/* Dynamic Iris Aperture with smooth mouse tracking */}
            <g
              style={{
                transform: `translate(${coords.x * 0.9}px, ${coords.y * 0.9}px)`,
                transition: 'transform 0.12s ease-out',
              }}
            >
              {/* Outer Iris Pulsing Ring */}
              <circle
                cx="100"
                cy="100"
                r="42"
                fill="none"
                stroke="#01BDFC"
                strokeWidth="1.5"
                strokeDasharray="3 4"
                className={isFocused ? "animate-spin" : ""}
                style={{ animationDuration: '20s' }}
              />

              {/* Electric Cyan Iris Core */}
              <circle
                cx="100"
                cy="100"
                r="34"
                fill="#01BDFC"
                fillOpacity={isDark ? "0.95" : "0.9"}
                className="transition-all duration-300 group-hover:brightness-110"
              />

              {/* Optical Radial Spokes */}
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                <line
                  key={deg}
                  x1="100"
                  y1="72"
                  x2="100"
                  y2="82"
                  stroke={isDark ? "#00091B" : "#FFFFFF"}
                  strokeWidth="1.5"
                  transform={`rotate(${deg} 100 100)`}
                />
              ))}

              {/* Deep Precision Pupil */}
              <circle
                cx="100"
                cy="100"
                r={isFocused || calibrating ? 11 : 15}
                fill={isDark ? "#00091B" : "#021630"}
                className="transition-all duration-300"
              />

              {/* Specular Glint Highlight */}
              <circle
                cx="110"
                cy="90"
                r="4.5"
                fill="#FFFFFF"
              />

              {/* Dynamic Target Crosshairs in Center of Pupil */}
              <line x1="95" y1="100" x2="105" y2="100" stroke="#01BDFC" strokeWidth="1" />
              <line x1="100" y1="95" x2="100" y2="105" stroke="#01BDFC" strokeWidth="1" />
            </g>

            {/* Top & Bottom Precision Alignment Ticks */}
            <line x1="100" y1="14" x2="100" y2="30" stroke="#01BDFC" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="100" y1="170" x2="100" y2="186" stroke="#01BDFC" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="14" y1="100" x2="30" y2="100" stroke="#01BDFC" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="170" y1="100" x2="186" y2="100" stroke="#01BDFC" strokeWidth="2.5" strokeLinecap="round" />
          </svg>

          {/* Slow horizontal scanline crossing the eye aperture */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full">
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#01BDFC] to-transparent opacity-70 animate-scanline" />
          </div>
        </div>

        {/* Optical Telemetry HUD Overlay Badges */}
        <div className="absolute top-3 left-4 font-mono text-[10px] text-[#01BDFC] tracking-wider bg-[#00091B]/80 px-2 py-0.5 rounded border border-[#01BDFC]/30 backdrop-blur-md">
          <span>DEL // 28.7188° N, 77.0694° E</span>
        </div>

        <div className="absolute top-3 right-4 font-mono text-[10px] text-[#01BDFC] tracking-wider bg-[#00091B]/80 px-2 py-0.5 rounded border border-[#01BDFC]/30 backdrop-blur-md">
          <span>SLA: 99.98%</span>
        </div>

        <div className="absolute bottom-3 left-4 font-mono text-[10px] text-[#01BDFC] tracking-wider bg-[#00091B]/80 px-2 py-0.5 rounded border border-[#01BDFC]/30 backdrop-blur-md">
          <span>LCP: &lt;0.8s</span>
        </div>

        <div className="absolute bottom-3 right-4 font-mono text-[10px] text-[#01BDFC] tracking-wider bg-[#00091B]/80 px-2 py-0.5 rounded border border-[#01BDFC]/30 backdrop-blur-md flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#01BDFC] animate-ping" />
          <span>{calibrating ? 'CALIBRATING...' : isFocused ? 'OPTICAL_LOCK' : 'ACQUIRING'}</span>
        </div>
      </div>

      {/* Interactive Mode Content Strip Underneath Scanner */}
      <div className="w-full mt-3">
        <AnimatePresence mode="wait">
          {scanMode === 'optical' && (
            <motion.div
              key="optical-hud"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className={`p-3 rounded-xl border text-xs font-mono flex items-center justify-between ${
                isDark ? 'bg-[#021630]/80 border-[#01BDFC]/25' : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#01BDFC] animate-pulse" />
                <span>RETICLE FOCUS: {(Math.abs(coords.x) + Math.abs(coords.y)).toFixed(1)}° DELTA</span>
              </div>
              <span className="text-[#01BDFC] text-[11px]">CLICK EYE TO RE-CALIBRATE</span>
            </motion.div>
          )}

          {scanMode === 'revenue' && (
            <motion.div
              key="revenue-hud"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className={`p-3 rounded-xl border text-xs font-mono flex items-center justify-between ${
                isDark ? 'bg-[#021630]/80 border-[#01BDFC]/25' : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#01BDFC]" />
                <span>PROJECTED ROAS: 5.2x</span>
              </div>
              <span className="text-[#01BDFC] text-[11px]">ALGORITHMIC AD ATTRIBUTION</span>
            </motion.div>
          )}

          {scanMode === 'specs' && (
            <motion.div
              key="specs-hud"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className={`p-3 rounded-xl border text-xs font-mono flex items-center justify-between ${
                isDark ? 'bg-[#021630]/80 border-[#01BDFC]/25' : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#01BDFC]" />
                <span>SSR NEXT.JS + TAILWIND + CAPI</span>
              </div>
              <span className="text-[#01BDFC] text-[11px]">ZERO BLOAT STACK</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

