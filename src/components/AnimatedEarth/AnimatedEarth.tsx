import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Earth from "../Earth";
import { useIsMobile } from "../../hooks/useIsMobile";

export default function AnimatedEarth() {
  const [showEarth, setShowEarth] = useState(false);
  const [startMove, setStartMove] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setShowEarth(true);
    }, 500);

    const moveTimer = setTimeout(() => {
      setStartMove(true);
    }, 1500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(moveTimer);
    };
  }, []);

  const getStyles = () => {
    if (startMove) {
      return isMobile
        ? {
            bottom: "-25%",
            right: "50%",
            translateX: "50%",
            translateY: "0%",
          }
        : {
            bottom: "-55%",
            right: "0",
            translateX: "0%",
            translateY: "-50%",
          };
    }
    return isMobile
      ? {
          bottom: "-40%",
          right: "50%",
          translateX: "50%",
          translateY: "50%",
        }
      : {
          bottom: "50%",
          right: "50%",
          translateX: "50%",
          translateY: "50%",
        };
  };

  return (
    <motion.div
      className="absolute transition-all duration-1500"
      initial={{ opacity: 0 }}
      animate={{
        opacity: showEarth ? 1 : 0,
      }}
      style={getStyles()}
    >
      <Earth />
    </motion.div>
  );
}
