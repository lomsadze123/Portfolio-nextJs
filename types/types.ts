import * as THREE from "three";

export interface ThreeTypes {
  r: number;
  position: [number, number, number];
  geometry: THREE.BufferGeometry;
  materials: THREE.Material[];
}
