import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ComponentProps } from "react";

const queryClient = new QueryClient();

export function ApiClientProvider({
  children,
}: Pick<ComponentProps<typeof QueryClientProvider>, "children">) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
