"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue, useSpring } from "framer-motion";


export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

 React.useEffect(() => {
  const media = window.matchMedia("(max-width: 768px)");

  const handleChange = (e: MediaQueryListEvent) => {
    setIsMobile(e.matches);
  };

  // set initial value
  setIsMobile(media.matches);

  media.addEventListener("change", handleChange);

  return () => {
    media.removeEventListener("change", handleChange);
  };
}, []);

  const scaleRange = React.useMemo(() => {
  return isMobile ? [0.95, 1] : [1.05, 1];
}, [isMobile]);

const rawRotate = useTransform(
  scrollYProgress,
  [0, 1],
  isMobile ? [0, 0] : [15, 0]
);

const rotate = useSpring(rawRotate, {
  stiffness: 130,
  damping: 25,
});

const rawScale = useTransform(scrollYProgress, [0, 1], scaleRange);

const scale = useSpring(rawScale, {
  stiffness: 130,
  damping: 25,
});
  const rawTranslate = useTransform(scrollYProgress, [0, 1], 
    isMobile ? [0, -40] : [0, -100]);

const translate = useSpring(rawTranslate, {
  stiffness: 130,
  damping: 20,
});

  return (
    <div
      className="h-[35rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: isMobile ? "none" : "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}
          isMobile={isMobile}
>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
  isMobile,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
  isMobile: boolean;
}) => {
  return (
    <motion.div
style={{
  rotateX: rotate,
  scale,
 boxShadow: isMobile
  ? "0 8px 20px rgba(0,0,0,0.18)"
  : "0 25px 60px rgba(0,0,0,0.25)",
}}
      className="max-w-5xl will-change-transform transform-gpu -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px]"
    >
      <div className=" h-full w-full  overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4 ">
        {children}
      </div>
    </motion.div>
  );
};
