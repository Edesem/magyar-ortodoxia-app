import { Prayer } from "../types/types";
import { akathists } from "./prayers/akathists";
import { communion_prayers } from "./prayers/communion";
import { everyday_prayers } from "./prayers/everyday";
import { the_hours } from "./prayers/the_hours";
import { other_prayers } from "./prayers/other";

export const prayerData: Prayer[] = [
  ...everyday_prayers,
  ...communion_prayers,
  ...akathists,
  ...the_hours,
  ...other_prayers,
];
