import { Link, type MetaFunction } from 'react-router';
import { ProductCard } from '../../features/products/components/product-card';
import { PostCard } from '../../features/community/components/post-card';
import { Button } from '../components/ui/button';

export const meta: MetaFunction = () => {
  return [{ title: 'Home | Wemake' }, { name: 'description', content: 'Welcome to  We make' }];
};

export default function HomePage() {
  return (
    <div className="px-20 space-y-40">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">Today's Produts</h2>
          <p className="text-xl font-light text-foreground">The best products made by our community today.</p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/products/leaderboards">Explore all Products &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
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
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">Lastest Discussions</h2>
          <p className="text-xl font-light text-foreground">The latest discussions from our community.</p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/communtiy">Explore all discussions &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <PostCard
            id="postId"
            title="What is the best productivity tool?"
            author={{
              name: 'judoree',
              avatarUrl: 'https://github.com/apple.png',
              avatarFallback: 'N',
            }}
            category="Productivity"
            createdAt="12 hours ago"
            replyId="prstId"
          />
        ))}
      </div>
    </div>
  );
}
