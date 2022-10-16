import styled from 'styled-components';
import { Article } from '../types';

type ArticleCardType = {
  data: Article;
};

export const ArticleCard = ({ data }: ArticleCardType) => {
  return (
    <CardContainer>
      <a href={data.url} rel="noreferrer" target="_blank">
        <img src={data.image} alt={data.title} width="100%" />
        <p>{data.title}</p>
      </a>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  margin-top: 1rem;
  overflow: hidden;

  > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: #333333;

    &:hover {
      color: #7146c2;
      transition: all 0.2s ease-in;
    }

    p {
      font-weight: bold;
      font-size: 1rem;
      padding: 8px;
    }
  }
`;
