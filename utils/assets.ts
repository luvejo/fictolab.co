
function getAssetUrl(fileName: string) {
  return `https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/${fileName}?alt=media`
}

export { getAssetUrl }