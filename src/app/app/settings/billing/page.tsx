import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default async function AppPage() {
  return (
    <Card>
      <CardHeader className="border-b border-border">
        <CardTitle>Plan Usage</CardTitle>
        <CardDescription>
          You are currently on the [current_plan] plan. Current billing cycle:{" "}
          [next_due_date].
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-2">
          <header className="flex items-center justify-between">
            <span className="text-muted-foreground text-sm">1/5</span>
            <span className="text-muted-foreground text-sm">20%</span>
          </header>
          <main>
            <Progress value={20} />
          </main>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t border-border pt-6">
        <span>To get a higher limit, sign up for PRO</span>
        <Button>Upgrade to PRO</Button>
      </CardFooter>
    </Card>
  );
}
