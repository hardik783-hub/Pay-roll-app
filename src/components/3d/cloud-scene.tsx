"use client";

import { Canvas } from "@react-three/fiber";

import {
  Float,
  OrbitControls,
  Sphere,
  Line,
  Stars,
  Html,
} from "@react-three/drei";

function Core() {
  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <Sphere args={[0.75, 64, 64]}>

        <meshStandardMaterial
          color="#c084fc"
          emissive="#a855f7"
          emissiveIntensity={2}
        />

      </Sphere>
    </Float>
  );
}

function OrbitRing() {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>

      <torusGeometry args={[1.8, 0.015, 16, 100]} />

      <meshStandardMaterial
        color="#22d3ee"
        emissive="#22d3ee"
        emissiveIntensity={2}
      />

    </mesh>
  );
}

function Node({
  position,
  label,
}: {
  position: [number, number, number];
  label: string;
}) {
  return (
    <Float
      speed={3}
      rotationIntensity={2}
      floatIntensity={3}
    >

      <group position={position}>

        {/* Node */}
        <mesh>

          <sphereGeometry args={[0.18, 32, 32]} />

          <meshStandardMaterial
            color="#a5f3fc"
            emissive="#22d3ee"
            emissiveIntensity={3}
          />

        </mesh>

        {/* Label */}
        <Html distanceFactor={10}>

          <div
            className="
              px-3 py-1
              rounded-lg
              border border-cyan-400/20
              bg-black/70
              backdrop-blur-xl
              text-[11px]
              text-cyan-200
              whitespace-nowrap
              shadow-[0_0_20px_rgba(34,211,238,0.15)]
            "
          >
            {label}
          </div>

        </Html>

      </group>

    </Float>
  );
}

export default function CloudScene() {

  const nodes: [number, number, number][] = [
    [-2.2, 1.4, 0],
    [2.4, 1.1, 0],
    [-2, -1.5, 0],
    [2.3, -1.2, 0],
    [0, 2.2, 0],
    [0, -2.1, 0],
  ];

  const labels = [
    "Lambda Cluster",
    "SES Gateway",
    "Worker Fleet",
    "Analytics Node",
    "Payroll Core",
    "PDF Service",
  ];

  return (
    <div
      className="
        relative
        h-[620px]
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_70%)]" />

      {/* Header */}
      <div className="absolute top-6 left-6 z-20">

        <h2 className="text-2xl font-semibold tracking-tight">
          AI Infrastructure Mesh
        </h2>

        <p className="text-sm text-gray-400 mt-1">
          Distributed realtime payroll compute topology
        </p>

      </div>

      <Canvas camera={{ position: [0, 0, 7] }}>

        {/* Lighting */}
        <ambientLight intensity={0.7} />

        <pointLight
          position={[3, 3, 3]}
          intensity={3}
          color="#22d3ee"
        />

        <pointLight
          position={[-3, -3, 3]}
          intensity={2}
          color="#a855f7"
        />

        {/* Stars */}
        <Stars
          radius={50}
          depth={20}
          count={2500}
          factor={2}
          saturation={0}
          fade
          speed={1}
        />

        <group>

          {/* Core */}
          <Core />

          {/* Orbit Ring */}
          <OrbitRing />

          {/* Nodes */}
          {nodes.map((pos, index) => (
            <Node
              key={index}
              position={pos}
              label={labels[index]}
            />
          ))}

          {/* Connection Lines */}
          {nodes.map((pos, index) => (
            <Line
              key={index}
              points={[
                [0, 0, 0],
                pos,
              ]}
              color="#22d3ee"
              lineWidth={1}
              transparent
              opacity={0.25}
            />
          ))}

          {/* Energy Pulses */}
          {nodes.map((pos, index) => (
            <Float
              key={`pulse-${index}`}
              speed={4}
              rotationIntensity={0}
              floatIntensity={0}
            >

              <mesh
                position={[
                  pos[0] * 0.5,
                  pos[1] * 0.5,
                  0,
                ]}
              >

                <sphereGeometry args={[0.05, 16, 16]} />

                <meshStandardMaterial
                  color="#22d3ee"
                  emissive="#22d3ee"
                  emissiveIntensity={4}
                />

              </mesh>

            </Float>
          ))}

        </group>

        {/* Camera */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
        />

      </Canvas>

    </div>
  );
}