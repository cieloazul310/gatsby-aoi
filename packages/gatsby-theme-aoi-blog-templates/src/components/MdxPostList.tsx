import * as React from 'react';
import List from '@mui/material/List';
import { ListItemLink } from '@cieloazul310/gatsby-theme-aoi-components';
import { MdxPostBrowser } from '@cieloazul310/gatsby-theme-aoi-blog-utils';

type MdxPostListProps = {
  posts: (Pick<MdxPostBrowser, 'id' | 'slug' | 'title' | 'date'> & {
    author: Pick<NonNullable<MdxPostBrowser['author']>, 'name'>;
  })[];
};

export function MdxPostList({ posts }: MdxPostListProps) {
  return (
    <List>
      {posts.map(({ id, slug, title, date, author }, index) => (
        <ListItemLink
          key={id}
          to={slug}
          primaryText={title}
          secondaryText={`${date} post by ${author.name}`}
          divider={index !== posts.length - 1}
        />
      ))}
    </List>
  );
}

type MdxPostEdgesListProps = {
  edges: {
    node: Pick<MdxPostBrowser, 'id' | 'slug' | 'title' | 'date'> & {
      author: Pick<NonNullable<MdxPostBrowser['author']>, 'name'>;
    };
  }[];
};

function MdxPostEdgesList({ edges }: MdxPostEdgesListProps) {
  return <MdxPostList posts={edges.map(({ node }) => node)} />;
}

export default MdxPostEdgesList;
