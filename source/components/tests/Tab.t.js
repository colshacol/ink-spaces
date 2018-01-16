import { h, build, renderToString } from "ink";

import { Tab } from "../Tab";
import { TAB } from "@consts";

const { describe, it, expect } = global;

describe("<Tab />", () => {
  it("renders 1 tab", () => {
    expect(renderToString(build(<Tab />))).toEqual(TAB);
  });
});
