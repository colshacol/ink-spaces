import { h, build, renderToString } from "ink";

import { Tabs } from "../Tabs";
import { TAB } from "@consts";

const { describe, it, expect } = global;

describe("<Tabs />", () => {
  it("renders 1 tab with no count prop", () => {
    expect(renderToString(build(<Tabs />))).toEqual(TAB);
  });

  it("renders the correct number of tabs", () => {
    expect(renderToString(build(<Tabs count={3} />))).toEqual(TAB + TAB + TAB);
  });
});
