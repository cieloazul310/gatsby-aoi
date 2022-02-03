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

export function validURL(str: string) {
  try {
    const url = new URL(str);
    return true;
  } catch {
    return false;
  }
}

export const basePaths = {
  posts: '/posts',
  category: '/category',
  tag: '/tag',
  author: '/author',
};

export function fieldValueToSlug({
  field,
  fieldValue,
}: {
  field: string;
  fieldValue: string;
}) {
  if (field === 'categories')
    return `${basePaths.category}/${strToSlug(fieldValue)}`;
  if (field === 'tags')
    return `${basePaths.tag}/${strToSlug(fieldValue)}`;
  if (field === 'author.name') return `${basePaths.author}/${strToSlug(fieldValue)}`;
  return strToSlug(fieldValue);
}

export function createSlug(type: keyof typeof basePaths, str: string) {
  const basePath = basePaths[type];
  return `${basePath}/${strToSlug(str)}`;
}