import type { Route } from './+types/search-page.types';

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get('q') || '';

  return {
    query,
    products: [],
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export function meta({}: Route.MetaFunction) {
  return [{ title: 'Search | Product Hunt Clone' }, { name: 'description', content: 'Search for products' }];
}

export default function SearchPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Search Results</h1>
      <p className="text-gray-600 mb-6">
        {loaderData.query ? `Results for "${loaderData.query}"` : 'Enter a search term'}
      </p>
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
