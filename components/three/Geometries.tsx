import * as THREE from "three";
import Geometry from "./Geometry";
import geometries from "@/data/geometriesData";

const Geometries = () => {
  const materials = [
    new THREE.MeshNormalMaterial(),
    new THREE.MeshStandardMaterial({
      roughness: 0,
      metalness: 1,
      color: 0x2980b9,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x2c3e50,
      roughness: 0.1,
      metalness: 1,
    }),
  ];

  return geometries.map(({ position, r, geometry }) => (
    <Geometry
      key={JSON.stringify(position)}
      position={position.map((p) => p * 2) as [number, number, number]}
      geometry={geometry}
      materials={materials}
      r={r}
    />
  ));
};
export default Geometries;
