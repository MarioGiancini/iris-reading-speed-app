import styled from 'styled-components';
import { Card, Elevation } from '@blueprintjs/core';

const Container = styled(Card).attrs({
  elevation: Elevation.THREE,
})`
  position: relative;
  width: 900px;
  height: 400px;
  margin-top: 50px;
  padding-top: 70px;
  padding-bottom: 40px;

  .recharts-text {
    font-weight: 600;
    font-family: Nunito;
  }

  @media screen and (max-width: 1024px) {
    width: calc(100vw - 100px);
  }
`;

const Label = styled.div.attrs(({ top, left, bottom, width, color, fontSize }) => ({
  style: { top, left, bottom, width, color, fontSize },
}))`
  position: absolute;
  top: auto;
  color: #5c7080;
  font-size: 18px;
  font-family: Nunito;
  font-weight: bold;
  text-align: center;
  transform: translateX(-50%);
`;

export { Container, Label };
