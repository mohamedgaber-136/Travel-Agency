import { object, string, number, bool, date } from "yup";

export let bookingSchema = object({
  creditCard: number().required(),
  username: string().required(),
  expireDate: date().default(() => new Date()),
  cvc: number().required(),
  country: string().required(),
  license: bool().oneOf([true], "You must accept the terms and conditions"),
});
