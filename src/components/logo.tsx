import { RocketIcon } from "@radix-ui/react-icons";

export function Logo() {
  return (
    <div className="bg-primary h-8 w-8 flex items-center justify-center rounded-md text-primary-foreground">
      <RocketIcon className="w-4 h-4"></RocketIcon>
    </div>
  );
}
