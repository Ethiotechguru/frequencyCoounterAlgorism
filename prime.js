function prime(num) {//get all prime numbers from 2 to num
    let primeNumbers = [];
    while (num >= 2) {
        let i = 1;
        let counter = 0;
        while (i <= num) {
            if (counter > 2) {
                break;
            }
            if (num % i === 0) {
                counter++;
            }
            if (counter === 2 && i == num) {
                primeNumbers.push(num);
                break;
            }
            i++;
        }
        num--;
    }
    console.log(primeNumbers);
    return primeNumbers;
}
function isPrime(num) {//check is the given number is a prime number
    let i = 1;
    let flag = 0;
    if (num <= 1) {
        return false;
    }
    while (i <= num) {
        if (num % i === 0) {
            flag++;
            if (flag > 2 && i <= num) {
                return false;
            }
        }
        i++;
    }
    console.log(num, 'is a prime');
    return true;
}

function primeFactors(num) {//get all prime factors of a given number
    let x = num;
    let primeFactorsOfNum = [];
    let i = 2;
    if(num<i || Math.floor(num) !== num){
        console.log('not a valid input');
        return false;
    }
    while (i <= num/i) {
        if (num % i === 0) {
            primeFactorsOfNum.push(i);
            num = num/i;
        }else{
            i++;
        }
    }
    if(num>1){
        primeFactorsOfNum.push(num)
    }
    
    if (prove(x, primeFactorsOfNum)){
        console.log(primeFactorsOfNum)
        return primeFactorsOfNum
    }
    else{
        console.log('not value found')
        return false;
    }
}
// primeFactors(51)

function prove(num, arr) {//prove if multiple of the prime factors of the given number gives you the number it self
    let compere = num;
    let provingNum = 1;
    for (let val of arr){
        provingNum = provingNum * val;
    }
    if (provingNum === compere) {
        return true;
    }
}


isPrime(8191)