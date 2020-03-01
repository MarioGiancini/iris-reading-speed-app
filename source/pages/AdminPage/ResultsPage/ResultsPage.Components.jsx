import cs from 'classnames';
import styled from 'styled-components';
import { HTMLTable, Classes } from '@blueprintjs/core';

const Container = styled.div`
  display: flex;
  padding: 20px;
  padding-left: 0;
`;

const ActionPanel = styled.div.attrs({
  className: Classes.ELEVATION_2,
})`
  width: 400px;
  margin-right: 20px;
  padding: 10px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  background: white;
`;

const Table = styled(HTMLTable).attrs({
  className: cs(
    Classes.HTML_TABLE_BORDERED,
    Classes.HTML_TABLE_STRIPED,
    Classes.ELEVATION_2,
  ),
})`
  && {
    width: 100%;
    border-radius: 3px;
    background-color: white;
    table-layout: fixed;

    th {
      font-weight: 500;
    }
  }
`;

Table.Cell = styled.td`
  && {
    vertical-align: middle;
  }
`;

export {
  Table,
  Container,
  ActionPanel,
};
