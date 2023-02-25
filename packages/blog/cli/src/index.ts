import { Command } from 'commander';
import newPost from './new-post';

const program = new Command();

program
  .command('new')
  .command('post')
  .argument('<title>', "New post's title.")
  .option('-a, --author <author>', "New post's author name.", undefined)
  .option('-d, --date <date>', "New post's date.", undefined)
  .option(
    '--canonical',
    'Canonicalize (create `/{slug}/index.{md,mdx}`) (default: `false`)',
    false
  )
  .option('--mdx', 'Create MDX file (default: `false`)', false)
  .action(newPost);

program.parse();
