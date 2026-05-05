"use client";
import { authClient } from "@/lib/auth-client";
import { register } from "next/dist/next-devtools/userspace/pages/pages-dev-overlay-setup";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegisterFunc = async(data) => {
    const { email, name, photo, password } = data;

    const {data: res, error} = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/",
    })

    console.log(res, error);
    if(error) alert(error.message)
    if(res) alert("Signup successful")
  }

  return (
    <div className="flex flex-col bg-amber-300  ">
      <h2 className="font-bold text-3xl text-center mb-6">Register</h2>
      <form
        className="flex flex-col items-center bg-accent"
        onSubmit={handleSubmit(handleRegisterFunc)}
      >
        <fieldset className="fieldset">
          <legend className="fieldset-legend">name</legend>
          <input
            type="text"
            className="input"
            placeholder="Type your name"
            {...register("name", { required: "Name field is required" })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Photo url</legend>
          <input
            type="text"
            className="input"
            placeholder="Type your photo url"
            {...register("photo", { required: "Photo url field is required" })}
          />
          {errors.photo && (
            <p className="text-red-500">{errors.photo.message}</p>
          )}
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">email</legend>
          <input
            type="email"
            className="input"
            placeholder="Type your email"
            {...register("email", { required: "email url field is required" })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </fieldset>
        <fieldset className="fieldset">
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
        </fieldset>

        <button className="bg-white px-4 py-2 rounded-2xl hover:bg-red-500 cursor-pointer">
          register
        </button>
      </form>
    </div>
  );
}
