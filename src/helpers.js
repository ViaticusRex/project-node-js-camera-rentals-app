const { readFileSync, writeFileSync } = require("node:fs"); //default naming convention - read/write files in node

function readJSONFile(path, fileName) {
    try {
      const cameraInventory = readFileSync(`${path}/${fileName}`, "utf8")
      return cameraInventory ? JSON.parse(cameraInventory) : []
    } catch (error) {
      console.error(`Failed to read file at ${path}/${fileName}:`, error)
      return []
    }
  }
  
  function writeJSONFile(path, fileName, data) {
    try {
      data = JSON.stringify(data, null, 2)
      writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" })
    } catch (error) {
      console.error(`Failed to write file at ${path}/${fileName}:`, error)
    }
  }


module.exports = {
  readJSONFile,
  writeJSONFile,
};