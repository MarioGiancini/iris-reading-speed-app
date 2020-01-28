import styled from 'styled-components';
import { Card, Elevation } from '@blueprintjs/core';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h3`
  font-size: 24px;
`;

const WordsPerMinute = styled.p`
  font-size: 18px;
`;

const ChartContainer = styled(Card).attrs({
  elevation: Elevation.THREE,
})`
  position: relative;
  width: 800px;
  height: 300px;
  margin-top: 50px;
  padding-top: 50px;
  padding-bottom: 40px;

  .recharts-text {
    font-weight: 600;
    font-family: Nunito;
  }
`;

const ChartLabel = styled.div.attrs(({ top, left, bottom, width, color, fontSize }) => ({
  style: { top, left, bottom, width, color, fontSize },
}))`
  position: absolute;
  top: 20px;
  color: #5c7080;
  font-size: 18px;
  font-family: Nunito;
  font-weight: bold;
  text-align: center;
  transform: translateX(-50%);
`;

export {
  Container,
  Heading,
  WordsPerMinute,
  ChartContainer,
  ChartLabel,
};
