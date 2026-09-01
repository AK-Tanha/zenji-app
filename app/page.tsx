import Hero from "@/components/hero";
import CollectionShowcase from "@/components/collection-showcase";
import ProductGrid from "@/components/product-grid";
import Waitlist from "@/components/waitlist";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <CollectionShowcase />
      <ProductGrid />
      <Waitlist />
    </div>
  );
}
