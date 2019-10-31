import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";
import renderer from "react-test-renderer";

describe("Button", () => {
  const props = {
    message: "I am button",
    onClick: jest.fn()
  };
  it("renders correctly", () => {
    const tree = renderer.create(<Button {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders Button message", () => {
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper.children().text()).toEqual("I am button");
  });

  it("on click button event calls on click prop", () => {
    const wrapper = shallow(<Button {...props} />);
    wrapper.simulate("click");
    expect(props.onClick).toHaveBeenCalled();
  });
});
