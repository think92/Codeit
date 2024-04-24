let groups = [
    ['영준', '캡틴'],
    ['태순', '우재'],
    ['재훈', '지웅'],
    ['윤형', '동욱'],
    ['규식', '소원'],
];

let teams = [
    [],
    [],
];

// console.log(groups[0]);

// teams[0][0] = groups[0][0];
// teams[1][0] = groups[0][1];

// console.log(teams[0]);
// console.log(teams[1]);

for(let i = 0; i < groups.length; i++){
    for(let j = 0; groups[i].length; j++){
       teams[j][i] = groups[i][j];
    }
}
console.log(teams[0]);
console.log(teams[1])