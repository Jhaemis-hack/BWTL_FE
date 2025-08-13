import { Axios } from "@/config";
import { Request } from "@/lib/request";
import { registerSchema } from "@/schema";
import { useFormik, type FormikHelpers } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface ResponseInterface {
  success: boolean;
  data: any;
}

const Register = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  // const [isOpen, setIsOpen] = useState<boolean>(true);
  const navigate = useNavigate();

  interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    companyName: string;
    role: string;
    concerns: string;
    gender: string;
  }

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    role: "",
    concerns: "",
    gender: "",
  };
  const onSubmit = async (
    payload: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    // try {
    //   const res: ResponseInterface = await Axios.post(
    //     `${Request.register}`,
    //     payload
    //   );
    //   console.log(res);

    //   if (res.success) {
    //     toast.success(res.data.message);
    //   }
    // } catch (error: any) {
    //   if (error.response)
    //     toast.error(
    //       error?.response.data.message || "An error occurred, try again"
    //     );
    // }

    console.log(payload);
    // setIsOpen(true);
    navigate("/register/success");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const {
    values,
    touched,
    handleChange,
    handleBlur,
    errors,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: registerSchema,
    onSubmit,
  });

  return (
    <form
      id="register"
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-transparent min-h-screen flex flex-col my-18"
    >
      <div className="px-6 py-5">
        <h1 className="text-center text-2xl font-bold text-[#2F9E44] mb-2">
          Let's secure a spot for you!
        </h1>
        {/* <p className="text-center text-[#CFCFCF]">
          Let's secure a spot for you!
        </p> */}
      </div>
      <div className="flex-1 px-6 space-y-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-[#F4F4F5] mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-3 py-3 border text-[#F4F4F5] ${
              values.firstName
                ? "border-[#2F9E44] border-2"
                : "border-[#CFCFCF]"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F9E44] focus:border-transparent ${
              errors.firstName && touched.firstName
                ? "border border-red-500"
                : ""
            }`}
            placeholder="Enter your first Name"
          />
          {errors.firstName && touched.firstName && (
            <p className="text-red-500 text-sm font-medium">
              {errors.firstName}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-[#F4F4F5] mb-2"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-3 py-3 border text-[#F4F4F5] ${
              values.lastName ? "border-[#2F9E44] border-2" : "border-[#CFCFCF]"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F9E44] focus:border-transparent ${
              errors.lastName && touched.lastName ? "border border-red-500" : ""
            }`}
            placeholder="Enter your last Name"
          />
          {errors.lastName && touched.lastName && (
            <p className="text-red-500 text-sm font-medium">
              {errors.lastName}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#F4F4F5] mb-2"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-3 py-3 border ${
              values.email ? "border-[#2F9E44] border-2" : "border-[#CFCFCF]"
            } text-[#F4F4F5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F9E44]  focus:border-transparent ${
              errors.email && touched.email ? "border border-red-500" : ""
            }`}
            placeholder="Enter your email address"
          />
          {errors.email && touched.email && (
            <p className="text-red-500 text-sm font-medium">{errors.email}</p>
          )}
        </div>

        {/* <div>
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-[#F4F4F5] mb-2"
          >
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={values.gender}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-3 py-3 border ${
              values.gender ? "border-[#2F9E44] border-2" : "border-[#CFCFCF]"
            } text-[#F4F4F5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F9E44]  focus:border-transparent ${
              errors.gender && touched.gender ? "border border-red-500" : ""
            }`}
          />
          {errors.gender && touched.gender && (
            <p className="text-red-500 text-sm font-medium">{errors.gender}</p>
          )}
        </div> */}
        <div>
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-[#F4F4F5] mb-2"
          >
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={values.gender}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-3 py-3 border ${
              values.gender ? "border-[#2F9E44] border-2" : "border-[#CFCFCF]"
            }  text-[#0B0B0F] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F9E44] focus:text-[#F4F4F5] focus:border-transparent ${
              errors.gender && touched.gender ? "border border-red-500" : ""
            }`}
          >
            <option className=" text-[#0B0B0F]" value="">Select gender</option>
            <option className="text-[#0B0B0F]" value="male">Male</option>
            <option className="text-[#0B0B0F]" value="female">Female</option>
          </select>

          {errors.gender && touched.gender && (
            <p className="text-red-500 text-sm font-medium">{errors.gender}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-[#F4F4F5] mb-2"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-3 py-3 border ${
              values.phone ? "border-[#2F9E44] border-2" : "border-[#CFCFCF]"
            } text-[#F4F4F5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F9E44]  focus:border-transparent ${
              errors.phone && touched.phone ? "border border-red-500" : ""
            }`}
            placeholder="Enter your last name"
          />
          {errors.phone && touched.phone && (
            <p className="text-red-500 text-sm font-medium">{errors.phone}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-[#F4F4F5] mb-2"
          >
            Business/Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={values.companyName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-3 py-3 border ${
              values.companyName
                ? "border-[#2F9E44] border-2"
                : "border-[#CFCFCF]"
            } text-[#F4F4F5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F9E44]  focus:border-transparent ${
              errors.companyName && touched.companyName
                ? "border border-red-500"
                : ""
            }`}
            placeholder="Enter your last name"
          />
          {errors.companyName && touched.companyName && (
            <p className="text-red-500 text-sm font-medium">
              {errors.companyName}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-[#F4F4F5] mb-2"
          >
            Role/title
          </label>
          <input
            type="text"
            id="role"
            name="role"
            value={values.role}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-3 py-3 border ${
              values.role ? "border-[#2F9E44] border-2" : "border-[#CFCFCF]"
            } text-[#F4F4F5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F9E44]  focus:border-transparent ${
              errors.role && touched.role ? "border border-red-500" : ""
            }`}
            placeholder="Enter your last name"
          />
          {errors.role && touched.role && (
            <p className="text-red-500 text-sm font-medium">{errors.role}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="concerns"
            className="block text-sm font-medium text-[#F4F4F5] mb-2"
          >
            legal concern/area of interest
          </label>
          <textarea
            id="concerns"
            name="concerns"
            value={values.concerns}
            onChange={handleChange}
            onBlur={handleBlur}
            wrap="soft"
            rows={5}
            className={`w-full px-3 py-1 border ${
              values.concerns ? "border-[#2F9E44] border-2" : "border-[#CFCFCF]"
            } text-[#F4F4F5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F9E44]  focus:border-transparent ${
              errors.concerns && touched.concerns ? "border border-red-500" : ""
            }`}
            placeholder="what are your major concerns?"
          />
          {errors.concerns && touched.concerns && (
            <p className="text-red-500 text-sm font-medium">
              {errors.concerns}
            </p>
          )}
        </div>
        <div className="flex items-start gap-3 pt-0">
          <input
            type="checkbox"
            id="terms"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            className="mt-1 w-4 h-4 border-gray-300 rounded focus:ring-[#111111] "
          />
          <label
            htmlFor="terms"
            className={`text-sm text-[#F4F4F5] leading-relaxed ${
              isChecked ? "text-green-600" : ""
            }`}
          >
            I will like to recieve further information about the session
          </label>
        </div>
        <div className="px-6 pb-12 pt-6">
          <button
            type="submit"
            disabled={isSubmitting || !isChecked}
            className="disabled:opacity-75 disabled:cursor-not-allowed w-full bg-[#1B2A41] hover:bg-gray-800  text-white py-4 rounded-xl font-bold transition-colors mb-4"
          >
            register me
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;

//     payload: FormValues,
//     actions: FormikHelpers<FormValues>
//   ) => {
//     if (!isChecked) {
//       toast.error("Please check the box to proceed");
//       return;
//     }
//     try {
//       const res: ResponseInterface = await Axios.put(
//         `${Request.updateUser}/${userId}`,
//         payload
//       );
//       console.log(res);

//       const email = res.data.user.email;
//       const firstName = res.data.user.firstName;
//       const lastName = res.data.user.lastName;
//       const role = res.data.user.role;
//       const profilePic = res.data.user.profilePic;

//       if (res.success) {
//         useAuthSlice
//           .getState()
//           .setUserData(firstName, lastName, email, role, profilePic);
//         toast.success(res.data.message);
//         router.push("/verify-email");
//       }
//     } catch (error: any) {
//       if (error.response)
//         toast.error(
//           error.response.data.message || "An error occurred, try again"
//         );
//     }
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     actions.resetForm();
