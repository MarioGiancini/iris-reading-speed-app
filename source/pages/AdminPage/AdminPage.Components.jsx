import cs from 'classnames';
import styled from 'styled-components';
import { HTMLTable, Classes } from '@blueprintjs/core';

import BackgroundPattern from 'images/adminpage-background-pattern.png';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundPattern});

  * {
    font-family: Rubik;
  }
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

export {
  Table,
  Content,
  Container,
};
