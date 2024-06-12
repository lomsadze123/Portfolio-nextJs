import { ThreeTypes } from "@/types/types";
import { useGSAP } from "@gsap/react";
import { Float } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

const Geometry = ({
  r,
  position,
  geometry,
  materials,
  soundEffects,
}: ThreeTypes) => {
  const meshRef = useRef<THREE.Group>(null);
  const [visible, setVisible] = useState(false);

  const getRandomMaterial = () => {
    return gsap.utils.random(materials);
  };

  const startMaterial = getRandomMaterial();

  const handleClick = (e: any) => {
    const mesh = e.object as THREE.Mesh;

    gsap.utils.random(soundEffects).play();

    if (mesh) {
      gsap.to(mesh.rotation, {
        x: `+=${gsap.utils.random(0, 2)}`,
        y: `+=${gsap.utils.random(0, 2)}`,
        z: `+=${gsap.utils.random(0, 2)}`,
        duration: 1.3,
        ease: "elastic.out(1,0.3)",
      });
      mesh.material = getRandomMaterial();
    }
  };

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  useGSAP(() => {
    setVisible(true);
    meshRef.current &&
      gsap.from(meshRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
        ease: "elastic.out(1,0.3)",
        delay: 0.3,
      });
  });

  return (
    <group position={position} ref={meshRef}>
      <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
        <mesh
          geometry={geometry}
          onClick={handleClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          visible={visible}
          material={startMaterial}
        />
      </Float>
    </group>
  );
};
export default Geometry;
