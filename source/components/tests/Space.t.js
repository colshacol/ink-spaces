import { h, build, renderToString } from "ink";

import { Space } from "../Space";
import { SPACE } from "@consts";

const { describe, it, expect } = global;

describe("<Space />", () => {
  it("renders 1 space", () => {
    expect(renderToString(build(<Space />))).toEqual(SPACE);
  });
});