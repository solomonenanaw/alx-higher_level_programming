#!/usr/bin/node
// A JS that prints the number of movies where the character “Wedge Antilles” is present
require('request').get(process.argv[2], function (err, r, body) {
  if (err) {
    console.log(err);
  } else {
    let counter = 0;
    const data = JSON.parse(body).results;
    for (let i = 0; i < data.length; i++) {
      for (let n = 0; n < data[i].characters.length; n++) {
        if (data[i].characters[n].includes('/18/')) {
          counter++;
          break;
        }
      }
    }
    console.log(counter);
  }
});
