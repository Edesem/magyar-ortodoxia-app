import { Prayer } from "../types/types";
import { akathists } from "./prayers/akathists";
import { communion_prayers } from "./prayers/communion";
import { everyday_prayers } from "./prayers/everyday";
import { other_prayers } from "./prayers/other";

export const prayerData: Prayer[] = [
  ...everyday_prayers,
  ...communion_prayers,
  ...akathists,
  ...other_prayers,
];
