import * as fs from 'fs';

export default function archetypesToMd(
  archetypesPath: string,
  { title, date, author }: { title: string; date: Date; author: string }
) {
  const lines = fs.readFileSync(archetypesPath, 'utf8').split('\n');
  const regTitle = /title:/;
  const regDate = /date:/;
  const regAuthor = /author:/;

  return lines
    .map((line) => {
      if (regTitle.test(line)) {
        return `title: ${title}`;
      }
      if (regDate.test(line)) {
        return `date: ${date.toISOString()}`;
      }
      if (regAuthor.test(line)) {
        return `author: ${author}`;
      }
      return line;
    })
    .join('\n');
}
