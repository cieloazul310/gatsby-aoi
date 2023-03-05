/*  eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import {
  Table,
  THead,
  TBody,
  Tr,
  Td,
} from '@cieloazul310/gatsby-theme-aoi-components';
import type { TableProps } from '@mui/material/Table';

function createPosition(num: number) {
  if (num < 0.1) return 'GK';
  if (num < 0.4) return 'DF';
  if (num < 0.8) return 'MF';
  return 'FW';
}

function createFirstName(num: number) {
  if (num < 0.1) return 'John';
  if (num < 0.2) return 'Paul';
  if (num < 0.3) return 'George';
  if (num < 0.4) return 'Ringo';
  if (num < 0.5) return 'Otaki';
  if (num < 0.6) return 'Hosono';
  if (num < 0.7) return 'Matsumoto';
  if (num < 0.8) return 'Suzuki';
  if (num < 0.9) return 'Hayashi';
  return 'Matsutoya';
}

function createLastName(num: number) {
  if (num < 0.1) return 'Lennon';
  if (num < 0.2) return 'McCartney';
  if (num < 0.3) return 'Harrison';
  if (num < 0.4) return 'Starr';
  if (num < 0.5) return 'Eichi';
  if (num < 0.6) return 'Haruomi';
  if (num < 0.7) return 'Takashi';
  if (num < 0.8) return 'Shigeru';
  if (num < 0.9) return 'Tatsuo';
  return 'Masataka';
}

function createName() {
  const firstName = createFirstName(Math.random());
  const lastName = createLastName(Math.random());
  return `${firstName} ${lastName}`;
}

function useData(length: number) {
  return React.useMemo(
    () =>
      Array.from({ length }, (_, index) => ({
        index,
        position: createPosition(Math.random()),
        name: createName(),
      })),
    [length]
  );
}

type TableExampleProps = Omit<TableProps, 'ref' | 'children'> & {
  length: number;
};

function TableExample({ length, ...props }: TableExampleProps) {
  const data = useData(length);
  const header = React.useMemo(() => {
    const cols = Object.keys(data[0]);
    return (
      <THead>
        {cols.map((label) => (
          <Td key={label} component="th">
            {label}
          </Td>
        ))}
      </THead>
    );
  }, [data]);

  return (
    <Table {...props}>
      {header}
      <TBody>
        {data.map(({ index, position, ...others }) => (
          <Tr key={index.toString()}>
            <Td>{index.toString()}</Td>
            <Td>{position}</Td>
            <Td>{others.name}</Td>
          </Tr>
        ))}
      </TBody>
    </Table>
  );
}

export default TableExample;
