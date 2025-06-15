import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Earth from "../Earth";

export default function AnimatedEarth() {
  const [showEarth, setShowEarth] = useState(false);
  const [startMove, setStartMove] = useState(false);

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

  return (
    <motion.div
      className="absolute transition-all duration-1500"
      initial={{ opacity: 0 }}
      animate={{
        opacity: showEarth ? 1 : 0,
      }}
      style={
        startMove
          ? {
              bottom: "-20%",
              right: "0%",
              translateX: "0%",
              translateY: "0%",
            }
          : {
              bottom: "50%",
              right: "50%",
              translateX: "50%",
              translateY: "50%",
            }
      }
    >
      <Earth />
    </motion.div>
  );
}
