import * as fs from 'fs';
import * as path from 'path';
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
  const baseDir = '/content/posts/';
  const datetime = parseDate(date);
  const dateDir = dateToDirname(datetime);
  const titleSlug = strToSlug(title);
  const dir = path.join(
    pwd,
    baseDir,
    dateDir,
    isBoolean(canonical) && canonical ? titleSlug : ''
  );

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const name = isBoolean(canonical) && canonical ? 'index' : titleSlug;
  const extension = isBoolean(mdx) && mdx ? 'mdx' : 'md';
  const filename = `${name}.${extension}`;

  fs.writeFileSync(
    path.resolve(dir, filename),
    JSON.stringify(options, null, 2)
  );
  console.log(`Generate ${path.resolve(dir, filename)}!`);
}
