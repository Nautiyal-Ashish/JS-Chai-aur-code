// Call

function SetUserName(username) {
  // db calls
  this.username = username;
  //   console.log("object");
}

function createUser(username, email, password) {
  SetUserName(username); //this is only reference but not running

  SetUserName.call(this, username);

  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@chai.com", "123");
console.log(chai);
