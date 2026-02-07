'use client';

import { cn } from "../../lib/utils";

type KineticDotsLoaderProps = {
  className?: string;
};

export default function KineticDotsLoader({ className }: KineticDotsLoaderProps) {
  const dots = 4;

  return (
    <div className={cn("kdl-root flex items-center justify-center min-h-[250px] p-8 bg-slate-950/0", className)}>
      <div className="kdl-row flex gap-5">
        {[...Array(dots)].map((_, i) => (
          <div
            key={i}
            className="kdl-col relative flex flex-col items-center justify-end h-20 w-6"
          >
            <div
              className="kdl-dot relative w-5 h-5 z-10"
              style={{
                animation: "gravity-bounce 1.4s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite",
                animationDelay: `${i * 0.15}s`,
                willChange: "transform"
              }}
            >
              <div
                className="kdl-ball w-full h-full rounded-full bg-gradient-to-b from-cyan-300 to-blue-600 shadow-[0_0_15px_rgba(6,182,212,0.6)]"
                style={{
                  animation: "rubber-morph 1.4s linear infinite",
                  animationDelay: `${i * 0.15}s`,
                  willChange: "transform"
                }}
              />

              <div className="kdl-highlight absolute top-1 left-1 w-1.5 h-1.5 bg-white/60 rounded-full blur-[0.5px]" />
            </div>

            <div
              className="kdl-ripple absolute bottom-0 w-10 h-3 border border-cyan-500/30 rounded-[100%] opacity-0"
              style={{
                animation: "ripple-expand 1.4s linear infinite",
                animationDelay: `${i * 0.15}s`
              }}
            />

            <div
              className="kdl-shadow absolute -bottom-1 w-5 h-1.5 rounded-[100%] bg-cyan-500/40 blur-sm"
              style={{
                animation: "shadow-breathe 1.4s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite",
                animationDelay: `${i * 0.15}s`
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
