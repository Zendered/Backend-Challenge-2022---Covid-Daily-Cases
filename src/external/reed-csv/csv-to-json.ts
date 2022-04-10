import { writeFileSync } from 'fs';

const csv = require('csvtojson');

csv().fromFile('covid-variants.csv') // use the covid-variants.csv from the root dir
  .then((jsonObj:any) => {
    const covidVariants = JSON.stringify(jsonObj);
    writeFileSync('covid-cases.json', covidVariants);
  });
