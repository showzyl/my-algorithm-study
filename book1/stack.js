/**
 * Created by showzyl on 16/5/19.
 */
'use strict'

const fs = require('fs');


fs.readFile('./films.txt', 'utf8', (err, buffer) => {
  if(err) throw err;
  console.log(buffer);
  let movies = buffer.split('\n');
  //console.log(movies);

  for (let i = 0; i < movies.length; ++i) {
    movies[i] = movies[i].trim();
  }
  console.log(movies);



});

