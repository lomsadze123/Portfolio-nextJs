import ThreeScene from "@/components/three/ThreeScene";

const Home = () => {
  return (
    <main className="text-white pt-28 max-w-[1250px] mx-auto">
      <section className="flex items-center justify-between">
        <h1>Hello World!</h1>
        <ThreeScene />
      </section>
    </main>
  );
};

export default Home;
