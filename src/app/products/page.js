import FeaturedItems from "@/components/ui/EasyToUseComp/featuredItems";
import TrendingItems from "@/components/ui/EasyToUseComp/trendingItems";





export default function ProductContent() {
  return (
    <div>
      <div className="px-5 text-2xl">
        <h1>Featured Items</h1>
      </div>
      <div className="px-5">
        <FeaturedItems />

      </div>
    </div>
  );
}