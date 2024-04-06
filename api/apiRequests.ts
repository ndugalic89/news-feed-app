import axios from "axios";

export const getNewsFromUrl = async (baseUrl: string) => {
  const urlParts: string[] = ['/feed', '/rss'];
  for (const urlPart of urlParts) {
    try {
      const endpoint = baseUrl.endsWith('feed') || baseUrl.endsWith('rss') ? baseUrl : `${baseUrl}${urlPart}`;
      const response = await axios.get(endpoint);
      if (response.status === 200) {
        if (response.data) {
          return response.data;
        }
        continue;
      }
    } catch (error) {
        console.error(`Error occurred while fetching RSS feed from ${baseUrl + urlPart}: ${error}`);
    }
  }
  return null; // Return null if fetching fails for both endpoints
}