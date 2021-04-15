import React from "react";
import { shallow } from "enzyme";
import DeployConfig from "../index";
import Input from "../../Input";
import SearchInput from "../../SearchInput";
import * as GithubContext from "../../../context";

const initialData = {
  commitId: "b1151f85060eb826a9eff7996b90bb8f7686d26e",
  branch: "master",
  url: "https://github.com/TheSTL/ShowGithubProfile",
  embedUrl: "https://codesandbox.io/embed/79wri",
  isLoading: false,
  branchList: [],
  commitList: [],
};

describe("Deploy config test", () => {
  let setGithubDataSpy;
  const githubContextSpy = jest.spyOn(GithubContext, "useGithubDataContext");

  beforeAll(() => {
    const contextData = initialData;
    setGithubDataSpy = jest.fn();
    githubContextSpy.mockImplementation(() => ({
      githubData: contextData,
      setGithubData: setGithubDataSpy,
    }));
  });

  it("will mock the context values", () => {
    const wrapper = shallow(<DeployConfig />);
    expect(wrapper.find(Input)).toHaveProp({
      value: initialData.url,
      name: "url",
    });

    expect(wrapper.find(SearchInput).first()).toHaveProp({
      value: initialData.branch,
      name: "branch",
    });
    expect(wrapper.find(SearchInput).last()).toHaveProp({
      value: initialData.commitId,
      name: "commitId",
    });
  });
});
