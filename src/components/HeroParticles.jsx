import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const HeroParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      className="particles-canvas"
      init={particlesInit}
      options={{
        fullScreen: false,
        background: { color: "transparent" },
        particles: {
          number: {
            value: 60,
            density: { enable: true, area: 800 }
          },
          color: { value: "#00d9ff" },
          links: {
            enable: true,
            color: "#00d9ff",
            distance: 150,
            opacity: 0.3
          },
          move: {
            enable: true,
            speed: 1
          },
          size: {
            value: { min: 1, max: 3 }
          },
          opacity: {
            value: 0.5
          }
        }
      }}
    />
  );
};

export default HeroParticles;
