import { getNewsFromUrl } from "../apiRequests";

export const useFetchNews = async (newsUrl: string) => {
  const response = await getNewsFromUrl(`/news?url=${newsUrl}`);
  return response;
}