'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

interface NodeData {
  position: [number, number, number];
  type: 'start' | 'process' | 'decision' | 'end' | 'data';
  delay: number;
}

const nodeColors = {
  start: 0x4f5de5,
  process: 0x637bf0,
  decision: 0xf59e0b,
  end: 0x10b981,
  data: 0x8b5cf6,
} as const;

const nodeLabels = {
  start: 'Inicio',
  process: 'Tarea',
  decision: 'Decisión',
  end: 'Fin',
  data: 'Dato',
} as const;

function generateNodes(): NodeData[] {
  return [
    { position: [-4, 1.5, -1], type: 'start', delay: 0 },
    { position: [-1, 2, 0], type: 'process', delay: 0.3 },
    { position: [2, 1.5, -0.5], type: 'decision', delay: 0.6 },
    { position: [4, 2.5, 0], type: 'process', delay: 0.9 },
    { position: [4, -1, 0], type: 'process', delay: 1.2 },
    { position: [1, -2, 0.5], type: 'data', delay: 1.5 },
    { position: [-2, -1.5, -1], type: 'process', delay: 1.8 },
    { position: [-4, -0.5, 1], type: 'end', delay: 2.1 },
    { position: [0, 0, 2.5], type: 'data', delay: 0.5 },
    { position: [3, 0, -2.5], type: 'data', delay: 1 },
    { position: [-1, 0.5, -2.5], type: 'process', delay: 1.3 },
    { position: [2, -1.5, -2], type: 'decision', delay: 1.6 },
  ];
}

const NODES_DATA = generateNodes();

function getConnections(nodes: NodeData[]): [number, number][] {
  const connections: [number, number][] = [];
  const CONNECTION_DISTANCE = 3.5;
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dist = new THREE.Vector3(...nodes[i].position).distanceTo(
        new THREE.Vector3(...nodes[j].position)
      );
      if (dist < CONNECTION_DISTANCE) {
        connections.push([i, j]);
      }
    }
  }
  return connections;
}

const CONNECTIONS = getConnections(NODES_DATA);

function FlowLine({ start, end, color, delay }: {
  start: THREE.Vector3;
  end: THREE.Vector3;
  color: number;
  delay: number;
}) {
  const points = useMemo(() => {
    const curve = new THREE.QuadraticBezierCurve3(
      start.clone(),
      new THREE.Vector3()
        .addVectors(start, end)
        .multiplyScalar(0.5)
        .add(new THREE.Vector3(0, 0.5, 0)),
      end.clone()
    );
    return curve.getPoints(30);
  }, [start, end]);

  const geometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);
  const material = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color,
        transparent: true,
        opacity: 0.35,
      }),
    [color]
  );

  const lineRef = useRef<THREE.Line | null>(null);
  const progress = useRef(0);

  useFrame((_, dt) => {
    if (!lineRef.current) return;
    progress.current += dt * 0.35;
    if (progress.current > 1 + delay * 0.08) progress.current = -delay * 0.08;
    
    const positions = geometry.attributes.position.array as Float32Array;
    const count = positions.length / 3;
    const visibleCount = Math.floor(count * Math.max(0, Math.min(1, progress.current * 2.5)));
    
    for (let i = visibleCount; i < count; i++) {
      positions[i * 3 + 1] = -100;
    }
    geometry.attributes.position.needsUpdate = true;
  });

  return <primitive ref={lineRef} object={new THREE.Line(geometry, material)} />;
}

function ProcessNode({
  position,
  type,
  delay,
}: {
  position: [number, number, number];
  type: NodeData['type'];
  delay: number;
}) {
  const groupRef = useRef<THREE.Group>(null!);
  const scaleRef = useRef(1);
  const targetScale = useRef(1);

  useFrame((_, dt) => {
    if (!groupRef.current) return;
    const time = performance.now() * 0.001;
    const pulse = Math.sin(time * 1.5 + delay * 2) * 0.15 + 1;
    targetScale.current = pulse;
    scaleRef.current += (targetScale.current - scaleRef.current) * dt * 3;
    groupRef.current.scale.setScalar(scaleRef.current);
  });

  const color = nodeColors[type];

  return (
    <group ref={groupRef} position={position}>
      <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.12}>
        <mesh>
          {type === 'decision' ? (
            <>
              <octahedronGeometry args={[0.55, 0]} />
              <meshStandardMaterial
                color={color}
                metalness={0.1}
                roughness={0.3}
                emissive={color}
                emissiveIntensity={0.25}
              />
            </>
          ) : type === 'data' ? (
            <>
              <boxGeometry args={[0.65, 0.65, 0.65]} />
              <meshStandardMaterial
                color={color}
                metalness={0.3}
                roughness={0.4}
                emissive={color}
                emissiveIntensity={0.2}
              />
            </>
          ) : type === 'start' || type === 'end' ? (
            <>
              <sphereGeometry args={[0.6, 32, 32]} />
              <meshStandardMaterial
                color={color}
                metalness={0.0}
                roughness={0.3}
                emissive={color}
                emissiveIntensity={0.3}
              />
            </>
          ) : (
            <>
              <torusGeometry args={[0.5, 0.18, 16, 32]} />
              <meshStandardMaterial
                color={color}
                metalness={0.2}
                roughness={0.3}
                emissive={color}
                emissiveIntensity={0.2}
              />
            </>
          )}
        </mesh>
      </Float>

      <Html
        transform
        position={[0, -1.2, 0]}
        style={{
          pointerEvents: 'none',
          fontSize: '10px',
          fontWeight: 600,
          color: '#4f5de5',
          textShadow: '0 0 8px rgba(79, 93, 229, 0.9)',
          whiteSpace: 'nowrap',
          opacity: 0.9,
        }}
      >
        {nodeLabels[type]}
      </Html>

      <mesh
        geometry={new THREE.SphereGeometry(1.0, 16, 16)}
        material={new THREE.MeshBasicMaterial({
          transparent: true,
          opacity: 0.06,
          color,
          side: THREE.BackSide,
          depthWrite: false,
        })}
      />
    </group>
  );
}

export function ProcessSceneCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 35 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
    >
      <fog attach="fog" args={[0x0f172a, 5, 18]} />

      <ambientLight intensity={0.7} color={0xffffff} />
      <directionalLight position={[5, 10, 7]} intensity={1.1} color={0xffffff} />
      <directionalLight position={[-5, -5, -5]} intensity={0.4} color={0x4f5de5} />
      <pointLight position={[0, 3, 5]} intensity={0.6} color={0x4f5de5} distance={20} decay={2} />
      <pointLight position={[0, -3, -5]} intensity={0.3} color={0x10b981} distance={20} decay={2} />

      {CONNECTIONS.map(([a, b]) => {
        const nodeA = NODES_DATA[a];
        const nodeB = NODES_DATA[b];
        const midDelay = (nodeA.delay + nodeB.delay) / 2;
        return (
          <FlowLine
            key={`${a}-${b}`}
            start={new THREE.Vector3(...nodeA.position)}
            end={new THREE.Vector3(...nodeB.position)}
            color={nodeColors[nodeA.type]}
            delay={midDelay}
          />
        );
      })}

      {NODES_DATA.map((node, i) => (
        <ProcessNode
          key={i}
          position={node.position}
          type={node.type}
          delay={node.delay}
        />
      ))}

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.25}
        minPolarAngle={0.4}
        maxPolarAngle={2.2}
      />
    </Canvas>
  );
}

export function ProcessScene() {
  const reducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-surface-50 dark:bg-surface-900">
        <div className="text-center p-8">
          <svg className="w-24 h-24 mx-auto text-brand-500 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="M12 2v20M17 7H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
            <path d="M7 7l5 5 5-5" />
          </svg>
          <h3 className="text-lg font-semibold text-surface-900 dark:text-white mb-2">
            Visualización de procesos
          </h3>
          <p className="text-surface-500 dark:text-surface-400">
            Red de nodos BPM interactiva (animación desactivada)
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0" style={{ width: '100%', height: '100%' }}>
      <ProcessSceneCanvas />
    </div>
  );
}