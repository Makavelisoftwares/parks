'use client'
import Hydration from "@/components/Hydration/Hydration";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";

function ChangePasswordPage() {
  const { push } = useRouter();

  const onSubmit = async (values, actions) => {
    try {
      const res = await fetch("/api/auth/password", {
        method: "PUT",
        body: JSON.stringify({
          password: values.password,
          email: values.email,
          newpassword: values.newpassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      // console.log(data);
      push(data.redirect);
    } catch (error) {
      console.log(error);
    }
  };

  const {values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
      newpassword: "",
    },
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
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border p-2 w-full outline-none rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-1 font-semibold">
              Old Password
            </label>
            <input
              id="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border p-2 w-full outline-none rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="newpassword" className="block mb-1 font-semibold">
              New Password
            </label>
            <input
              id="newpassword"
              type="password"
              value={values.newpassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border p-2 w-full outline-none rounded"
            />
          </div>

          <div className="text-center">
            <button type="submit" className="bg-black w-full text-white p-2 rounded">
              SAVE PASSWORD
            </button>
          </div>
        </form>
      </div>
    </Hydration>
  );
}

export default ChangePasswordPage;
