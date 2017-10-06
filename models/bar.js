const db = require('../db/config');

const Bar = {};

Bar.findUsersBars = (userid) => {
  return db.manyOrNone(`SELECT * FROM bars
  WHERE user_id = $1`, [userid])
}

Bar.create = (bar, userid) => {
  return db.one(`
    INSERT INTO bars
    (name, address, city, zip, image, user_id)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
  `, [bar.name, bar.address, bar.city, bar.zip, bar.image, userid]);
}

Bar.destroy = (id) => {
  return db.none(`
    DELETE FROM bars
    WHERE id = $1
  `, [id]);
}

module.exports = Bar;
