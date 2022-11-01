import type { ThemeOptions } from './types';

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

export function isBoolean(bool: unknown): bool is boolean {
  return typeof bool === 'boolean';
}

export function validURL(str: string) {
  try {
    const url = new URL(str);
    /**
     * avoid ts6133
     */
    if (!url) return false;
    return true;
  } catch {
    return false;
  }
}

type FieldValues = {
  field: string;
  fieldValue: string;
};

export function fieldValueToSlug(
  { field, fieldValue }: FieldValues,
  basePaths: ThemeOptions['basePaths']
) {
  if (field === 'categories')
    return `${basePaths.category}/${strToSlug(fieldValue)}`;
  if (field === 'tags') return `${basePaths.tag}/${strToSlug(fieldValue)}`;
  if (field === 'author.name')
    return `${basePaths.author}/${strToSlug(fieldValue)}`;
  return strToSlug(fieldValue);
}

export function createSlug(basePath: string, str: string) {
  return `${basePath}/${strToSlug(str)}`;
}
