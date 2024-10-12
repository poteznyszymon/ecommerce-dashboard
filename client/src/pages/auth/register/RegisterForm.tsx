import { authSchema, authValues } from "@/utils/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/shared/LoadingButton";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import { useState } from "react";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<authValues>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: authValues) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="username"
                    {...field}
                    className="pl-8"
                    id="username"
                  />
                  <label htmlFor="username">
                    <User className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground size-4 cursor-text" />
                  </label>
                </div>
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="Create strong password"
                    {...field}
                    className="pl-8 pr-8"
                    id="password"
                    type={showPassword ? "password" : "text"}
                  />
                  <label htmlFor="password">
                    <Lock className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground size-4 cursor-text" />
                  </label>
                  {showPassword ? (
                    <Eye
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 text-muted-foreground size-5"
                    />
                  ) : (
                    <EyeOff
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 text-muted-foreground size-5"
                    />
                  )}
                </div>
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <LoadingButton loading={false} className="w-full">
          Sign Up
        </LoadingButton>
      </form>
    </Form>
  );
};

export default RegisterForm;
