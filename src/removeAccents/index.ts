const config = {
  a: /[àáạảãâầấậẩẫăằắặẳẵ]/g,
  e: /[èéẹẻẽêềếệểễ]/g,
  i: /[ìíịỉĩ]/g,
  o: /[òóọỏõôồốộổỗơờớợởỡ]/g,
  u: /[ùúụủũưừứựửữ]/g,
  y: /[ỳýỵỷỹ]/g,
  d: /đ/g,
  A: /[ÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴ]/g,
  E: /[ÈÉẸẺẼÊỀẾỆỂỄ]/g,
  I: /[ÌÍỊỈĨ]/g,
  O: /[ÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠ]/g,
  U: /[ÙÚỤỦŨƯỪỨỰỬỮ]/g,
  Y: /[ỲÝỴỶỸ]/g,
  D: /Đ/g,
};

export const removeAccents = (str: string): string => {
  for (const replaceValue in config) {
    str = str.replace(
      config[replaceValue as keyof typeof config],
      replaceValue
    );
  }
  return str;
};
