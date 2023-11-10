import { test, expect, describe, it } from "vitest";

import { bracketMatch } from "./bracket-match";

describe("括号匹配", () => {
  it("normal", () => {
    const str = "{ab(cde[feg]ss)123}fss";
    const res = bracketMatch(str);

    expect(res).toBe(true);
  });

  it("wrong situation", () => {
    const str = "{ab(cde[feg]ss)123}}fss";
    const res = bracketMatch(str);

    expect(res).toBe(false);
  });

  it("wrong sequence", () => {
    const str = "{ab(cde[feg]ss})123fss";
    const res = bracketMatch(str);

    expect(res).toBe(false);
  });

  it("empty strings", () => {
    const res = bracketMatch("");
    expect(res).toBe(true);
  });
});
