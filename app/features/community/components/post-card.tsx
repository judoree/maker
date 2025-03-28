import { Link } from 'react-router';
import { Card, CardFooter, CardHeader, CardTitle } from '../../../common/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../../../common/components/ui/avatar';
import { Button } from '../../../common/components/ui/button';

interface PostCardProps {
  id: string;
  title: string;
  author: {
    name: string;
    avatarUrl?: string;
    avatarFallback: string;
  };
  category: string;
  createdAt: string;
  replyId?: string;
}

export function PostCard({ id, title, author, category, createdAt, replyId }: PostCardProps) {
  return (
    <Link to={`/community/${id}`}>
      <Card className="bg-transparent hover:bg-card/50 transition-colors">
        <CardHeader className="flex flex-row items-center gap-2">
          <Avatar className="size-14">
            <AvatarFallback>{author.avatarFallback}</AvatarFallback>
            {author.avatarUrl && <AvatarImage src={author.avatarUrl} />}
          </Avatar>
          <div className="space-y-2">
            <CardTitle>{title}</CardTitle>
            <div className="flex gap-2 text-xs leading-tight text-muted-foreground">
              <span>{author.name}</span>
              <span>{category}</span>
              <span>{createdAt}</span>
            </div>
          </div>
        </CardHeader>
        {replyId && (
          <CardFooter className="flex justify-end">
            <Button variant="link" asChild>
              <Link to={`/community/${replyId}`}>Reply &rarr;</Link>
            </Button>
          </CardFooter>
        )}
      </Card>
    </Link>
  );
}
