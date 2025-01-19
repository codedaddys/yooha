import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useSearchQuery } from "./index";

const mockSearchResults = vi.fn();
vi.mock("../api", () => ({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  fetchSearchResults: (...args: unknown[]) => mockSearchResults(...args),
}));

describe("useSearchQuery", () => {
  afterEach(() => {
    mockSearchResults.mockReset();
  });

  const createTestQueryClient = () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={createTestQueryClient()}>
      {children}
    </QueryClientProvider>
  );

  it("fetches and returns search results", async () => {
    mockSearchResults.mockResolvedValue("bleach");

    const { result } = renderHook(() => useSearchQuery("nirvana first album"), {
      wrapper,
    });

    await waitFor(() => expect(result.current.isLoading).toBeFalsy());

    expect(mockSearchResults).toHaveBeenCalledWith("nirvana first album");
    expect(mockSearchResults).toHaveBeenCalledOnce();

    expect(result.current.data).toEqual("bleach");
  });

  it("does not fetch when term is empty", async () => {
    const { result } = renderHook(() => useSearchQuery(""), { wrapper });

    await waitFor(() => expect(result.current.isLoading).toBeFalsy());

    expect(mockSearchResults).not.toHaveBeenCalled();
  });

  it("handles errors correctly", async () => {
    const mockError = new Error("API error");
    mockSearchResults.mockRejectedValue(mockError);

    const { result } = renderHook(() => useSearchQuery("please don't break"), {
      wrapper,
    });

    await waitFor(() => expect(result.current.isError).toBeTruthy());

    expect(mockSearchResults).toHaveBeenCalledWith("please don't break");
    expect(result.current.error).toEqual(mockError);
  });
});
