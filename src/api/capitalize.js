import { pipe, split, join, ifElse, always } from "ramda";
import mapIndexed from "../utils/mapIndexed";

const capitalize = pipe(
  split(""),
  mapIndexed((letter, index) =>
    ifElse(
      always(index),
      always(letter.toLowerCase()),
      always(letter.toUpperCase())
    )(letter, index)
  ),
  join("")
);

export default capitalize;
