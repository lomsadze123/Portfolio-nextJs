import Achievements from "@/components/blog/Achievements";
import BlogContent from "@/components/blog/BlogContent";

export const metadata = {
  title: "Blog - Beka Lomsadze",
  description:
    "Discover how Beka Lomsadze learned programming, including resources, sites, videos, exercises, achievements, and certifications.",
};

const Blog = () => {
  return (
    <main className="max-w-[1250px] mx-auto pt-10 px-6 md:px-0 md:pt-40 text-slate-300">
      <h1 className="font-bold leading-tight tracking-tight text-5xl md:text-8xl col-start-1 mb-12">
        My Programming Journey
      </h1>
      <p className="text-xl mb-8">
        Discover the resources and steps I took to learn programming. From
        beginner tutorials to advanced frameworks, here&apos;s how I became a
        developer.
      </p>
      <BlogContent />
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-4">
          Achievements & Certifications
        </h2>
        <Achievements />
      </div>
    </main>
  );
};

export default Blog;
