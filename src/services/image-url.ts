const imageCroppedUrl = (url: string) => {
  if (!url) return "";

  const target = "media/";
  const indexOfMedia = url.indexOf(target) + target.length;
  const newUrl =
    url.slice(0, indexOfMedia) + "crop/600/400/" + url.slice(indexOfMedia);
  return newUrl;
};

export default imageCroppedUrl;
