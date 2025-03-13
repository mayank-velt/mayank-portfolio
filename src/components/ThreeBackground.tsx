
import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useThemeStore } from '@/stores/useThemeStore';
import * as THREE from 'three';

// Floating particle that follows a noise pattern
const FloatingParticle = ({ position, color, seed, speed = 1 }: { position: [number, number, number], color: string, seed: number, speed?: number }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const time = useRef(seed);
  
  useFrame(() => {
    time.current += 0.01 * speed;
    
    if (mesh.current) {
      mesh.current.position.x = position[0] + Math.sin(time.current) * 0.5;
      mesh.current.position.y = position[1] + Math.cos(time.current * 0.7) * 0.5;
      mesh.current.position.z = position[2] + Math.sin(time.current * 0.3) * 0.5;
      
      mesh.current.rotation.x += 0.003 * speed;
      mesh.current.rotation.y += 0.002 * speed;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <octahedronGeometry args={[0.3, 0]} />
      <meshStandardMaterial 
        color={color} 
        roughness={0.5} 
        metalness={0.8}
        emissive={color}
        emissiveIntensity={0.5}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

// Particles container component
const ParticleField = () => {
  const { theme } = useThemeStore();
  const { viewport } = useThree();
  
  // Get color based on current theme
  const getThemeColor = () => {
    switch (theme) {
      case 'purple': return '#9b87f5';
      case 'ocean': return '#0EA5E9';
      case 'sunset': return '#F97316';
      default: return '#FF5277';
    }
  };
  
  // Generate particles with positions spread throughout the scene
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    position: [
      (Math.random() - 0.5) * viewport.width * 1.5,
      (Math.random() - 0.5) * viewport.height * 1.5,
      (Math.random() - 3) * 5
    ] as [number, number, number],
    seed: Math.random() * 100,
    speed: 0.5 + Math.random()
  }));

  return (
    <>
      {particles.map((particle) => (
        <FloatingParticle 
          key={particle.id}
          position={particle.position}
          color={getThemeColor()}
          seed={particle.seed} 
          speed={particle.speed}
        />
      ))}
    </>
  );
};

// Scene adjustment based on mouse movement
const MouseMovementEffect = ({ mouseSensitivity = 0.1 }) => {
  const { camera } = useThree();
  
  useEffect(() => {
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      
      // Set target rotation based on mouse position
      targetRotationX = y * mouseSensitivity;
      targetRotationY = x * mouseSensitivity;
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Animation loop to smoothly interpolate camera rotation
    const animateCamera = () => {
      // Smoothly interpolate current rotation towards target
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;
      
      // Apply rotation to camera
      if (camera) {
        camera.rotation.x = currentRotationX;
        camera.rotation.y = currentRotationY;
      }
      
      requestAnimationFrame(animateCamera);
    };
    
    const animationId = requestAnimationFrame(animateCamera);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [camera, mouseSensitivity]);
  
  return null;
};

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-60">
      <Canvas>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <MouseMovementEffect mouseSensitivity={0.1} />
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
