import * as THREE from "three";

export interface ThreeTypes {
  r: number;
  position: [number, number, number];
  geometry: THREE.BufferGeometry;
  materials: THREE.Material[];
  soundEffects: HTMLAudioElement[];
}

interface SubSection {
  subHeading: string;
  content?: string;
  codeBlock?: string;
}

interface Section {
  heading: string;
  content: string;
  list?: string[];
  subSections?: SubSection[];
  codeBlock?: string;
}

export interface Project {
  title: string;
  technology?: string;
  date?: string;
  introduction: string;
  sections?: Section[];
  gettingStarted?: Section[];
  technologies?: string[];
}

export interface ErrorState {
  name: string;
  email: string;
  message: string;
}
