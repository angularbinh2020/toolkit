export const downloadFile = (fileUrl: string, fileName?: string) => {
  return fetch(fileUrl).then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = fileName || "";
      alink.click();
      alink.remove();
    });
  });
};
