import { Link } from 'react-router';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../../common/components/ui/card';
import { Button } from '../../../common/components/ui/button';
import { Badge } from '../../../common/components/ui/badge';

interface JobCardProps {
  id: string;
  company: {
    name: string;
    logoUrl: string;
  };
  title: string;
  createdAt: string;
  employmentType: string;
  locationType: string;
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  location: string;
}

export function JobCard({
  id,
  company,
  title,
  createdAt,
  employmentType,
  locationType,
  salary,
  location,
}: JobCardProps) {
  return (
    <Link to={`/jobs/${id}`}>
      <Card className="bg-transparent transition-colors hover:bg-card/50">
        <CardHeader>
          <div className="flex items-center gap-4 mb-4">
            <img src={company.logoUrl} alt={`${company.name} Logo`} className="size-10 rounded-full" />
            <div className="space-x-2"></div>
            <span className="text-accent-foreground">{company.name}</span>
            <span className="text-xs text-muted-foreground">{createdAt}</span>
          </div>
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <Badge variant="outline">{employmentType}</Badge>
          <Badge variant="outline">{locationType}</Badge>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-muted-foreground">
              {salary.currency}
              {salary.min.toLocaleString()} - {salary.currency}
              {salary.max.toLocaleString()}
            </span>
            <span className="text-sm font-medium text-muted-foreground">{location}</span>
          </div>
          <Button variant="secondary" size="sm">
            Apply now
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
