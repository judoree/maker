import { Link, type MetaFunction } from 'react-router';
import { ProductCard } from '../../features/products/components/product-card';
import { PostCard } from '../../features/community/components/post-card';
import { IdeaCard } from '../../features/ideas/components/idea-card';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { JobCard } from '~/features/jobs/components/job-card';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { TeamCard } from '~/features/teams/components/team-card';
import type { Route } from './+types/home-page.types';

export function loader({ request }: Route.LoaderArgs) {
  return {
    message: 'Welcome to the home page',
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export function meta({}: Route.MetaFunction) {
  return [{ title: 'Home | Product Hunt Clone' }, { name: 'description', content: 'Discover the best new products' }];
}

export default function HomePage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Product Hunt Clone</h1>
      <p className="text-lg text-gray-600">{loaderData.message}</p>
    </div>
  );
}
