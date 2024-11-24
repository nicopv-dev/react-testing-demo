import { render, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import ProductCard from "@/components/common/product-card";

describe("ProductCard", () => {
  afterEach(() => {
    cleanup();
  });

  it("should be render component", () => {
    render(<ProductCard name="Product 1" price={100} />);
    const card = document.querySelector("article");
    expect(!!card).toBeTruthy();
  });
});
