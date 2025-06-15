import "./App.css";
import GlobalTrade from "./components/GlobalTrade";
import { ReactLenis } from "lenis/react";
import { motion, useScroll, useTransform } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -500]);

  return (
    <>
      <ReactLenis root options={{ duration: 1, smoothWheel: true }} />
      <div className="bg-black">
        <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-t from-black/30 via-indigo-950 to-indigo-950 welcome px-4 sm:px-6 md:px-8">
          <motion.h2
            className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center leading-tight"
            style={{ opacity, y }}
          >
            Welcome to Global Trade Technance
          </motion.h2>
        </div>
        <GlobalTrade />
      </div>
    </>
  );
}

export default App;
