import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <div className="w-full max-w-md p-8 space-y-8 bg-background rounded-2xl shadow-md">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Welcome Back</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Sign in with your account to dashboard
        </p>
      </div>
      <LoginForm />
      <p className="text-muted-foreground text-sm text-center">
        Don't have an account?{" "}
        <Link
          to={"/register"}
          className="font-semibold text-foreground hover:underline"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
