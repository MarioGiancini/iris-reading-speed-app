import styled from 'styled-components';

export const Container = styled.div`
  max-height: 100%;
  max-width: 1000px;
  padding: 20px;
  border-radius: 4px;
  background: rgb(248, 248, 249);
  font-size: 20px;
  font-family: Nunito;
  user-select: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: auto;

  ${props => props.disabled && `
    filter: blur(4px);
    pointer-events: none;
  `}

  @media screen and (max-width: 414px) {
    font-size: 18px;

    h2 {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    border-radius: 0;
  }
`;
