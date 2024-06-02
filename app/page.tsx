import Hero from "@/components/hero/Hero";
import ThreeScene from "@/components/three/ThreeScene";

const Home = () => {
  return (
    <main className="text-white pt-36 max-w-[1250px] mx-auto">
      <section className="flex flex-col-reverse items-center justify-between md:flex-row">
        <Hero />
        <ThreeScene />
      </section>
    </main>
  );
};

export default Home;
