const { readFileSync } = require('fs');

module.exports = {
  async up(db) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    const data = readFileSync(`${process.cwd()}/covid-cases.json`, 'utf-8');
    const allCases = JSON.parse(data);
    await db.collection('cases').insertMany(allCases);
  },

  async down(db) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    await db.collection('cases').deleteMany();
  },
};
