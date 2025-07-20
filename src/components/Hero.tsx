import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Mesh } from 'three';

// 3D Floating Shapes Component
const FloatingShapes = () => {
  const sphereRef = useRef<Mesh>(null);
  const boxRef = useRef<Mesh>(null);
  const torusRef = useRef<Mesh>(null);

  // Auto-rotate the shapes
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.01;
      sphereRef.current.rotation.y += 0.01;
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
    if (boxRef.current) {
      boxRef.current.rotation.x += 0.015;
      boxRef.current.rotation.y += 0.015;
      boxRef.current.position.y = Math.cos(state.clock.elapsedTime) * 0.5;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.005;
      torusRef.current.rotation.y += 0.01;
      torusRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <>
      {/* Ambient lighting for the scene */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00FFFF" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#9945FF" />

      {/* Floating Sphere */}
      <mesh ref={sphereRef} position={[-4, 2, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color="#00FFFF" 
          transparent 
          opacity={0.7}
          emissive="#00FFFF"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Floating Box */}
      <mesh ref={boxRef} position={[4, -2, 0]} rotation={[0.5, 0.5, 0]}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial 
          color="#9945FF" 
          transparent 
          opacity={0.7}
          emissive="#9945FF"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Floating Torus */}
      <mesh ref={torusRef} position={[0, 0, -3]} rotation={[1, 1, 0]}>
        <torusGeometry args={[1.2, 0.4, 16, 100]} />
        <meshStandardMaterial 
          color="#FF6B6B" 
          transparent 
          opacity={0.7}
          emissive="#FF6B6B"
          emissiveIntensity={0.2}
        />
      </mesh>
    </>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background Canvas with Error Boundary */}
      <div className="absolute inset-0 z-0">
        <Canvas 
          camera={{ position: [0, 0, 5] }}
          onCreated={({ gl }) => {
            gl.setClearColor('#0a0a0a', 0);
          }}
        >
          <FloatingShapes />
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-10" />

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Niraj Yadav
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Aspiring Full-Stack Developer | UI/UX Learner | Backend Enthusiast
          </motion.p>

          <motion.p 
            className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Final-year Computer Science student at ISMT College, passionate about creating 
            modern web applications and exploring the intersection of design and development.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <button className="btn-glow text-lg px-8 py-4">
              View My Work
            </button>
            <button className="btn-neon text-lg px-8 py-4">
              Get In Touch
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;