"use client";

import { Canvas } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Sphere,
} from "@react-three/drei";

function Node({
  position,
}: {
  position: [number, number, number];
}) {
  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <mesh position={position}>

        <sphereGeometry args={[0.12, 32, 32]} />

        <meshStandardMaterial
          color="#a5f3fc"
          emissive="#22d3ee"
          emissiveIntensity={2.5}
        />

      </mesh>
    </Float>
  );
}

function Core() {
  return (
    <Float
      speed={1.5}
      rotationIntensity={0.6}
      floatIntensity={1.5}
    >
      <Sphere args={[0.32, 64, 64]}>

        <meshStandardMaterial
          color="#c084fc"
          emissive="#a855f7"
          emissiveIntensity={2}
        />

      </Sphere>
    </Float>
  );
}

export default function CloudScene() {
  return (
    <div
      className="
        relative
        h-[420px]
        w-full
        rounded-2xl
        overflow-hidden
        border border-white/10
        bg-gradient-to-br
        from-white/[0.03]
        to-white/[0.01]
        backdrop-blur-xl
      "
    >

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08),transparent_70%)]" />

      <Canvas camera={{ position: [0, 0, 3] }}>

        <ambientLight intensity={0.7} />

        <pointLight
          position={[2, 2, 2]}
          intensity={2}
          color="#22d3ee"
        />

        <pointLight
          position={[-2, -2, 2]}
          intensity={1.5}
          color="#a855f7"
        />

        {/* Core */}
        <group position={[0, 0.1, 0]}>

          <Core />

          {/* Orbit Nodes */}
          <Node position={[-0.8, 0.5, 0]} />
          <Node position={[0.8, 0.7, 0]} />
          <Node position={[-0.7, -0.5, 0]} />
          <Node position={[0.9, -0.4, 0]} />

        </group>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.2}
        />

      </Canvas>

    </div>
  );
}