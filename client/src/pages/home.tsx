import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ComponentShowcase from "@/components/ComponentShowcase";
import TechnicalSpecs from "@/components/TechnicalSpecs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-50 font-sans">
      <Header />
      <Hero />
      <ComponentShowcase />
      <TechnicalSpecs />
      <Footer />
    </div>
  );
}
