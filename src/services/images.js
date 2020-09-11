const baseUrl = "https://api.adorable.io/avatars/285";

function getRandomId() {
  var limit = 1000;
  return Math.floor(Math.random() * limit);
}

export function getNewImageData(container) {
  const id = getRandomId();
  return { url: baseUrl + "/" + id + ".png", id };
}
