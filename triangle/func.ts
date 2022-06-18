import { isNaN, round, toNumber } from "lodash";

export const triangleType = (_a: string, _b: string, _c: string): string => {
  const a = toNumber(_a);
  const b = toNumber(_b);
  const c = toNumber(_c);

  if (isNaN(a) || isNaN(b) || isNaN(c)) return "Invalid Input";

  if (a + b <= c || b + c <= a || c + a <= b) return "Not a triangle";

  if (a === b && b === c) return "Equilateral triangle";

  const isIsosceles = a === b || b === c || c === a;
  const isRight =
    round(a * a + b * b) === round(c * c) ||
    round(b * b + c * c) === round(a * a) ||
    round(c * c + a * a) === round(b * b);

  if (isIsosceles && isRight) return "Right Isosceles triangle";
  if (isRight) return "Right triangle";
  if (isIsosceles) return "Isosceles triangle";

  return "Normal triangle";
};
