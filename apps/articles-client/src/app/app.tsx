import './app.css';
import { ArticleCard, Container, Button } from './components';
import { useArticles } from './hooks/useArticles';
import Masonry from 'react-masonry-css';

export function App() {
  const { articles, nextPage } = useArticles();

  return (
    <Container>
      <h1>Articles</h1>
      <Masonry
        breakpointCols={{
          default: 3,
          700: 2,
          500: 1,
        }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {articles?.map((article, i) => (
          <ArticleCard key={i} data={article} />
        ))}
      </Masonry>
      <Button onClick={() => nextPage()}>Load More</Button>
    </Container>
  );
}

export default App;
