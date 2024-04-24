// for..in
// for (변수 in 객체) {
//     동작부분
// }

let codeit = {
    name : '코드잇',
    bornYear : 2017,
    isVeryNice : true,
    worstCourse : null,
    bestCourse : '자바스크립트 프로그래밍 기초'
}

for (let k in codeit) {
    console.log(k);
    console.log(codeit[k]);
}