import { Prayer } from "../../../types/types";
import { right_after as right_after } from "./after";
import { morning_before } from "./morning";
import { night_before } from "./night_before";
import { right_before } from "./right_before";

export const communion_prayers: Prayer[] = [
  night_before,
  morning_before,
  right_before,
  right_after,
];
