import * as path from 'path';
// import slugify from '@sindresorhus/slugify';
// import type { ThemeOptions } from './types';
import type { ThemeOptions } from '@cieloazul310/gatsby-theme-aoi-blog-types';

export function strToSlug(str: string) {
  // return slugify(str);

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
  const slug = strToSlug(fieldValue);
  if (field === 'categories') return path.join(basePaths.category, slug);
  // `${basePaths.category}/${strToSlug(fieldValue)}`;
  if (field === 'tags') return path.join(basePaths.tag, slug);
  // `${basePaths.tag}/${strToSlug(fieldValue)}`;
  if (field === 'author.name') return path.join(basePaths.author, slug);
  // return `${basePaths.author}/${strToSlug(fieldValue)}`;
  return slug;
}

export function createSlug(basePath: string, str: string) {
  const slug = strToSlug(str);
  return path.join(basePath, slug);
  // return `${basePath}/${strToSlug(str)}`;
}
