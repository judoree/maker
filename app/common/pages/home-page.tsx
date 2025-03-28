import { type MetaFunction } from 'react-router';
import { ProductCard } from '../../features/products/components/product-card';

export const meta: MetaFunction = () => {
  return [{ title: 'Home | Wemake' }, { name: 'description', content: 'Welcome to  We make' }];
};

export default function HomePage() {
  return (
    <div className="px-20">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">Today is Produts</h2>
          <p className="text-xl font-light text-foreground">The best products made by our community today.</p>
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
      </div>
    </div>
  );
}
