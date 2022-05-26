import styled from 'styled-components';
import { colors } from './../../shared/Tokens';

export const Container = styled.div`
  width: 100vw;
  height: 90vh;
  margin: 0 auto;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CardContainer = styled.div`
  background-image: radial-gradient(
    circle,
    ${colors.darkBlue} 30%,
    ${colors.veryDarkBlue} 180%
  );
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  width: 26rem;
  height: 26rem;
  border-radius: 25px;
  padding: 2rem;
`;

export const TopContent = styled.div`
  border: 1px solid yellow;
`;

export const Image = styled.img`
  padding: 15px;
  background-color: ${colors.darkBlue};
  opacity: 0.9;
  border-radius: 50%;
`;

export const Title = styled.div`
  font-size: 24px;
`;

export const Subtitle = styled.div`
  line-height: 150%;
  color: ${colors.mediumGray};
`;

export const Rate = styled.div`
  border: 1px solid pink;
  width: 100%;

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;

    li {
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  background-color: ${colors.orange};
  border-radius: 50px;
  text-transform: uppercase;
  color: ${colors.white};
  padding: 0.9rem 0;
  font-weight: 700;
  letter-spacing: 3px;
  border: none;

  &:hover {
    background-color: ${colors.white};
    color: ${colors.orange};
    cursor: pointer;
  }
`;
