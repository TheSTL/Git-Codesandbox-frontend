const urls = require("./url");

const githubContextIntialValue = {
  commitId: "b1151f85060eb826a9eff7996b90bb8f7686d26e",
  branch: "master",
  url: "https://github.com/TheSTL/ShowGithubProfile",
  embedUrl: "https://codesandbox.io/embed/79wri",
  isLoading: false,
  branchList: [],
  commitList: [
    {
      key: "Update README.md",
      value: "b1151f85060eb826a9eff7996b90bb8f7686d26e",
    },
    {
      key: "fix: direct nested url",
      value: "3fb344084b920f25b9489455e7ceb918f8d13775",
    },
    {
      key:
        "Merge pull request #2 from daalchinitech/fixed-1\n\n--fix : ReduxDevTools error in a production build",
      value: "9a166f873b67a30ab5b0ca0f90e1198449dbb242",
    },
    {
      key: "--fix : ReduxDevTools error in a production build",
      value: "e1b5b158ec699214ab4dc15f534211ebd7f174af",
    },
    {
      key: "Update README.md",
      value: "5fbcea04a686412329850c5f726662a800d60c64",
    },
    {
      key: "--fix : error msg",
      value: "a414c65b0bf13c76504cb20761e20261af743243",
    },
    {
      key: "--fix : username error",
      value: "9dce836749be827456b92837b887c48f74eaeaa4",
    },
    {
      key: "--refactor : redux seprated done",
      value: "26aa02f5dca00046e736db851989b457fb4be03c",
    },
    {
      key: "--refactor : litle progress reducer",
      value: "7c3e1a280d705668d1da7596c64c1fc69185e1ef",
    },
    {
      key: "--refactor : structured",
      value: "c6447af8531a375eaa607455fd1c22dd63f7a27a",
    },
    {
      key: "--refactor : seprate files and file name changes",
      value: "d2bc28353f71a1df6820ca28db00fd32cd4ebbbb",
    },
    {
      key: "--refactor : created seprate folders",
      value: "e4edd70e8cd2f21c7c0fa68f2f5e7c91488396b6",
    },
    {
      key: "--update : click to user profile",
      value: "62f6674274ace0ea7212c07919772c64a94f9eec",
    },
    {
      key: "--fix : disable Link for 0 repo/follower/following",
      value: "cac9b1dacc6980da2f869342ab5f2cd51d408681",
    },
    {
      key: "--refector : redux variables name changed",
      value: "5e9743fa3b94b090b368d52d97a2fdcd08acf873",
    },
    {
      key: "--fix : redux-loading state",
      value: "eadf3658cbf397ee2f1d3146825cfedbb92f436d",
    },
    {
      key: "--fix : page refresh bug",
      value: "a785ee2988dd357e1a4cbe31d6edf4c84f5189ac",
    },
    {
      key: "--update : add repo page",
      value: "1d65eeef08b7b6e102abdc513b334479b73b8fcb",
    },
    {
      key: "--refactor : combine follwer and following page",
      value: "1eb701ebe924a9fb9c1c1faf6c3da7c9a5d89162",
    },
    {
      key: "--update : add following page",
      value: "8dab77a4691951da01597b3634f9e9ef0a977aeb",
    },
    {
      key: "--update : add eslint and prettier",
      value: "a225eb64a4e1c1cee73e87fd5dba0aac814b7bb5",
    },
    {
      key: "--update : add main page and user page",
      value: "73f6b0f624fbe8fa2513dec375b2cc4aa3c59c94",
    },
  ],
};

module.exports = {
  ...urls,
  githubContextIntialValue,
};
