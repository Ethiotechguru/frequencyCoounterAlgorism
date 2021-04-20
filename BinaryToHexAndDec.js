function DeceToBinary(num) {
    let binary = [];

    while (num) {
        if (num === 0) return 1;
        binary.unshift(num % 2);
        num = num % 2 === 0 ? num / 2 : (num - 1) / 2
    }
    return binary;
}
// DeceToBinary(339)

function BinToDecimal(num) {
    let decimal = 0;

    if (isNaN(num)) {
        return 'wrong input can\'t be calculated!'
    }
    num = num.toString();

    for (let i = num.length - 1; i >= 0; i--) {
        if (!(parseInt(num[i]) == 0 || parseInt(num[i]) == 1)) {
            return 'number is not binary digits'
        }
        else {
            decimal = decimal + (num[i] * (2 ** ((num.length - 1) - i)));
        }
    }

    return decimal;
}
BinToDecimal(1111)

function BinToHexDecimal(arr) {
    let hex = ''
    let hexDeArr = [];
    let i = Math.ceil(arr.length / 4);
    while (i > 0) {
        if (arr.length % 4 !== 0) {
            hexDeArr.push(arr.splice(0, arr.length % 4))
        } else {
            hexDeArr.push(arr.splice(0, 4))
        }
        i--;
    }
    for (let i = 0; i < hexDeArr.length; i++) {
        let val = hexDeArr[i].join('')
        let num = BinToDecimal(val);
        switch (num) {
            case 15:
                hex = hex + 'F';
                break;
            case 14:
                hex = hex + 'E';
                break;
            case 13:
                hex = hex + 'D';
                break;
            case 12:
                hex = hex + 'C';
                break;
            case 11:
                hex = hex + 'B';
                break;
            case 10:
                hex = hex + 'A';
                break;
            default:
                hex = hex + num;
                break;
        }
    }
    console.log(hex)
    return hex;
}
// BinToHexDecimal([1, 0, 1, 0, 1, 0, 0, 1, 1])//decimal=339 hex = 153
// BinToHexDecimal([0,1,1,1,1,0,1,0,1,1,1,1,1,1])//hex = 1EBF  //[[0,1], [1,1,1,0], [1,0,1,1], [1,1,1,1]]
