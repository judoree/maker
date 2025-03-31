import type { Route } from './+types/leaderboards-page.types';

export function loader({ request }: Route.LoaderArgs) {
  return {
    leaderboards: [],
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export function meta({}: Route.MetaFunction) {
  return [
    { title: 'Leaderboards | Product Hunt Clone' },
    { name: 'description', content: 'View product leaderboards' },
  ];
}

export default function LeaderboardsPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Leaderboards</h1>
      <div className="grid grid-cols-1 gap-6">
        {loaderData.leaderboards.map((leaderboard) => (
          <div key={leaderboard.id} className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold">{leaderboard.title}</h2>
            <p className="text-gray-600">{leaderboard.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
