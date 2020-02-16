import styled from 'styled-components';
import { Card, Button, Intent, Elevation } from '@blueprintjs/core';

const Container = styled(Card).attrs({
  elevation: Elevation.THREE,
})`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 300px;
  transform: translate(-50%, -50%);
`;

const SubmitButton = styled(Button).attrs({
  intent: Intent.PRIMARY,
})`
  min-width: 120px;
`;

export { Container, SubmitButton };
