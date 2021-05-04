const fs = require("fs");

const breedDetailsFromFile = (breed, cb) => {
  console.log("breedDetailsFromFile: Calling readFile...");
  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) cb(data);
  });
};

const catBreed = (breed) => {
  console.log("Return Value: ", breed);
};

breedDetailsFromFile("bombay", catBreed);
