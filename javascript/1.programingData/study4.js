// new Date()
// new Date('YYYY-MM-DD')
// new Date('YYYY-MM-DDThh:mm:ss')

let myDate = new Date(2024, 3, 7, 19, 11, 16);
let today = new Date();

let timeDiff = myDate.getTime() - today.getTime();

console.log(timeDiff + '밀리초');
console.log(timeDiff + '초');
console.log(timeDiff / 1000 / 60 + '분');
console.log(timeDiff / 1000 / 60 / 60 + '시간');

console.log(today.getDay());