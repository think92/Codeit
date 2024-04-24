let codeit = {
    name: '코드잇',
    'born Year': 2017,
    isVeryNicd: true,
    worstCourse: null,
    bestCourse: {
        title: '자바스크립트 프로그래밍 기초',
        language: 'JavaScript'
    }
};

// 점 표기법 (objectName.propertyName)
console.log(codeit.name);

// 대괄호 표기법 (objectName['propertyName'])
console.log(codeit['born Year']);
console.log(codeit['born' +  ' Year']);

let propertyName = 'name';
console.log(codeit[propertyName]);

console.log(codeit.bestCourse.title);
console.log(codeit.bestCourse['title']);

// 재할당
codeit.name = 'codeit';
console.log(codeit.name);

// 추가
console.log(codeit.ceo);
codeit.ceo = '강영훈';
console.log(codeit.ceo);

// 삭제
console.log(codeit.worstCourse);
delete codeit.worstCourse;
console.log(codeit.worstCourse)

// in연산자 propertyName in object
console.log('name' in codeit);

if ('name' in codeit) {
    console.log(`name 값은 ${codeit.name}입니다.`);
} else{
    console.log('name 프로퍼티는 존재하지 않습니다.')
}