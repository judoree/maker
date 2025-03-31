import { redirect } from 'react-router';
import type { Route } from './+types/products-page.types';

export function loader() {
  return;
  redirect('/products/leaderboards');
}
