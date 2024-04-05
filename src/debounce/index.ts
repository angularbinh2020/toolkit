export const debounce = function (func: any, defferTime: number) {
  let timeoutId: any;
  if (typeof defferTime !== "number") return func;
  return (...rest: any) => {
    timeoutId && clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func?.(...rest);
      timeoutId = undefined;
    }, defferTime);
  };
};
