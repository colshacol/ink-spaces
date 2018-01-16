import { h, build, renderToString } from "ink";

import { BlankLine } from "../BlankLine";
import { LINE } from "@consts";

const { describe, it, expect } = global;

describe("<BlankLine />", () => {
  it("renders 1 blank line", () => {
    expect(renderToString(build(<BlankLine />))).toEqual(LINE);
  });
});