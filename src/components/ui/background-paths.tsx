"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/* ================================
   FLOATING PATHS (BACKGROUND)
================================ */
function FloatingPaths({ direction }: { direction: 1 | -1 }) {
  const paths = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    d: `
      M ${-800 + i * 40 * direction} ${-200 + i * 30}
      C ${-400 + i * 50 * direction} ${200 - i * 40},
        ${400 - i * 60 * direction} ${600 + i * 30},
        ${1200 - i * 80 * direction} ${1000 - i * 20}
    `,
    width: 1.6 + i * 0.08,
    opacity: 0.75 - i * 0.02,
  }));

  return (
    <div
      className="pointer-events-none"
      style={{ position: "absolute", inset: 0 }}
    >
      <svg
        style={{ width: "100%", height: "100%", display: "block" }}
        viewBox="-800 -400 2400 1800"
        preserveAspectRatio="none"
        fill="none"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="rgba(0, 217, 255, 1)"
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            strokeLinecap="round"
            initial={{
              pathLength: 0,
              strokeDasharray: 1,
              strokeDashoffset: 1,
            }}
            animate={{
              pathLength: 1,
              strokeDashoffset: [1, 0],
              opacity: [
                path.opacity,
                path.opacity + 0.2,
                path.opacity,
              ],
            }}
            transition={{
              duration: 26 + Math.random() * 12,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

/* ================================
   BACKGROUND PATHS WRAPPER
================================ */
export function BackgroundPaths({
  title = "DanceCode Creative Motion",
  showContent = true,
  className,
}: {
  title?: string;
  showContent?: boolean;
  className?: string;
}) {
  const words = title.split(" ");

  return (
    <section
      className={cn(
        showContent
          ? "relative w-full min-h-screen overflow-hidden bg-white dark:bg-neutral-950"
          : "relative w-full h-full overflow-hidden",
        className
      )}
    >
      {/* Animated Paths */}
      <FloatingPaths direction={1} />
      <FloatingPaths direction={-1} />

      {/* Foreground Content */}
      {showContent && (
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="max-w-5xl"
          >
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight">
              {words.map((word, wi) => (
                <span key={wi} className="inline-block mr-4 last:mr-0">
                  {word.split("").map((char, ci) => (
                    <motion.span
                      key={`${wi}-${ci}`}
                      initial={{ y: 120, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: wi * 0.12 + ci * 0.04,
                        type: "spring",
                        stiffness: 160,
                        damping: 24,
                      }}
                      className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-300"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>
          </motion.div>
        </div>
      )}
    </section>
  );
}
