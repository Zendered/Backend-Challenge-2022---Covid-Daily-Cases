const csv = require('csvtojson');

csv().fromFile('covid-variants.csv')
  .then((jsonObj:any) => {
    console.log(jsonObj);
  });
