"use strict";

//블록 스코프 변수 (ES6)
var users = [{
  no: 1,
  name: '뽀로로',
  email: 'bbororo@nps.com'
}, {
  no: 2,
  name: '뽀로로2',
  email: 'bbororo2@nps.com'
}]; //객체 분해(ES 6)

function print(_ref) {
  var no = _ref.no,
      name = _ref.name,
      email = _ref.email;
  //템플릿 문자열(es6)
  console.log("".concat(no, ", ").concat(name, ", ").concat(email));
}

print(users); // for..of(es6)

for (var _i = 0, _users = users; _i < _users.length; _i++) {
  var user = _users[_i];
  print(user);
}
