export function strToSlug(str: string) {
  return str
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/ /g, '-')
    .replace(/[&/\\#,+()$~%.'":*?<>{}]/g, '');
}

export function isString(str: unknown): str is string {
  return typeof str === 'string';
}
