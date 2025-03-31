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
      category: string;
    };
  }

  export interface ActionArgs {
    request: Request;
  }

  export interface ComponentProps {
    loaderData: {
      category: string;
      products: Product[];
    };
    actionData?: Record<string, unknown>;
  }

  export type MetaFunction = MetaFunction;
}
