import type { MetaFunction } from '@remix-run/react';

export interface Product {
  id: string;
  name: string;
  description: string;
}

export namespace Route {
  export interface LoaderArgs {
    request: Request;
    params: {
      year: string;
      month: string;
      day: string;
    };
  }

  export interface ActionArgs {
    request: Request;
  }

  export interface ComponentProps {
    loaderData: {
      year: string;
      month: string;
      day: string;
      products: Product[];
    };
    actionData?: Record<string, unknown>;
  }

  export type MetaFunction = MetaFunction;
}
