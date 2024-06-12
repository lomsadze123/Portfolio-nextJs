import materials from "@/data/animation/materialsData";
import Geometry from "./Geometry";
import geometries from "@/data/animation/geometriesData";
import soundEffect from "@/data/animation/soundsData";

const Geometries = () => {
  return geometries.map(({ position, r, geometry }, index) => (
    <Geometry
      key={JSON.stringify(position)}
      position={position.map((p) => p * 2) as [number, number, number]}
      soundEffects={soundEffect}
      geometry={geometry}
      materials={materials}
      r={r}
      delay={index * 150}
    />
  ));
};
export default Geometries;
