const { readFileSync, writeFileSync } = require("node:fs"); //default naming convention - read/write files in node

function readJSONFile(path, fileName) {
  const cameraInventory = readFileSync(`${path}/${fileName}`, "utf8");
  return cameraInventory ? JSON.parse(cameraInventory) : [];
}

function writeJSONFile(path, fileName, data) {
  data = JSON.stringify(data,null,2);
    writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" });
}

module.exports = {
  readJSONFile,
  writeJSONFile,
};