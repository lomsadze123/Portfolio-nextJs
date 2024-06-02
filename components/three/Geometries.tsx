import materials from "@/data/materialsData";
import Geometry from "./Geometry";
import geometries from "@/data/geometriesData";

const Geometries = () => {
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
