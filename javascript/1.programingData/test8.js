function calculator(rate, payment, term){
    interest = payment * term * (term+ 1) / 2 * rate /12
    console.log(+interest.toFixed(0))
}

calculator(0.043, 800000, 24);