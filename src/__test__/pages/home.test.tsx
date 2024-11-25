import { describe, it, expect, vi, Mock, beforeEach } from "vitest";
import { defaultMemoryRouter } from "@/router/default.router";
import {
  cleanup,
  render,
  renderHook,
  screen,
  waitFor,
} from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useGetProducts } from "@/hooks/useGetProducts";
import { mockProducts } from "@/mocks/mookProducts";
import QueryProvider from "@/providers/query-provider";

const queryClient = new QueryClient();

vi.mock("@/hooks/useGetProducts", () => ({
  useGetProducts: vi.fn(),
}));

describe("Home page test", () => {
  beforeEach(() => {
    cleanup();
    vi.resetAllMocks();
  });

  it("should be render the home title", async () => {
    (useGetProducts as Mock).mockReturnValue({
      data: mockProducts,
      isPending: false,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={defaultMemoryRouter} />
      </QueryClientProvider>
    );

    const { result } = renderHook(() => useGetProducts(), {
      wrapper: QueryProvider,
    });

    await waitFor(() => result.current.isSuccess);

    expect(screen.getByText("Home")).toBeDefined();
  });

  it("should be render the loading state", () => {
    (useGetProducts as Mock).mockReturnValue({
      data: mockProducts,
      isPending: true,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={defaultMemoryRouter} />
      </QueryClientProvider>
    );

    expect(screen.getByText("Loading...")).toBeDefined();
  });

  it("should be render the product data", async () => {
    (useGetProducts as Mock).mockReturnValue({
      data: mockProducts,
      isPending: false,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={defaultMemoryRouter} />
      </QueryClientProvider>
    );

    const { result } = renderHook(() => useGetProducts(), {
      wrapper: QueryProvider,
    });

    await waitFor(() => result.current.isSuccess);

    expect(screen.getByText(mockProducts[0].title)).toBeDefined();
    expect(screen.getByText(mockProducts[0].description)).toBeDefined();
  });
});
