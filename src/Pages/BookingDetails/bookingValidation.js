import { object, string, number, bool, date } from "yup";

export let bookingSchema = object({
  creditCard: string("credit card is required").required(
    "credit card is required"
  ),
  username: string().required("user name is required"),
  expireDate: string().required("date can not be empty"),
  // .matches(/^[0-9]{2}\/[0-9]{2}$/,"Must be exactly 3 digits"),

  country: string().required("country is required"),
  license: bool().required().oneOf([true], "You must accept the terms and conditions"),
  cvc: string()
    .required()
    .matches(/^[0-9]{3}$/)
    .oneOf([true], "CVC Must be exactly 3 digits"),
});
