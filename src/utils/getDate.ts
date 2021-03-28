import { addDays, format } from "date-fns";

const getDate = (numberOfDays: number = 0): string =>
  format(addDays(new Date(), numberOfDays), "dd-MM-yy");

export { getDate };
