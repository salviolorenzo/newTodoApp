const db = require('./db');
const bcrypt = require('bcrypt');
const saltRounds = 10;

class User {
  constructor(id, name, username, email, passHash) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.passHash = passHash;
  }

  // CREATE
  static addUser(name, username, email, password) {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return db
      .one(
        `insert into users
      (name, username, email, password)
        values
        ($1, $2, $3, $4)
        returning id`,
        [name, username, email, hash]
      )
      .then(data => {
        return new User(data.id, name, username, email);
      });
  }

  // RETRIEVE
  static getAllUsers() {
    return db.any(`select * from users`);
  }

  static getById(id) {
    return db.one(`select * from users where id=$1`, [id]).then(result => {
      return new User(
        result.id,
        result.name,
        result.username,
        result.email,
        result.password
      );
    });
  }

  static getbyUsername(username) {
    return db
      .one(`select * from users where username=$1`, [username])
      .then(result => {
        return new User(
          result.id,
          result.name,
          result.username,
          result.email,
          result.password
        );
      });
  }

  checkPassword(password) {
    return bcrypt.compareSync(password, this.passHash);
  }
  // UPDATE
  // DELETE
}

module.exports = User;
