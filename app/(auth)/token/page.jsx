'use client'
import Hydration from "@/components/Hydration/Hydration";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";

function VerifyTokenPage() {
  const { push } = useRouter();

  const onSubmit = async (values, actions) => {
    try {
      const res = await fetch("/api/auth/register", {
        method: "PUT",
        body: JSON.stringify({
          token: values.token,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      push(data);
    } catch (error) {
      console.log(error);
    }
  };

  const {values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      token: "",
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
            <label htmlFor="token" className="block mb-1 font-semibold">
              Enter Token
            </label>
            <input
              id="token"
              type="text"
              value={values.token}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border p-2 w-full outline-none rounded"
            />
          </div>

          <div className="text-center">
            <button type="submit" className="bg-black w-full text-white p-2 rounded">
              VERIFY TOKEN
            </button>
          </div>
        </form>
      </div>
    </Hydration>
  );
}

export default VerifyTokenPage;
