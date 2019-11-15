// you would need more than one seed file if you have more than one table
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('fruits').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('fruits').insert([
        { name: 'pear', avgweightoz: 1.5, delicious: true, color: 'yellow' },
        { name: 'mandarine', avgweightoz: 1.5, delicious: true, color: 'orange' },
        { name: 'pineapple', avgweightoz: 1.5, delicious: true, color: 'yellow' }
      ]);
    });
};
