import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function StarfieldSection() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current?.appendChild(renderer.domElement);

    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 7000;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 2000;
    }
    starsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff });
    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    camera.position.z = 500;

    const animate = () => {
      requestAnimationFrame(animate);
      starField.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative h-[400px] bg-black overflow-hidden">
      <div ref={canvasRef} className="absolute inset-0 z-0" />
    </div>
  );
}
