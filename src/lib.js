'use strict';

const mongoskin = require('mongoskin');

module.exports = (url, collections) => {
  let db = mongoskin.db(url, { safe: true });
  db.toObjectID = mongoskin.helper.toObjectID;
  for (let collection of collections) {
    db.bind(collection[0]);
    if (collection[1]) {
      for (let index of collection[1]) {
        db[collection[0]].ensureIndex(index[0], index[1], () => {});
      }
    }
  }
  return db;
};
