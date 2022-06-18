import { solveLinearEquation } from "./func";
import { readFileSync } from "fs";

const inputCsv = readFileSync("linear-equation/testcase.csv", "utf-8");
const testcases = inputCsv.split("\n").map((t) => t.split(","));

testcases.forEach(([a, b, expectResult], idx) => {
  test(`testcase ${idx + 1}: a = ${a}, b = ${b}`, () => {
    expect(solveLinearEquation(a, b)).toBe(expectResult);
  });
});
