import materials from "@/data/materialsData";
import Geometry from "./Geometry";
import geometries from "@/data/geometriesData";
import soundEffect from "@/data/soundsData";

const Geometries = () => {
  return geometries.map(({ position, r, geometry }) => (
    <Geometry
      key={JSON.stringify(position)}
      position={position.map((p) => p * 2) as [number, number, number]}
      soundEffects={soundEffect}
      geometry={geometry}
      materials={materials}
      r={r}
    />
  ));
};
export default Geometries;
