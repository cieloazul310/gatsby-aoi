import { Link as GatsbyLink } from 'gatsby';
import Box from '@mui/material/Box';
import MuiPagination from '@mui/material/Pagination';
import MuiPaginationItem from '@mui/material/PaginationItem';

type PaginationProps = {
  numPages: number;
  currentPage: number;
  basePath: string;
};

function Pagination({ numPages, currentPage, basePath }: PaginationProps) {
  return (
    <Box display="flex" flexDirection="row" justifyContent="center" pt={2}>
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
    </Box>
  );
}

export default Pagination;
