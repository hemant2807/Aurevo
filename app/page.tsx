import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h3>Hello Hemant</h3>
      <Button>Login</Button>
      <UserButton />
    </div>
  );
}
