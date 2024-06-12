let soundEffects: HTMLAudioElement[] = [];

if (typeof window !== "undefined") {
  soundEffects = [
    new Audio("/sounds/knock1.ogg"),
    new Audio("/sounds/knock2.ogg"),
    new Audio("/sounds/knock3.ogg"),
  ];
}
export default soundEffects;
