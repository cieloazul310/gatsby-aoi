export function isInternal(url: string) {
  return /^\/(?!\/)/.test(url);
}

export function useLinkType(url: string | undefined | null) {
  if (!url) return "not-link";
  if (isInternal(url)) return "internal";
  if (url.slice(0, 1) === "#") return "section";
  if (url.slice(0, 7) === "mailto:") return "mail";
  return "external";
}
/*
export function useLinkPropsByType(href: string | undefined | null) {
  const linkType = useLinkType(href);
  
};
*/
