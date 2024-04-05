import { isString } from "../isString";

export const callPhoneNumber = (phoneNumber: string) => {
  if (isString(phoneNumber) && phoneNumber.trim()) {
    const phone = phoneNumber.trim().replace(/\s/, "");
    const linkElement = document.createElement("a");
    linkElement.href = `tel:${phone}`;
    document.body.appendChild(linkElement);
    linkElement.click();
    linkElement.remove();
  }
};
