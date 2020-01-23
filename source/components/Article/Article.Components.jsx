import styled from 'styled-components';

export const Container = styled.div`
  max-height: 100%;
  width: 1000px;
  padding: 20px;
  border-radius: 10px;
  background: rgb(248, 248, 249);
  font-size: 22px;
  font-family: Nunito;
  user-select: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: auto;

  ${(props) => props.blurred && `
    filter: blur(4px);
  `}
`;
