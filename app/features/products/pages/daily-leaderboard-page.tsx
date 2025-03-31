import type { Route } from './+types/daily-leaderboard-page.types';

export function loader({ request, params }: Route.LoaderArgs) {
  return {
    year: params.year,
    week: params.week,
    products: [],
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export function meta({}: Route.MetaFunction) {
  return [
    { title: 'Daily Leaderboard | Product Hunt Clone' },
    { name: 'description', content: 'View the top products of the day' },
  ];
}

export default function DailyLeaderboardPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">
        Top Products of Week {loaderData.week} in {loaderData.year}
      </h1>
      <div className="grid grid-cols-1 gap-6">
        {loaderData.products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
