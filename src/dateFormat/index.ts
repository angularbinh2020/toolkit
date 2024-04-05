import { isString } from "../isString";

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

/**
 * @example format = "DD/MM/YYYY hh:mm:ss" => "30/05/2024 13:20:30"
 * @description DD : days of Month (01 - 31)
 * @description MM: month of year (01 - 12)
 * @description YYYY: year
 * @description hh: hours (24h format)
 * @description mm: minutes
 * @description ss: seconds
 */
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
