"use client";
import Hydration from "@/components/Hydration/Hydration";
import { AuthSchema } from "@/components/Validator/Schema";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function Page() {
  const { push } = useRouter();
  const onSubmit = async (values, actions) => {
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          email: values.email,
          password: values.password,
          confirmpassword: values.confirmpassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      console.log(data);
      push(data.redirect);
    } catch (error) {
      console.log(error);
    }
  };

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        password: "",
        email: "",
        confirmpassword: "",
      },
      validationSchema: AuthSchema,
      onSubmit,
    });

  return (
    <Hydration>
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-8 bg-white rounded-lg shadow"
        >
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-semibold">
              Email
            </label>
            <input
              id="email"
              className={`${
                touched.email && errors.email
                  ? "border border-red-600"
                  : "border"
              } p-2 w-full outline-none rounded`}
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-1 font-semibold">
              Password
            </label>
            <input
              id="password"
              type="password"
              className={`${
                touched.password && errors.password
                  ? "border border-red-600"
                  : "border"
              } p-2 w-full outline-none rounded`}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <p className="text-red-600 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmpassword"
              className="block mb-1 font-semibold"
            >
              Confirm Password
            </label>
            <input
              id="confirmpassword"
              className={`${
                touched.confirmpassword && errors.confirmpassword
                  ? "border border-red-600"
                  : "border"
              } p-2 w-full outline-none rounded`}
              type="password"
              value={values.confirmpassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirmpassword && touched.confirmpassword && (
              <p className="text-red-600 text-sm mt-1">
                {errors.confirmpassword}
              </p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-black w-full text-white p-2 rounded"
            >
              SIGN UP
            </button>
          </div>

          <div className="flex items-center justify-between my-2 text-sm">
          <Link href={'/login'}>Already I've an account?</Link>
        </div>
        </form>
      </div>
    </Hydration>
  );
}

export default Page;
