import React from "react";
import Button from "../index";
import Icon from "../../Icon";
import { shallow } from "enzyme";

describe("Button test cases", () => {
  it("will render with default props", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toHaveClassName("button-solid-blue");
  });

  it("will render with loading icon", () => {
    const wrapper = shallow(<Button isLoading />);
    console.log(wrapper.debug());
    expect(wrapper).toContainReact(<Icon name="loader" size={32} />);
  });
});
