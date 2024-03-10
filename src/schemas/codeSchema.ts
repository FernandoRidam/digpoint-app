import { CodeForm } from "@/types/forms";
import * as yup from "yup";

export default yup.object<CodeForm>().shape({
  code: yup.string().length(4).required(""),
});
