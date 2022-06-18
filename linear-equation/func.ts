import { toNumber } from "lodash";

export function solveLinearEquation(_a: any, _b: any) {
  const a = toNumber(_a);
  const b = toNumber(_b);
  if (a === NaN || b === NaN) return "Invalid input.";

  if (a === 0 && b === 0) return "The equation has infinitely many solutions.";
  if (a === 0) return "The equation has no solution.";

  return `The equation has one solution:  x = ${-b / a}.`;
}
