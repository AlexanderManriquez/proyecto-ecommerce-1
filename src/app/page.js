import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
    <Navbar />
    <Hero />
    <Categories />
  </div>
  );
}
