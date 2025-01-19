import type {
  QueryFunction,
  QueryFunctionContext,
} from "@tanstack/react-query";

export const parseQueryParams = <TParams, TResult>(
  apiFn: (params: TParams) => Promise<TResult>,
): QueryFunction<TResult, [string, TParams]> => {
  return async ({
    queryKey,
  }: QueryFunctionContext<[string, TParams]>): Promise<TResult> => {
    const [, params] = queryKey;
    return apiFn(params);
  };
};
