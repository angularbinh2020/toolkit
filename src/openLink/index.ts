export const openLink = ({
  url,
  target,
}: {
  url: string;
  target?: "_blank" | "_self" | "_parent" | "_top" | "framename";
}) => {
  const aElement = document.createElement("a");
  aElement.href = url;
  if (target) aElement.target = target;
  aElement.click();
  aElement.remove();
};
