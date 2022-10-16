import styled from 'styled-components';
import { theme } from '../theme';

export const Container = styled.div`
  padding: 12px;
  @media screen and (min-width: ${theme.breakpoints.lg}) {
    margin: 0 20%;
  }
`;
