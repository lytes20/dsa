import backspaceCompare from "../app/backspaceCompare";

describe("Test backspaceCompare function", () => {
  test("returns true when both strings are equal after processing backspaces", () => {
    expect(backspaceCompare("ab#c", "ad#c")).toBe(true);
    expect(backspaceCompare("a##c", "#a#c")).toBe(true);
  });

  test("returns false when strings are different after processing backspaces", () => {
    expect(backspaceCompare("a#c", "b")).toBe(false);
    expect(backspaceCompare("ab##", "c#d#")).toBe(true); // Both become empty
  });

  test("handles empty strings", () => {
    expect(backspaceCompare("", "")).toBe(true);
    expect(backspaceCompare("", "a")).toBe(false);
    expect(backspaceCompare("a", "")).toBe(false);
  });

  test("handles strings with only backspaces", () => {
    expect(backspaceCompare("##", "###")).toBe(true); // Both become empty
    expect(backspaceCompare("#", "")).toBe(true); // Both become empty
  });

  test("handles backspaces at the beginning of strings", () => {
    expect(backspaceCompare("#ab", "ab")).toBe(true);
    expect(backspaceCompare("##ab", "ab")).toBe(true);
  });

  test("handles multiple consecutive backspaces", () => {
    expect(backspaceCompare("a##b", "b")).toBe(true);
    expect(backspaceCompare("abc###", "a")).toBe(true);
  });

  test("handles strings that become empty after processing", () => {
    expect(backspaceCompare("ab##", "c#d#")).toBe(true);
    expect(backspaceCompare("a#b#c#", "d#e#f#")).toBe(true);
  });

  test("handles complex cases with mixed characters and backspaces", () => {
    expect(backspaceCompare("y#fo##f", "y#f#o##f")).toBe(true);
    expect(backspaceCompare("bxj##tw", "bxj###tw")).toBe(false);
  });

  test("handles single character strings", () => {
    expect(backspaceCompare("a", "a")).toBe(true);
    expect(backspaceCompare("a", "b")).toBe(false);
    expect(backspaceCompare("a#", "")).toBe(true);
  });
});
