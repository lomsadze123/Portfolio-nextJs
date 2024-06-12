import * as THREE from "three";

const materials = [
  new THREE.MeshNormalMaterial(),
  new THREE.MeshStandardMaterial({
    roughness: 0,
    metalness: 1,
    color: 0xa3e4d7, // Light Green
  }),
  new THREE.MeshStandardMaterial({
    roughness: 0,
    metalness: 1,
    color: 0xf9e79f, // Light Yellow
  }),
  new THREE.MeshStandardMaterial({
    roughness: 0,
    metalness: 1,
    color: 0xf5b7b1, // Light Red/Pink
  }),
  new THREE.MeshStandardMaterial({
    roughness: 0,
    metalness: 1,
    color: 0xd7bde2, // Light Purple
  }),
  new THREE.MeshStandardMaterial({
    roughness: 0,
    metalness: 1,
    color: 0xa9dfbf, // Light Teal
  }),
];

export default materials;
