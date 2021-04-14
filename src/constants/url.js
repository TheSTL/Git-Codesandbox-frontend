let baseUrl = "";

if (process.env.NODE_ENV === "production") {
  baseUrl = "";
} else {
  baseUrl = "http://localhost:9000/api";
}

const cloneUrl = `${baseUrl}/github-clone/`;

const importToSandbox = `${baseUrl}/import-to-sandbox/`;

module.exports = {
  cloneUrl,
  importToSandbox,
};
