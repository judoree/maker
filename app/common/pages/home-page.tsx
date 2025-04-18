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

export function action({ request }: Route.ActionArgs) {
  return {};
}

export function meta({}: Route.MetaFunction) {
  return [{ title: 'Home | Wemake' }, { name: 'description', content: 'Welcome to  We make' }];
}

export default function HomePage() {
  return (
    <div className="px-20 space-y-40">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">Today's Produts</h2>
          <p className="text-xl font-light text-foreground">The best products made by our community today.</p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/products/leaderboards">Explore all Products &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <ProductCard
            key={index}
            id="productId"
            name="Product Name"
            description="Product Description"
            commentCount={12}
            viewCount={12}
            upvoteCount={120}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">Lastest Discussions</h2>
          <p className="text-xl font-light text-foreground">The latest discussions from our community.</p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/communtiy">Explore all discussions &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <PostCard
            id="postId"
            title="What is the best productivity tool?"
            author={{
              name: 'judoree',
              avatarUrl: 'https://github.com/apple.png',
              avatarFallback: 'N',
            }}
            category="Productivity"
            createdAt="12 hours ago"
            replyId="prstId"
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">IdeasGPT</h2>
          <p className="text-xl font-light text-foreground">Find ideas for your next project.</p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/ideas">Explore all ideas &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <IdeaCard
            id="ideaId"
            title="A startup that creates an AI-powered generated personal trainer, delivering customized fitness recommendations and tracking of progress using a mobile app to track workouts and progress as well as a website to manage the business."
            viewCount={123}
            createdAt="12 hours ago"
            likeCount={12}
            claimed={index % 2 === 0}
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">Latest Jobs</h2>
          <p className="text-xl font-light text-foreground">Find your dream job.</p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/jobs">Explore all jobs &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <JobCard
            id="jobId"
            company={{
              name: 'Apple',
              logoUrl: 'https://github.com/facebook.png',
            }}
            title="Software Engineer"
            createdAt="12 hour ago"
            employmentType="Full-time"
            locationType="Remote"
            salary={{
              min: 100000,
              max: 120000,
              currency: '$',
            }}
            location="Korea Seoul"
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">Find a team mate</h2>
          <p className="text-xl font-light text-foreground">Join a team looking for a team member.</p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/teams">Explore all teams &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <TeamCard
            id="teamId"
            leaderUsername="judoree"
            leaderAvatarUrl="https://github.com/judoree.png"
            positions={['React Developer', 'Backend Developer', 'AI Developer']}
            projectDescription="a new social media platform"
          />
        ))}
      </div>
    </div>
  );
}
