/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import MuiPagination from '@mui/material/Pagination';
import MuiPaginationItem from '@mui/material/PaginationItem';

type PaginationProps = {
  numPages: number;
  currentPage: number;
  basePath: string;
};

function Pagination({ numPages, currentPage, basePath }: PaginationProps) {
  return (
    <MuiPagination
      size="large"
      count={numPages}
      defaultPage={currentPage}
      boundaryCount={2}
      renderItem={(item) => (
        <MuiPaginationItem
          component={GatsbyLink}
          to={item.page === 1 ? basePath : `${basePath}/${item.page}`}
          {...item}
        />
      )}
    />
  );
}

export default Pagination;
