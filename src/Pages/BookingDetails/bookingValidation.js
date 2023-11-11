import { object, string, number, bool, date } from "yup";

export let bookingSchema = object({
  creditCard: string("credit card is required").required(
    "credit card is required"
  ),
  username: string().required("user name is required"),
  expireDate: string().required("date can not be empty"),

  country: string().required("country is required"),
  license: bool().required().oneOf([true], "You must accept the terms and conditions"),
  cvc: string()
    .matches(/^[0-9]{3}$/,"CVC Must be exactly 3 digits")
});
