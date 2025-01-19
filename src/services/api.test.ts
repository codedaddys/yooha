import { afterAll, describe, expect, it, vi } from "vitest";
import { fetchSearchResults } from "./api";

describe("fetchSearchResults", () => {
  afterAll(() => {
    vi.restoreAllMocks();
  });
  it("fetches and returns search results as JSON", async () => {
    const mockResponse = { data: "yes." };

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue(mockResponse),
    });

    const result = await fetchSearchResults("is john the coolest");

    expect(fetch).toHaveBeenCalledOnce();
    expect(fetch).toHaveBeenCalledWith(
      expect.stringMatching(/search\?p=is john the coolest$/),
    );
    expect(result).toEqual(mockResponse);
  });

  it("throws an error when the response is not ok", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      json: vi.fn(),
    });

    await expect(
      fetchSearchResults("calculate john's coolness"),
    ).rejects.toThrow("Error fetching results for calculate john's coolness");

    expect(fetch).toHaveBeenCalledOnce();
    expect(fetch).toHaveBeenCalledWith(
      expect.stringMatching(/search\?p=calculate john's coolness?$/),
    );
  });
});
