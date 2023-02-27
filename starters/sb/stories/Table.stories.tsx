import * as React from 'react';
import {
  Table,
  THead,
  TBody,
  Tr,
  Td,
} from '@cieloazul310/gatsby-theme-aoi-components';

export default {
  title: 'Table',
  component: Table,
};

export function Basic() {
  return (
    <Table>
      <THead>
        <Tr>
          <Td component="th">Number</Td>
          <Td component="th">Name</Td>
          <Td component="th">Pos</Td>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>1</Td>
          <Td>Koji Honma</Td>
          <Td>GK</Td>
        </Tr>
        <Tr>
          <Td>1</Td>
          <Td>Koji Honma</Td>
          <Td>GK</Td>
        </Tr>
        <Tr>
          <Td>1</Td>
          <Td>Koji Honma</Td>
          <Td>GK</Td>
        </Tr>
        <Tr>
          <Td>1</Td>
          <Td>Koji Honma</Td>
          <Td>GK</Td>
        </Tr>
      </TBody>
    </Table>
  );
}
