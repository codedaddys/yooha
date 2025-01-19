const BASE_URL = "https://search.yahoo.com";

export async function fetchSearchResults(term: string) {
  const response = await fetch(`${BASE_URL}/search?p=${term}`);

  if (!response.ok) {
    throw new Error(`Error fetching results for ${term}`);
  }

  return response.json() as Promise<string>;
}
