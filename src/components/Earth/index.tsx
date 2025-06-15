import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import Counter from "../Counter";

export default function Earth({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current as HTMLCanvasElement, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 0.8,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1843137254901961, 0.12156862745098039, 0.4392156862745098],
      markerColor: [255, 255, 255],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.005;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);
  return (
    <div className="relative">
      <div className="text-white absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <Counter />
          <div className="text-sm mt-1">NUMBER OF TRADES</div>
        </div>
      </div>
      <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, aspectRatio: 1 }}
        className={className}
      />
    </div>
  );
}
