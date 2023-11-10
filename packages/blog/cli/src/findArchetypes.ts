import * as fs from "fs";
import * as path from "path";

function findArchetypes(pwd: string) {
  /**
   * @todo
   * contentDir should be configured in the root gatsby project.
   */
  const contentDir = "/content";

  const absoluteContentDir = path.join(pwd, contentDir);
  const md = path.resolve(absoluteContentDir, "archetypes.md");
  const mdx = path.resolve(absoluteContentDir, "archetypes.mdx");

  if (fs.existsSync(md)) return md;
  if (fs.existsSync(mdx)) return mdx;

  return path.resolve(__dirname, "../archetypes.md");
}

export default findArchetypes;
