import { triangleType } from "./func";
import { readFileSync } from "fs";

const inputCsv = readFileSync("triangle/testcase.csv", "utf-8");
const testcases = inputCsv.split("\n").map((t) => t.split(","));

testcases.forEach(([a, b, c, expectResult], idx) => {
  test(`testcase ${idx + 1}: a = ${a}, b = ${b}, c = ${c}`, () => {
    expect(triangleType(a, b, c)).toBe(expectResult);
  });
});
