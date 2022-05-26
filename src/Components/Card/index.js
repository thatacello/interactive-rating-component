import React from 'react';
import {
  Container,
  CardContainer,
  Title,
  Subtitle,
  Rate,
  Button,
  Image,
  TopContent
} from './style';

export const Card = () => {
  return (
    <Container>
      <CardContainer>
        <TopContent>
          <Image src="/assets/icon-star.svg" alt="star" />
          <Title>How did we do?</Title>
          <Subtitle>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </Subtitle>
        </TopContent>
        <Rate>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </Rate>
        <Button>Submit</Button>
      </CardContainer>
    </Container>
  );
};
