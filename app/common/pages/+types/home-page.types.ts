import type { MetaFunction } from '@remix-run/react';

export namespace Route {
  export interface LoaderArgs {
    request: Request;
  }

  export interface ActionArgs {
    request: Request;
  }

  export interface ComponentProps {
    loaderData: {
      message: string;
    };
    actionData?: Record<string, unknown>;
  }

  export type MetaFunction = MetaFunction;
}
