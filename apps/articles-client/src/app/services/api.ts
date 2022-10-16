import { Article } from "../types";

const baseURL = 'http://localhost:3300/api';

export const getArticles = async (page: number) => {
  const url = new URL(`${baseURL}/articles`);
  let response: Response | undefined,
    data: Article[] | null,
    error = undefined;

  if (page) {
    url.searchParams.set('page', String(page));
  }

  try {
    response = await fetch(url);
    data = await response.json();
    error = false;
  } catch {
    data = null;
    error = true;
  }

  return { response, data, error };
};
