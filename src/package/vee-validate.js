import { extend } from "vee-validate";
import {
  required,
  alpha,
  integer,
  email,
  alpha_spaces,
} from "vee-validate/dist/rules";

extend("email", email);
extend("required", required);
extend("integer", integer);
extend("alpha", alpha);
extend("alpha_spaces", alpha_spaces);
