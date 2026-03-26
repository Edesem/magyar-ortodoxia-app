import { Prayer } from "../../../types/types";
import { before_bed } from "./before_bed";
import { mealtime } from "./mealtime";
import { morning } from "./morning";
import { repentance } from "./repentance";
import { small_compline } from "./small_compline";

export const everyday_prayers: Prayer[] = [
  morning,
  small_compline,
  before_bed,
  mealtime,
  repentance,
];
