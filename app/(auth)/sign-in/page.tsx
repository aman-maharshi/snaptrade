"use client"

import InputField from "@/components/forms/InputField"
import FooterLink from "@/components/forms/FooterLink"
import { useForm } from "react-hook-form"

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: ""
    },
    mode: "onBlur"
  })

  const onSubmit = async (data: SignInFormData) => {
    try {
      console.log("Form submitted with data:", data)
    } catch (error) {
      console.error("Form submission error:", error)
    }
  }

  return (
    <>
      <h1 className="form-title">Sign In</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          name="email"
          label="Email"
          placeholder="Enter your email"
          register={register}
          error={errors.email}
          validation={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email address"
            }
          }}
        />

        <InputField
          name="password"
          label="Password"
          placeholder="Enter your password"
          register={register}
          error={errors.password}
          validation={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters"
            }
          }}
        />

        <button type="submit" className="yellow-btn w-full mt-5" disabled={isSubmitting}>
          {isSubmitting ? "Signing in..." : "Sign In"}
        </button>
      </form>

      <FooterLink text="Don't have an account?" linkText="Sign Up" href="/sign-up" />
    </>
  )
}

export default SignInPage
