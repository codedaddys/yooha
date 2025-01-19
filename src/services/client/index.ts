import { useQuery } from "@tanstack/react-query";
import { fetchSearchResults } from "../api";
import { parseQueryParams } from "./utils";

const FIVE_MINUTES = 1000 * 60 * 5;

export const useSearchQuery = (term: string) =>
  useQuery({
    queryKey: ["searchResults", term],
    queryFn: parseQueryParams(fetchSearchResults),
    staleTime: FIVE_MINUTES,
    enabled: !!term,
  });
