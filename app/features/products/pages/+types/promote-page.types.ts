import type { MetaFunction } from '@remix-run/react';

export interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
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
      plans: Plan[];
    };
    actionData?: Record<string, unknown>;
  }

  export type MetaFunction = MetaFunction;
}
