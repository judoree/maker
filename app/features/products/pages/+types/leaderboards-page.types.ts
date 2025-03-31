import type { MetaFunction } from '@remix-run/react';

export interface Leaderboard {
  id: string;
  title: string;
  description: string;
}

export namespace Route {
  export interface LoaderArgs {
    request: Request;
  }

  export interface ActionArgs {
    request: Request;
  }

  export interface ComponentProps {
    loaderData: {
      leaderboards: Leaderboard[];
    };
    actionData?: Record<string, unknown>;
  }

  export type MetaFunction = MetaFunction;
}
