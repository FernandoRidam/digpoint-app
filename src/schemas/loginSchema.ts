import { LoginForm } from "@/types/forms";
import * as yup from "yup";

const requiredMessage = " Is required."
const invalidEmailMessage = "Invalid Email."

export default yup.object<LoginForm>().shape({
  email: yup.string().required("Email" + requiredMessage).email(invalidEmailMessage),
  password: yup.string().required("Password" + requiredMessage),
});
