import { ConfirmExitForm } from "@/types/forms";
import * as yup from "yup";

const requiredMessage = " Is required."

export default yup.object<ConfirmExitForm>().shape({
  password: yup.string().required("Password" + requiredMessage),
});
