import * as React from 'react';
import { Table } from '@cieloazul310/gatsby-theme-aoi-components';
import TableExample from '../components/Table';

export default {
  title: 'Table',
  component: Table,
};

export function Basic() {
  return <TableExample length={10} />;
}

export function Longer() {
  return <TableExample length={40} />;
}

export function Small() {
  return <TableExample length={10} size="small" />;
}
