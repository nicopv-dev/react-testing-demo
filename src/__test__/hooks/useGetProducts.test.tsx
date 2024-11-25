import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, it, Mock, vi } from "vitest";
import { useGetProducts } from "@/hooks/useGetProducts";
import QueryProvider from "@/providers/query-provider";
import Product from "@/types/product";

vi.mock("@/hooks/useGetProducts", () => ({
  useGetProducts: vi.fn(),
}));

describe("useGetProducts hook test", () => {
  it("should be return data", async () => {
    const mockData: Product[] = [
      {
        id: 1,
        title: "Product 1",
        description: "Description 1",
      },
    ];

    (useGetProducts as Mock).mockReturnValue({
      data: mockData,
      isPending: false,
    });

    const { result } = renderHook(() => useGetProducts(), {
      wrapper: QueryProvider,
    });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toBeDefined();
  });
});
