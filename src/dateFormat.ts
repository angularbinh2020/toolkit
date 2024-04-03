import { isString } from "./isString";

enum Format {
  DD = "DD",
  MM = "MM",
  YYYY = "YYYY",
  hh = "hh",
  mm = "mm",
  ss = "ss",
}

const getStringNumber = (val: number) => {
  return val > 9 ? val : "0" + val;
};

export const dateFormat = (input: string | Date, format: string) => {
  const dateObj = isString(input) ? new Date(input) : (input as Date);
  if (isNaN(dateObj.getDate())) return format;
  const date = getStringNumber(dateObj.getDate());
  let result = format;
  const month = getStringNumber(dateObj.getMonth() + 1);
  const year = dateObj.getFullYear();
  const hours = getStringNumber(dateObj.getHours());
  const minutes = getStringNumber(dateObj.getMinutes());
  const seconds = getStringNumber(dateObj.getSeconds());
  const mapSyntax = {
    [Format.DD]: date,
    [Format.MM]: month,
    [Format.YYYY]: year,
    [Format.hh]: hours,
    [Format.mm]: minutes,
    [Format.ss]: seconds,
  };
  for (let syntax in mapSyntax) {
    result = result.replaceAll(
      syntax,
      mapSyntax[syntax as keyof typeof mapSyntax] as string
    );
  }
  return result;
};
