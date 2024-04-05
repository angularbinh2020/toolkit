const isMoneyValue = (money: number | string) =>
  (typeof money === "string" && money.trim() && !isNaN(+money)) ||
  typeof money === "number";

export const moneyDisplay = (moneyValue: number | string) => {
  let money = moneyValue;
  if (isMoneyValue(money)) {
    const chars: string[] = [];
    let percentPart = "";
    let moneyString = String(money);
    let isIncludePercent = false;
    if (moneyString.split(".").length > 2) {
      const parts = moneyString.split(".");
      moneyString = "";
      parts.forEach((part, partIndex) => {
        if (!partIndex) {
          moneyString += part + ".";
          return;
        }
        moneyString += part;
      });
    }
    if (moneyString.includes(".")) {
      percentPart = moneyString.split(".")[1];
      moneyString = moneyString.split(".")[0];
      isIncludePercent = true;
    }
    const stringLength = moneyString.length;
    moneyString
      .split("")
      .reverse()
      .forEach((char, charIndex) => {
        chars.push(char);
        if ((charIndex + 1) % 3 === 0 && charIndex + 1 < stringLength)
          chars.push(",");
      });
    let textResult = [...chars].reverse().join("");
    if (isIncludePercent) {
      textResult += "." + percentPart;
    }
    return textResult;
  }
  return money;
};
