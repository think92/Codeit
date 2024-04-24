// 참조형 복사하기 (Reference Type Copy)
let numbers1 = [1, 2, 3];
let numbers2 = numbers1.slice();

numbers2.push(4);

console.log(numbers1);
console.log(numbers2);

function cloneObject(object){
    let temp = {};

    for (let key in object){
        temp[key] = object[key];
    }
    return temp;
}

let course1 = {
    title : '파이썬 프로그래밍 기초',
    language : 'Python',
    prerequisite : []
};

// let course2 = Object.assign({}, course1);

let course2 = cloneObject(course1);

course2.title = '자료 구조';
course2.prerequisite.push('파이썬 프로그래밍 기초')

console.log(course1);
console.log(course2);