
function power(n, m){
    if(m===0) return 1;
    return n*power(n, m-1);
}
function countChar(word){
    let counter = {};
    let type = typeof word;
    if(!word || typeof word !== 'string') return `${type} is not invalid input`
    word = word.toLowerCase();  
    for(let i = 0; i<word.length; i++){
       if(isAlphaNumeric(word[i])){
           counter[word[i]] = ++counter[word[i]] || 1;
       }
    }
    return counter;
}
function isAlphaNumeric(char){
    let code = char.charCodeAt(0);
    let sChar = 'a'.charCodeAt(0);
    let bChar = 'z'.charCodeAt(0);
    let sNum =  '0'.charCodeAt(0);
    let bNum = '9'.charCodeAt(0);
    if(
        (code>=sChar && code<=bChar) || 
        (code>=sNum && code<=bNum)
       ){
            return true;
        }
        return false;
}

function same(arr1, arr2){
    //Frequency Counter with Big O(n**2) Time complexity
    if(arr1.length !== arr2.length){
        console.log('coming form not equal length')
        return false;
    }

    for(let i = 0; i<arr1.length; i++){
        let idx = arr2.indexOf(arr1[i] * arr1[i]);
        if(idx === -1){
            console.log('comming from no squer found!', i)
            return false;
        }
        arr2.splice(idx, 1);
    }
    console.log('comming from found all matching squers')
    return true;
}

function sameFqCounter(arr1, arr2){
    //Frequency Counter with Big O(n) Time complexity
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let i = 0; i<arr1.length; i++){
        frequencyCounter1[arr1[i]] = (frequencyCounter1[arr1[i]] || 0)+1;
        frequencyCounter2[arr2[i]] = (frequencyCounter2[arr2[i]] || 0)+1;
    }
    for(let key in frequencyCounter2){
        if(
            !(key**(1/2) in frequencyCounter1) && 
            frequencyCounter1[key**(1/2)] !== frequencyCounter2[key]
        ) return false;
    }
    return true;

}
// sameFqCounter([4,2,1,3,1], [1,4,1,9,16])

function areAnagrams(str1, str2){
    let word1 = '';
    let word2 = '';
    let a = str1.split('');
    let b = str2.split('');
    for(let i = 0; i<a.length; i++){
        if(a[i] !== ' '){
            word1 = word1 + a[i];
        }
    }
    for(let j = 0; j<b.length; j++){
        if(b[j] !== ' '){
            word2 = word2 + b[j];
        }
    }

    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();

    if(word1.length !== word2.length){
        return false;
    }
    
    let str1FreqCounter = {};
    let str2FreqCounter = {};

    for(let i = 0; i<word1.length; i++){
        str1FreqCounter[word1[i]] = (str1FreqCounter[word1[i]] || 0)+1;
        str2FreqCounter[word2[i]] = (str2FreqCounter[word2[i]] || 0)+1;
    }

    for(let key in str1FreqCounter){
        if(!key in str2FreqCounter && str1FreqCounter[key] !== str2FreqCounter[key]){
            return false;
        }
    }
    return true;
}
// let b = areAnagrams('asamzaS', 'Aaz mass')
// let a = areAnagrams('tikus Biskut', 'biskut is tku');

function sumToZero(arr){
    arr = arr.sort((a, b)=> a-b);
    console.log(arr)
    let i = 0;
    let j = arr.length-1;
    while(i<j){
        if(arr[i] + arr[j] === 0){
            console.log([arr[i], arr[j]])
            return [arr[i], arr[j]];
        }
        else if(arr[i] + arr[j] > 0){
            j--
            console.log(j, i, 'from if else block')
        }
        // else if(Math.abs(arr[i]) < arr[j]){
        //     j--;
        //     console.log(j, i, 'from if else block')
        // }
        else{
            i++;
            console.log(j, i, 'from else block')
        }
    }
    console.log('not found')
    return false;
}
// sumToZero([-6,-5,-4,0,4,7,8]);

function countUniqueVal(arr){
    if(!arr.length) return 0;
    let i = 0;
    let j = i+1;
    while(j<arr.length){
        if(arr[i] === arr[j]){
            j++;
        }else{
            
            i++;
            arr[i] = arr[j];
            j++;
            // console.log(arr[j])
        }
    }
    console.log(arr.splice(0, i+1))
    return i+1;
}

countUniqueVal([])

function maxSubArraySum(arr, n){
    let max = 0;
    if(arr.length === 0) return 0;
    for(let i = 0; i<=arr.length-n; i++){
        let j = i
        let result = 0;
        while(j<n+i){
            console.log(i, j)
            result = result+arr[j];
            j++;
        }
        if(result>max){
            max = result;
        }
    }
    console.log(max, 'is max')
    return max;
}
// maxSubArraySum([10,18,6,2,5,12,8,10,14],2)

function theLongersUniqCharInStr(str){
    let longSubStr='';
    let strToCompere = [];
    console.log(str.length)
    for(let i = 0; i<str.length; i++){
        if(!strToCompere.includes(str[i])){
            strToCompere.push(str[i]);
            let word = strToCompere.join('');
            if(i === str.length-1 && word.length>longSubStr.length){
                longSubStr = word;
            }
        }else{
            let word = strToCompere.join('');
            if(word.length>longSubStr.length){
                longSubStr = word;
            }
            strToCompere = [];
            strToCompere.push(str[i]);
        }
    }
    console.log(longSubStr)
    return longSubStr;
}

// 'helloafricaiamethiopiabcdqthlfru'=>should returns iabcdqthlfru
theLongersUniqCharInStr('helloafricaiamethiopiabcdqthlfru')
