let fruits = ['레몬', '토마토', '딸기', '바나나'];
let ages = [20, 24, 25, 29, 30, 33];
let numbers = [];

fruits.splice(1, 1, '사과', '청포도')
console.log(fruits);

fruits.splice(0,1)
console.log(fruits);

ages.splice(ages.length -1);
console.log(ages)

ages.splice(2,2,26,28)
console.log(ages);

numbers = [1,2,3,5,8,9];
console.log(numbers);

for(let i = 0 ; i < numbers.length ; i++){
    if(numbers[i] % 2 !== 0){
        console.log(numbers[i]);
        numbers.splice(i,1);
        i--;
    }
}
console.log(numbers)