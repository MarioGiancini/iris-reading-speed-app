import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Nunito;
`;

const Heading = styled.h3`
  margin-bottom: 10px;
  font-size: 24px;
`;

const WordsPerMinuteNumber = styled.p`
  font-size: 42px;
  font-weight: bold;
`;

const WordsPerMinuteDescription = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

const SocialShareButtons = styled.div`
  margin: 20px;
  margin-right: 0;
  align-self: flex-end;

  button {
    margin-left: 10px;
  }
`;

export {
  Container,
  Heading,
  WordsPerMinuteNumber,
  WordsPerMinuteDescription,
  SocialShareButtons,
};
