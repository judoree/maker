import { DateTime } from 'luxon';
import type { Route } from './+types/daily-leaderboard-page';
import { data, isRouteErrorResponse } from 'react-router';

export const loader = ({ params }: Route.LoaderArgs) => {
  const { year, month, day } = params;
  const date = DateTime.fromObject({ year: Number(year), month: Number(month), day: Number(day) }).setZone(
    'Asia/Seoul'
  );
  if (!date.isValid) {
    throw data({ error_code: 'INVALID_DATE', message: 'Invalid date' }, { status: 400 });
  }
  return;
};

export default function DailyLeaderboardPage() {
  return <div className="container mx-auto px-4 py-8"></div>;
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
