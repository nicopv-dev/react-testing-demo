import Button from "@/components/common/button";
import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";

describe("Button test", () => {
  afterEach(() => {
    cleanup();
  });

  it("should be render", () => {
    const title = "test";
    render(<Button title={title} />);
    const button = document.querySelector("button");
    expect(!!button).toBe(true);
  });

  it("should be render with title", () => {
    const title = "test";
    render(<Button title={title} />);
    const button = document.querySelector("button");
    expect(button?.textContent).toBe(title);
  });
});
