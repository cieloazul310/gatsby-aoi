/* eslint @typescript-eslint/no-unused-vars: warn */
import * as React from 'react';
import List from '@mui/material/List';
import { ListItemLink } from '@cieloazul310/gatsby-theme-aoi-components';
import type { MdxPostListFragment } from '@cieloazul310/gatsby-theme-aoi-blog-types';

type MdxPostListProps = {
  posts: MdxPostListFragment[];
};

function MdxPostList({ posts }: MdxPostListProps) {
  return (
    <List>
      {posts.map(({ id, slug, title, date, author }, index) => (
        <ListItemLink
          key={id}
          href={slug}
          primaryText={title}
          secondaryText={`${date} post by ${author.name}`}
          divider={index !== posts.length - 1}
        />
      ))}
    </List>
  );
}

export default MdxPostList;
