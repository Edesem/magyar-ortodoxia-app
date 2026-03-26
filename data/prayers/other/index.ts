import { Prayer } from "../../../types/types";
import { agni_parthene } from "./agni_parthene";
import { holy_trinity_prayer } from "./holy_trinity_prayer";
import { in_sickness } from "./in_sickness";
import { paraklesis } from "./paraklesis";
import { paschal_hours } from "./paschal_hours";
import { student } from "./student";
import { vespers } from "./vespers";

export const other_prayers: Prayer[] = [
  vespers,
  paraklesis,
  agni_parthene,
  student,
  in_sickness,
  paschal_hours,
  holy_trinity_prayer,
];
