//블록 스코프 변수 (ES6)

const users = [{
    no: 1,
    name : '뽀로로',
    email: 'bbororo@nps.com',
},{
    no: 2,
    name : '뽀로로2',
    email: 'bbororo2@nps.com',
}];

//객체 분해(ES 6)
function print({no, name, email}) {
    //템플릿 문자열(es6)
    console.log(`${no}, ${name}, ${email}`);
}

print(users);

// for..of(es6)
for(let user of users){
    print(user)
}