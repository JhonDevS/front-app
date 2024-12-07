import { LoginForm } from "./ui/components/loginForm/loginForm";
import { ToggleTheme } from "./ui/components/toggleTheme/toggleTheme";


export default function Home() {
  
  return (
    <div>
      <h1>Home</h1>
      <ToggleTheme />
      <LoginForm />
    </div>
  );
}
