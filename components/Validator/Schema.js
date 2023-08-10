import * as yup from "yup";

const AuthSchema = yup.object().shape({
  email: yup.string().email().required("required"),
  password: yup.string().required("required").min(5),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "passwords don't match")
    .required("required")
    .min(5),
});

const AuthSchema2 = yup.object().shape({
  email: yup.string().email().required("required"),
  password: yup.string().required("required").min(5)
  
});

export { AuthSchema,AuthSchema2 };
