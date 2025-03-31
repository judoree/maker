import { type RouteConfig, index, prefix, route } from '@react-router/dev/routes';

export default [
  index('common/pages/home-page.tsx'), // 이 index 는 내 홈페이지
  ...prefix('products', [
    index('features/products/pages/products-page.tsx'), // 이 말은 배열 안에 있는것들은 /products 시작
    ...prefix('leaderboards', [
      index('features/products/pages/leaderboards-page.tsx'),
      route('/yearly/:year', 'features/products/pages/yearly-leaderboard-page.tsx'),
      route('/monthly/:year/:month', 'features/products/pages/monthly-leaderboard-page.tsx'),
      route('/weekly/:year/:mouth/:day', 'features/products/pages/weekly-leaderboard-page.tsx'),
      route('/daily/:year/:week', 'features/products/pages/daily-leaderboard-page.tsx'),
    ]),
    ...prefix('categories', [
      index('features/products/pages/categories-page.tsx'),
      route('/:category', 'features/products/pages/category-page.tsx'),
    ]),
    route('/search', 'features/products/pages/search-page.tsx'),
    route('/submit', 'features/products/pages/submit-page.tsx'),
    route('/promote', 'features/products/pages/promote-page.tsx'),
  ]),
] satisfies RouteConfig;

// prefix 밖에서 index 는 홈페이지 의미
// : react router 에게 이주소의 부분이 변경될 것
