"use strict";
const fs = require("fs");
const path = require("path");


fs.readFile(path.join(__dirname, "../../config.json"), function (err, data) {
	if (err) throw new Error(err);
  fs.writeFileSync(path.join(__dirname, "../../config.min.json"), JSON.stringify(data), function (err) {
     if (err) throw new Error(err);
  });
});

console.log("Done!");
