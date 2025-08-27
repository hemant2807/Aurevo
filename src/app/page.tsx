import { UserButton } from "@clerk/nextjs";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div>
      <h3>Hello Hemant</h3>
      <Button>Login</Button>
      <UserButton />
    </div>
  );
}
