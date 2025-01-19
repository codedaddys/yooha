import type { QueryFunctionContext } from "@tanstack/react-query";
import { describe, expect, it, vi } from "vitest";
import { parseQueryParams } from "./utils";

type MockApiFn = (params: { term: string; page?: number }) => Promise<string>;
describe("parseQueryParams", () => {
  const controller = new AbortController();
  it("extracts params from queryKey and passes them to the API function", async () => {
    const mockApiFn: MockApiFn = vi.fn().mockResolvedValue("the good life");
    const queryFn = parseQueryParams(mockApiFn);

    const mockContext: QueryFunctionContext<
      [string, { term: string; page?: number }]
    > = {
      queryKey: ["search", { term: "weezer", page: 2 }],
      signal: controller.signal,
      meta: {},
    };

    const result = await queryFn(mockContext);

    expect(mockApiFn).toHaveBeenCalledWith({ term: "weezer", page: 2 });
    expect(result).toEqual("the good life");
  });

  it("handles incorrect parameters gracefully", async () => {
    const mockApiFn: MockApiFn = vi.fn().mockResolvedValue("why bother?");

    const queryFn = parseQueryParams(mockApiFn);

    const mockContext: QueryFunctionContext<[string, unknown]> = {
      queryKey: ["search", undefined],
      signal: controller.signal,
      meta: {},
    };

    // @ts-expect-error testing incorrect params
    const result = await queryFn(mockContext);

    expect(mockApiFn).toHaveBeenCalledWith(undefined);
    expect(result).toEqual("why bother?");
  });
});
