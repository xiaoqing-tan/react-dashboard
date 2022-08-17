import { merge } from 'lodash';
import { ThemeOptions } from "@mui/material";

import MenuiItem from "./MenuItem";
import OutlinedInput from "./OutlinedInput";
import ButtonBase from "./ButtonBase";
import TableCell from "./TableCell";
import Paper from "./Paper";

export default function Components(theme: ThemeOptions) {
  return merge(
    MenuiItem(theme),
    OutlinedInput(theme),
    ButtonBase(theme),
    TableCell(theme),
    Paper(theme),
  );
}