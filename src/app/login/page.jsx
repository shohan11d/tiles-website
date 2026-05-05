"use client";
import { authClient } from "@/lib/auth-client";
import { register } from "next/dist/next-devtools/userspace/pages/pages-dev-overlay-setup";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function handleLoginFunc(data) {
    const { data:res, error} = authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    })

    console.log(res, error);
  }


  return (
    <div className="flex flex-col bg-amber-300  ">
      <h2 className="font-bold text-3xl text-center mb-6">
        Login your account
      </h2>
      <form
        className="flex flex-col items-center bg-accent"
        onSubmit={handleSubmit(handleLoginFunc)}
      >
        <div className="fieldset">
          <legend className="fieldset-legend">email</legend>
          <input
            type="email"
            className="input"
            placeholder="Type your email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="text-red-500">email is required</p>
          )}
        </div>
        <div className="relative">
          <legend className="fieldset-legend">password</legend>
          <div className="relative">
            <input
              type="password"
              className="input w-full"
              placeholder="Type your password"
              {...register("password", { required: true })}
            />
            <p className="label absolute right-3 top-1/2 -translate-y-1/2">
              show
            </p>
          </div>
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
        </div>

        <button className="bg-white px-4 py-2 rounded-2xl hover:bg-red-500 cursor-pointer">
          login
        </button>
      </form>
    </div>
  );
}
