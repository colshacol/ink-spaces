import { h, build, renderToString } from "ink";

import { BlankLines } from "../BlankLines";
import { LINE } from "@consts";

const { describe, it, expect } = global;

describe("<BlankLines />", () => {
  it("renders 1 blank line with no count prop", () => {
    expect(renderToString(build(<BlankLines />))).toEqual(LINE);
	});
	
	it("renders the correct number of blank lines", () => {
    expect(renderToString(build(<BlankLines count={3} />))).toEqual(LINE + LINE + LINE);
  });
});