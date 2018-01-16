import { h, build, renderToString } from "ink";

import { Spaces } from "../Spaces";
import { SPACE } from "@consts";

const { describe, it, expect } = global;

describe("<Spaces />", () => {
  it("renders 1 space with no count prop", () => {
    expect(renderToString(build(<Spaces />))).toEqual(SPACE);
	});
	
	it("renders the correct number of spaces", () => {
    expect(renderToString(build(<Spaces count={3} />))).toEqual(SPACE + SPACE + SPACE);
  });
});