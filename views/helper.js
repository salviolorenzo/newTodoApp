function empty() {
  return ``;
}

function header(isLoggedIn = false) {
  return `
    <header>
      <h1>Todo App</h1>
      ${isLoggedIn ? logout() : empty()}
    </header>
  `;
}

function login() {
  return `
    <form action='/login'>
      <label>Username:</label><br>
      <input type='text' name='username'><br>
      <label>Password:</label><br>
      <input type='password' name='password'><br>
      <input type='submit' value='Log in'>
    </form>
  `;
}

function register() {
  return `
    <form action='/register'>
      <label>Name:</label><br>
      <input type='text' name='name'><br>
      <label>Username:</label><br>
      <input type='text' name='username'><br>
      <label>Email:</label> <br>
      <input type='email' name='email'><br>
      <label>Password:</label><br>
      <input type='password' name='password'><br>
      <input type='submit' value='Register'>
    </form>
  `;
}

function logout() {
  return `
    <form action='/logout'>
      <input type='submit' value='Log out'>
    </form>
  `;
}

module.exports = {
  header,
  login,
  register
};
