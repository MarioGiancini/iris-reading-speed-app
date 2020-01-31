import styled from 'styled-components';
import { Card, Button, Classes } from '@blueprintjs/core';

const ControlContainer = styled(Card).attrs({
  elevation: Classes.ELEVATION_4,
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 30px 20px;
  transform: translate(-50%, -50%);
`;

const IntroText = styled.div`
  margin-bottom: 30px;
  font-size: 18px;
  text-align: center;

  p {
    margin-bottom: 20px;
  }
`;

const IntroTextHeading = styled.p`
  margin-top: 0;
  margin-bottom: 30px;
  font-weight: 500;
`;

const ExampleButton = styled(Button)`
  margin: 0 5px;
  font-family: Nunito;
  letter-spacing: 0.5px;
`;

const ButtonBase = styled(Button)`
  font-family: Nunito;
  font-weight: 600;
  letter-spacing: 1.3px;

  && {
    font-size: 20px;
  }
`;

const StartTestButton = styled(ButtonBase)``;

const FinishTestButton = styled(ButtonBase)`
  margin-top: 30px;

  @media screen and (max-width: 414px) {
    margin-top: 20px;
  }
`;

export {
  ControlContainer,
  IntroText,
  IntroTextHeading,
  ExampleButton,
  StartTestButton,
  FinishTestButton,
};
