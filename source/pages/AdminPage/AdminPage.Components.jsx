import styled from 'styled-components';

import BackgroundPattern from 'images/adminpage-background-pattern.png';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundPattern});

  * {
    font-family: Rubik;
  }
`;

const Content = styled.div``;

export {
  Content,
  Container,
};
