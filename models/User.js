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
  // RETRIEVE
  // UPDATE
  // DELETE
}

module.exports = User;
