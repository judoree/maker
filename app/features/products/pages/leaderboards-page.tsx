import type { Route } from './+types/leaderboards-page';

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: Route.MetaFunction = () => {
  return [{ title: 'Leaderboards | Wemake' }, { name: 'description', content: 'View product leaderboards' }];
};

export default function LeaderboardsPage() {
  return (
    <div>
      <div className="flex flex-col py-20 justify-center items-center rounded-md bg-gradient-to-t-from-background to-primary/10">
        <h1 className="text-5xl font-bold ">Leaderboards</h1>
        <p className="text-2xl font-light text-foreground">The most popular products on wemake</p>
      </div>
    </div>
  );
}
