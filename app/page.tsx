import Hero from "@/components/hero/Hero";
import ThreeScene from "@/components/three/ThreeScene";

const Home = () => {
  return (
    <main className="text-white pl-4 md:pl-0 pt-14 md:pt-36 max-w-[1250px] mx-auto">
      <section className="flex flex-col-reverse items-center justify-between md:flex-row overflow-hidden">
        <Hero />
        <ThreeScene />
      </section>
    </main>
  );
};

export default Home;
