"use client"

import { useForm } from "react-hook-form"
import InputField from "@/components/forms/InputField"
import SelectField from "@/components/forms/SelectField"
import { INVESTMENT_GOALS, RISK_TOLERANCE_OPTIONS, PREFERRED_INDUSTRIES } from "@/lib/constants"
import { CountrySelectField } from "@/components/forms/CountrySelectField"

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isSubmitting }
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "IN",
      investmentGoals: "Growth",
      riskTolerance: "Medium",
      preferredIndustry: "Technology"
    },
    mode: "onBlur"
  })

  const onSubmit = async (data: SignUpFormData) => {
    try {
      console.log("Form submitted with data:", data)
    } catch (error) {
      console.error("Form submission error:", error)
    }
  }

  return (
    <>
      <h1 className="form-title">Sign Up & Personalize</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          name="fullName"
          label="Full Name"
          placeholder="Enter your full name"
          register={register}
          error={errors.fullName}
          validation={{
            required: "Full name is required",
            minLength: {
              value: 2,
              message: "Full name must be at least 2 characters"
            }
          }}
        />

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
          placeholder="Enter a strong password"
          type="password"
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

        <CountrySelectField name="country" label="Country" control={control} error={errors.country} required />

        <SelectField
          name="investmentGoals"
          label="Investment Goals"
          placeholder="Select your investment goal"
          options={INVESTMENT_GOALS}
          control={control}
          error={errors.investmentGoals}
          required
        />

        <SelectField
          name="riskTolerance"
          label="Risk Tolerance"
          placeholder="Select your risk level"
          options={RISK_TOLERANCE_OPTIONS}
          control={control}
          error={errors.riskTolerance}
          required
        />

        <SelectField
          name="preferredIndustry"
          label="Preferred Industry"
          placeholder="Select your preferred industry"
          options={PREFERRED_INDUSTRIES}
          control={control}
          error={errors.preferredIndustry}
          required
        />

        <button type="submit" className="yellow-btn w-full mt-5" disabled={isSubmitting}>
          {isSubmitting ? "Creating account..." : "Start Your Investment Journey"}
        </button>
      </form>
    </>
  )
}

export default SignUpPage
