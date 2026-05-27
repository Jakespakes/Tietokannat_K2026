const db = require('../database');

const course = {
  getAll: function(callback) {
    return db.query('select * from opintojakso', callback);
  },
  getOne: function(id, callback) {
    return db.query('select * from opintojakso where idOpintojakso=?', [id], callback);
  },
  add: function(course, callback) {
    return db.query(
      'insert into opintojakso (Koodi,Laajuus,Nimi) values(?,?,?)',
      [course.Koodi,course.Laajuus,course.Nimi],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opintojakso where idOpintojakso=?', [id], callback);
  },
  update: function(id, course, callback) {
    return db.query(
      'update opintojakso set Koodi=?,Laajuus=?,Nimi=? where idOpintojakso=?',
      [course.Koodi,course.Laajuus,course.Nimi,id],
      callback
    );
  }
};
module.exports = course;

