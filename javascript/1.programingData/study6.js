// 배열(Array)
let members = ['쿤갈레', 'Zerrard66', '우리', '흙토끼', 'End Miracle'];

console.log(typeof members);

console.log(members.length);
console.log(members['length']);
console.log(members[members.length -1]);

members[3] = '달토끼'
console.log(members);
delete members[4];
console.log(members);

// splice (startIndex, deleteCount, item)
members.splice(1, 0, 'NiceCodeit', 'Hicodeit');
console.log(members);