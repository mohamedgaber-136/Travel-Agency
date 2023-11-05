import { object, string, number, bool, date } from "yup";

export let bookingSchema = object({
  creditCard: number().required(),
  username: string().required(),
  expireDate: string()
    .required()
    .matches(/^[0-9]{2}\/[0-9]{2}$/),
  cvc: string()
    .required()
    .matches(/^[0-9]{3}$/, "Must be exactly 3 digits"),
  country: string().required(),
  license: bool().oneOf([true], "You must accept the terms and conditions"),
});
