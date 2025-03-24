import { Button } from '../components/ui/button';

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1>Welcome to Our APP</h1>
      <p>Get Started by exploring the app</p>

      <div className="flex gap-4">
        <Button variant="default">Get Started</Button>
        <Button variant="default">Learn More</Button>
      </div>
    </main>
  );
}
