import * as yup from "yup";

export const registerSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(/^\d+$/, "Phone number must be digits only")
    .min(10, "Must be at least 10 digits")
    .required("Required"),    
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup.string().email("Invalid Email Address").required("Required"),
  companyName: yup.string().required("Required"),
  role: yup.string().required("Required"),
  concerns: yup.string().required("Required"),
});
