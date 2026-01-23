import { Hero } from "@/components/features/Hero";
import { ServiceGrid } from "@/components/features/ServiceGrid";
import { PrimeStoneSection } from "@/components/features/PrimeStoneSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServiceGrid />
      <PrimeStoneSection />
    </div>
  );
}
