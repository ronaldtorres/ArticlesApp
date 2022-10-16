import { useCallback, useEffect, useState } from 'react';
import { getArticles } from '../services/api';
import { Article } from '../types';

export const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const requestArticles = async (page: number) =>
    (await getArticles(page)).data;

  useEffect(() => {
    (async () => {
      const data = await requestArticles(1);
      data && setArticles(data);
      setLoading(false);
    })();
  }, []);

  const nextPage = useCallback(async () => {
    setLoading(true);
    const more = await requestArticles(page + 1);
    setPage((prev) => prev + 1);
    setArticles((prev) => [...prev, ...(more || [])]);
    setLoading(false);
  }, [page]);

  return { articles, setArticles, loading, setLoading, nextPage };
};
