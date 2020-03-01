import styled from 'styled-components';
import { Card, Button, Classes } from '@blueprintjs/core';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding: 50px;

  @media screen and (max-width: 414px) {
    padding: 0;
    padding-bottom: 20px;
  }
`;

const ControlContainer = styled(Card).attrs({
  elevation: Classes.ELEVATION_4,
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 30px 20px;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 414px) {
    top: 50%;
    left: 0;
    width: 100vw;
    transform: translateY(-50%);
    border-radius: 0;
  }
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

const FinishTestButton = styled(ButtonBase).attrs({
  large: true,
})`
  margin-top: 30px;

  @media screen and (max-width: 414px) {
    margin-top: 20px;
  }
`;

export {
  Container,
  ControlContainer,
  IntroText,
  IntroTextHeading,
  ExampleButton,
  StartTestButton,
  FinishTestButton,
};
