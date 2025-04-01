import { Button } from '~/common/components/ui/button';
import type { Route } from './+types/leaderboards-page';
import { HeroSection } from '~/common/components/hero-section';
import { Link } from 'react-router';
import { ProductCard } from '../components/product-card';

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: Route.MetaFunction = () => {
  return [{ title: 'Leaderboards | Wemake' }, { name: 'description', content: 'Wemake Leaderboards' }];
};

export default function LeaderboardsPage() {
  return (
    <div className="space-y-20">
      <HeroSection title="Leaderboards" description="The most popular products on wemake" />
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">Daily Leaderboard</h2>
          <p className="text-xl font-light text-foreground">The most popular products on wemake by day.</p>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            key={index}
            id="productId"
            name="Product Name"
            description="Product Description"
            commentCount={12}
            viewCount={12}
            upvoteCount={120}
          />
        ))}
        <Button variant="link" asChild className="text-lg self-center">
          <Link to="/products/leaderboard/dailys">Explore all products &rarr;</Link>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">Wekly Leaderboard</h2>
          <p className="text-xl font-light text-foreground">The most popular products on wemake by Week.</p>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            key={index}
            id="productId"
            name="Product Name"
            description="Product Description"
            commentCount={12}
            viewCount={12}
            upvoteCount={120}
          />
        ))}
        <Button variant="link" asChild className="text-lg self-center">
          <Link to="/products/leaderboards/weekly">Explore all products &rarr;</Link>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">Monthly Leaderboard</h2>
          <p className="text-xl font-light text-foreground">The most popular products on wemake by month.</p>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            key={index}
            id="productId"
            name="Product Name"
            description="Product Description"
            commentCount={12}
            viewCount={12}
            upvoteCount={120}
          />
        ))}
        <Button variant="link" asChild className="text-lg self-center">
          <Link to="/products/leaderboards/monthly">Explore all products &rarr;</Link>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">Yearly Leaderboard</h2>
          <p className="text-xl font-light text-foreground">The most popular products on wemake by year.</p>
        </div>
        {Array.from({ length: 7 }).map((_, index) => (
          <ProductCard
            key={index}
            id="productId"
            name="Product Name"
            description="Product Description"
            commentCount={12}
            viewCount={12}
            upvoteCount={120}
          />
        ))}
        <Button variant="link" asChild className="text-lg self-center">
          <Link to="/products/leaderboards/yearly">Explore all products &rarr;</Link>
        </Button>
      </div>
    </div>
  );
}
