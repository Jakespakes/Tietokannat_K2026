const db = require('../database');

const evaluation = {
  getAll: function(callback) {
    return db.query('select * from arviointi', callback);
  },
  getOne: function(id, callback) {
    return db.query('select * from arviointi where idArviointi=?', [id], callback);
  },
  add: function(evaluation, callback) {
    return db.query(
      'insert into arviointi (Päiväys,Arvosana,idOpiskelija,idOpintojakso) values(?,?,?,?)',
      [evaluation.Päiväys,evaluation.Arvosana,evaluation.idOpiskelija,evaluation.idOpintojakso],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from arviointi where idArviointi=?', [id], callback);
  },
  update: function(id, evaluation, callback) {
    return db.query(
      'update arviointi set Päiväys=?,Arvosana=?,idOpiskelija=?,idOpintojakso=? where idArviointi=?',
      [evaluation.Päiväys,evaluation.Arvosana,evaluation.idOpiskelija,evaluation.idOpintojakso,id],
      callback
    );
  }
};
module.exports = evaluation;

