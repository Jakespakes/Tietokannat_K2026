const db = require('../database');

const student = {
  getAll: function(callback) {
    return db.query('select * from opiskelija', callback);
  },
  getOne: function(id, callback) {
    return db.query('select * from opiskelija where idOpiskelija=?', [id], callback);
  },
  add: function(student, callback) {
    return db.query(
      'insert into opiskelija (Etunimi,Sukunimi,Osoite,Luokkatunnus) values(?,?,?,?)',
      [student.Etunimi,student.Sukunimi,student.Osoite,student.Luokkatunnus],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opiskelija where idOpiskelija=?', [id], callback);
  },
  update: function(id, student, callback) {
    return db.query(
      'update opiskelija set Etunimi=?,Sukunimi=?,Osoite=?,Luokkatunnus=? where idOpiskelija=?',
      [student.Etunimi,student.Sukunimi,student.Osoite,student.Luokkatunnus,id],
      callback
    );
  }
};
module.exports = student;

