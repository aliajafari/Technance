import { useRef } from "react";
import { motion } from "framer-motion";
import Testimonials from "../Testimonials";
import StarfieldSection from "../Starfield";
import Header from "../Header/Header";
import AnimatedEarth from "../AnimatedEarth/AnimatedEarth";

export default function GlobalTrade() {
  const ref = useRef<HTMLDivElement>(null);
  const starfieldRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div ref={ref} className="relative bg-black pt-4 overflow-hidden">
      <Header />
      <div className="w-full">
        <Testimonials />
        <Testimonials toRight />
      </div>
      <div ref={starfieldRef} className="w-full">
        <StarfieldSection />
      </div>
      <AnimatedEarth />
    </motion.div>
  );
}
