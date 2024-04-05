export const isObjectHasOwnProperty = (obj: any, propertyName: string) =>
  Object.keys(obj).includes(propertyName);
