/* eslint no-console: off */
import * as fs from 'fs';
import * as path from 'path';
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
  console.log(author, date, canonical, mdx);
  console.log(__dirname);
  const archetypesPath = path.resolve(__dirname, '../archetypes.md');

  const baseDir = '/content/posts/';
  const datetime = parseDate(date);
  const dateDir = dateToDirname(datetime);
  const titleSlug = strToSlug(title);
  // /content/posts/2022/02
  let dir = path.join(pwd, baseDir, dateDir);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (isBoolean(canonical) && canonical) {
    // /content/posts/2022/02/titleSlug
    dir = path.join(dir, titleSlug);
    if (fs.existsSync(dir)) {
      throw new Error(`${dir} already exists!`);
    }
    fs.mkdirSync(dir);
  }

  const name = isBoolean(canonical) && canonical ? 'index' : titleSlug;
  const extension = isBoolean(mdx) && mdx ? 'mdx' : 'md';
  const filename = `${name}.${extension}`;
  const filePath = path.resolve(dir, filename);

  if (fs.existsSync(filePath)) {
    throw new Error(`${filePath} already exists!`);
  }
  const md = archetypesToMd(archetypesPath, {
    title,
    date: datetime,
    author: isString(author) ? author : 'Unknown author',
  });

  fs.writeFileSync(filePath, md);
  console.log(`Generate ${path.resolve(dir, filename)}!`);
}
