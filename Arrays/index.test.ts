import reverseArray from ".";

describe("Test Array Reverse function", () => {
  test("reverses an array", () => {
    const arr = [5, 7, 2, 9, 1, 3, 10];
    const result = [10, 3, 1, 9, 2, 7, 5];
    expect(reverseArray(arr)).toEqual(result);
  });

  test("reverses an empty array", () => {
    const arr = [];
    const result = [];
    expect(reverseArray(arr)).toEqual(result);
  });

  test("reverses an array of strings", () => {
    const arr = ["Gideon", "Bamuleseyo", "Moges", "Mohammed"];
    const result = ["Mohammed", "Moges", "Bamuleseyo", "Gideon"];
    expect(reverseArray(arr)).toEqual(result);
  });
});
