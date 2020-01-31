import cs from 'classnames';
import styled from 'styled-components';
import { HTMLTable, Classes } from '@blueprintjs/core';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const Content = styled.div`
  padding: 20px;
`;

const Table = styled(HTMLTable).attrs({
  className: cs(
    Classes.HTML_TABLE_BORDERED,
    Classes.HTML_TABLE_STRIPED,
    Classes.ELEVATION_2,
  ),
})`
  width: 100%;
  border-radius: 3px;
  background-color: white;
`;

export {
  Table,
  Content,
  Container,
};
