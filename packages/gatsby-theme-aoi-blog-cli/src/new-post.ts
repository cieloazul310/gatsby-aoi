import * as fs from 'fs';
import * as path from 'path';
import findArchetypes from './findArchetypes';
import archetypesToMd from './archetypeToMd';
import { isString, isBoolean } from './utils';

function parseDate(dateString?: string | unknown) {
  if (!dateString || !isString(dateString)) return new Date();
  return new Date(dateString);
}
function dateToDirname(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  return `/${year}/${(month + 1).toString().padStart(2, '0')}`;
}
function strToSlug(str: string) {
  return str
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/ /g, '-')
    .replace(/[&/\\#,+()$~%.'":*?<>{}]/g, '');
}

type NewPostOptions = {
  [key: string]: string | boolean | undefined;
};

export default function newPost(title: string, options: NewPostOptions) {
  const pwd = process.env.PWD;
  if (!pwd) throw new Error();
  const { author, date, canonical, mdx } = options;

  /**
   * @todo
   * contentDir should be configured in the root gatsby project.
   */
  const baseDir = '/content/posts/';
  const datetime = parseDate(date);
  const dateDir = dateToDirname(datetime);
  const titleSlug = strToSlug(title);

  // /content/posts/2022/02
  const dir = path.join(pwd, baseDir, dateDir);
  // /content/posts/2022/02/${slug}
  const slugDir = path.join(dir, titleSlug);
  const isCanonical = isBoolean(canonical) && canonical;

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (
    fs.existsSync(path.resolve(dir, `${titleSlug}.md`)) ||
    fs.existsSync(path.resolve(dir, `${titleSlug}.mdx`)) ||
    fs.existsSync(slugDir)
  ) {
    throw new Error(`${titleSlug} is already exists!`);
  }
  if (isCanonical) {
    fs.mkdirSync(slugDir);
  }
  const name = isCanonical ? 'index' : titleSlug;
  const extension = isBoolean(mdx) && mdx ? 'mdx' : 'md';
  const filename = `${name}.${extension}`;
  const filePath = path.resolve(isCanonical ? slugDir : dir, filename);

  if (fs.existsSync(filePath)) {
    throw new Error(`${filePath} already exists!`);
  }
  const archetypePath = findArchetypes(pwd);
  const md = archetypesToMd(archetypePath, {
    title,
    date: datetime,
    author: isString(author) ? author : 'Unknown author',
  });

  fs.writeFileSync(filePath, md);
  /* eslint-disable-next-line no-console */
  console.log(`Generate ${path.resolve(dir, filename)}!`);
}
