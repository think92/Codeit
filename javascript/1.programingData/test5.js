let celsiusTemps = [24, 25, 26, 22, 28, 27, 21];

// F : 화씨(fahrenheit), C : 섭씨(celsius)
// F = ( C * 9 / 5) +32

let fahrengeitTemps = [];

for (let i = 0; i < celsiusTemps.length; i++){
    fahrengeitTemps[i] = (celsiusTemps[i] * 9 / 5) +32;
}

console.log(fahrengeitTemps);