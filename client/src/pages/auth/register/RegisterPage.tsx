import { Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
  return (
    <div className="w-full max-w-md p-8 space-y-8 bg-background rounded-2xl border shadow-md z-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Create an Account</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Register your account to dashboard
        </p>
      </div>
      <RegisterForm />
      <p className="text-muted-foreground text-sm text-center">
        Already have an account?{" "}
        <Link
          to={"/login"}
          className="font-semibold text-foreground hover:underline"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
