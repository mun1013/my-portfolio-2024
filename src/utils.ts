export function stripHtmlTags(str: string) {
  return str
    .replace(/<\/?[^>]+(>|$)/g, "")
    .replace(/"/g, "")
    .replace(/\n/g, "");
}

export function extractSentences(str: string) {
  const sentences = str.match(/[^.|?]+[.|?]+/g) || [];
  return sentences.slice(0, 3);
}

export function extractImageLink(str: string) {
  const match = str.match(/<img[^>]+src=\"([^">]+)\"/);
  return match ? match[1] : null;
}

export function decodeAmpersand(str: string) {
  return str.replace(/&amp;/g, "&");
}

export function setTheme(themeName: string) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

