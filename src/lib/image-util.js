function getAssetURL(name) {
  return new URL(`../assets/${name}`, import.meta.url).href;
}

export { getAssetURL };
