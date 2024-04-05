import { isString } from "../isString";
import { RegexPattern } from "../regex";

export const removeAllHtmlTag = (
  stringContent: string,
  overWriteString: string = ""
) => {
  if (isString(stringContent)) {
    return stringContent.replace(RegexPattern.HTML_TAG, overWriteString);
  }
  return stringContent;
};
