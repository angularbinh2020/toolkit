export const copyToClipboard = (content: string) => {
  if (navigator.clipboard) return navigator.clipboard.writeText(content);
  return new Promise((resolve) => {
    const textAreaElement = document.createElement("input");
    document.body.append(textAreaElement);
    textAreaElement.value = content;
    textAreaElement.select();
    document.execCommand("copy");
    textAreaElement.remove();
    resolve(null);
  });
};
