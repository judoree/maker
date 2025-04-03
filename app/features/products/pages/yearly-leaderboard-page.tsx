import { DateTime } from 'luxon';
import type { Route } from './+types/yearly-leaderboard-page';
import { data, isRouteErrorResponse, Link } from 'react-router';
import { z } from 'zod';
import { HeroSection } from '~/common/components/hero-section';
import { ProductCard } from '../components/product-card';
import { Button } from '~/common/components/ui/button';
import ProductPagination from '~/common/components/product-pagination';

const paramsSchema = z.object({
  year: z.coerce.number(),
});

export const loader = ({ params }: Route.LoaderArgs) => {
  const { success, data: parsedData } = paramsSchema.safeParse(params);
  if (!success) {
    throw data({ error_code: 'INVALID_PARAMS', message: 'Invalid params' }, { status: 400 });
  }
  const date = DateTime.fromObject({ year: parsedData.year }).setZone('Asia/Seoul');
  if (!date.isValid) {
    throw data({ error_code: 'INVALID_DATE', message: 'Invalid date' }, { status: 400 });
  }
  const today = DateTime.now().setZone('Asia/Seoul').startOf('year');
  if (date > today) {
    throw data({ error_code: 'FUTURE_DATE', message: 'Future date' }, { status: 400 });
  }

  return {
    ...parsedData,
  };
};

export default function YearlyLeaderboardPage({ loaderData }: Route.ComponentProps) {
  const urlDate = DateTime.fromObject({
    year: loaderData.year,
  });
  const previousYear = urlDate.minus({ year: 1 });
  const nextYear = urlDate.plus({ year: 1 });
  const isToday = urlDate.equals(DateTime.now().startOf('year'));
  return (
    <div className="space-y-10">
      <HeroSection title={`Best of ${urlDate.toLocaleString({ year: 'numeric' })}`} />
      <div className="flex items-center justify-center gap-2">
        <Button variant="secondary" asChild>
          <Link to={`/products/leaderboards/yearly/${previousYear.year}`}>
            &larr;{previousYear.toLocaleString({ year: 'numeric' })}
          </Link>
        </Button>
        {isToday ? (
          <Button variant="secondary" asChild>
            <Link to={`/products/leaderboards/yearly/${nextYear.year}`}>
              {nextYear.toLocaleString({ year: 'numeric' })} &rarr;
            </Link>
          </Button>
        ) : null}
      </div>
      <div className="space-y-5 w-full max-w-screen-md mx-auto">
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
      <ProductPagination totalPages={10} />
    </div>
  );
}
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        {error.data.message} / {error.data.error_code}
      </div>
    );
  }
  if (error instanceof Error) {
    return <div>{error.message}</div>;
  }
  return <div>Unknown Error</div>;
}
