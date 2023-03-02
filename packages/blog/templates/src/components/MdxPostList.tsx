/* eslint @typescript-eslint/no-unused-vars: warn */
import * as React from 'react';
import List from '@mui/material/List';
import { ListItemLink } from '@cieloazul310/gatsby-theme-aoi-components';
// import type { MdxPostBrowser } from '@cieloazul310/gatsby-theme-aoi-blog-types';

type MdxPostListProps = {
  /*
  posts: (Pick<MdxPostBrowser, 'id' | 'slug' | 'title' | 'date'> & {
    author: Pick<NonNullable<MdxPostBrowser['author']>, 'name'>;
  })[];
  */
};

/* { posts }: MdxPostListProps */
export function MdxPostList() {
  return null;
  /*
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
  */
}

type MdxPostEdgesListProps = {
  /*
  nodes: (Pick<MdxPostBrowser, 'id' | 'slug' | 'title' | 'date'> & {
    author: Pick<NonNullable<MdxPostBrowser['author']>, 'name'>;
  })[];
  */
};

/* { nodes }: MdxPostEdgesListProps */
function MdxPostEdgesList() {
  return null;
  // return <MdxPostList posts={nodes} />;
}

export default MdxPostEdgesList;
