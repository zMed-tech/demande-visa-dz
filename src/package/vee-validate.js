import { extend } from "vee-validate";
import { required, alpha, integer, email } from "vee-validate/dist/rules";

extend("email", email);
extend("required", required);
extend("integer", integer);
extend("alpha", alpha);
