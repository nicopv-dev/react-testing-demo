import { type PropsWithChildren } from "react";
import {
  cleanup,
  render,
  renderHook,
  screen,
  waitFor,
} from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { defaultRoutes } from "@/router/default.router";
import { useProducts } from "@/hooks/products";
import QueryProvider from "@/providers/query-provider";

describe("Home page test", () => {
  // let queryClient: QueryClient;

  // beforeAll(() => {
  //   queryClient = new QueryClient();
  // });

  beforeEach(() => {
    cleanup();
  });

  // it("should be render component", () => {
  //   const router = createMemoryRouter(defaultRoutes);

  //   render(<RouterProvider router={router} />);

  //   expect(screen.getByText("Home")).toBeDefined();
  // });

  it("should be render loading before get pruducts data", async () => {
    const { result } = renderHook(() => useProducts(), {
      wrapper: QueryProvider,
    });

    await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
  });
});
