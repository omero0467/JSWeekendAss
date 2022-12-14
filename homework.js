// Basic 
// Ex 1.1 ---------------------------------------------------
function yesNo(boolean) {
    return boolean ? 'Yes' : 'No'
}
//  -----------------------test-------------------------------
// console.log (yesNo(false))

// Ex 2.1 -––––––––––––––––––––––––––––––––––––––––––---------
// let myArr = [10, 343445353, 3453445, 3453545353453];
function sumLow(numbers) {
    let first = Math.min(...numbers)
    numbers.splice(numbers.indexOf(first), 1)
    let second = Math.min(...numbers)
    return first + second
}
//  -----------------------test-------------------------------
// console.log(
//     sumLow(myArr)
//     );

// Ex 2.2 ------------------------------------------------------
// const myTestArr = [0,0,0,1,1,1,1] 
function getBinary(arr) {
    return parseInt(arr.join(''), 2)
}
//  -----------------------test-------------------------------
// console.log(
//     getBinary(myTestArr)
//     );


// Ex 2.3 -–––––––––––––––––––––––––––––––––––––––––––––––––––––

function findNextSquare(sq) {
    return Math.sqrt(sq) % 1 === 0 ? Math.pow(Math.sqrt(sq) + 1, 2) : -1
}
//  -----------------------test-------------------------------
// console.log(
//     findNextSquare(625)
// );
//  Ex 2.4 ------------------------------------------------------

const findUnique = (arr) => {
    const myarr = arr.filter((el, i) => {
        if (el !== arr.indexOf(i + 1)) {
            return el
        }
    })
    return myarr.join('')
}
//  -----------------------test-------------------------------
// console.log(findUnique([ 0, 0, 1, 0, 0,]));

//  Ex 2.5 ------------------------------------------------------
function summer(num) {
    const newarr = []
    for (let i = 1; i <= num; i++) {
        newarr.push(i)
    }
    return newarr.reduce((acu, cur) => {
        return acu + cur
    })
}
//  -----------------------test-------------------------------
// console.log(
//     summer(8)
//     )


//  Ex 2.6 ------------------------------------------------------
function findCentury(year) {
    if (year <= 0)
        console.log("0 and negative is not allowed for a year");
    // If year is between 1 to 100 it
    // will come in 1st century
    else if (year <= 100)
        console.log("1st century");

    else if (year % 100 == 0)
        console.log(parseInt(year / 100) + " century");

    else
        console.log(parseInt(year / 100) + 1 + " century")
}

//  -----------------------test-------------------------------
// findCentury(3)

// Ex 2.7 ----------------------------------------------------
function basicOp(Op, a, b) {
    const add = (a, b) => {
        return a + b
    }
    const subtract = (a, b) => {
        return a - b
    }
    const divide = (a, b) => {
        return a / b
    }
    const times = (a, b) => {
        return a * b
    }

    switch (Op) {
        case '+':
            return add(a, b)
        case '-':
            return subtract(a, b)
        case '/':
            return divide(a, b)
        case '*':
            return times(a, b)
    }
}
//  -----------------------test-------------------------------

// console.log(
// basicOp('/',49,7))


// Ex 3.1 ----------------------------------------------------
function nb_year(p0, percent, aug, p) {
    let growth = p0 * percent / 100 + aug;
    let counter = 0
    for (let i = p0; i < p; i += growth) {
        counter++
    }
    return counter - 1
}

//  -----------------------test-------------------------------
// console.log(
// nb_year(1500000, 2.5, 10000, 2000000) 
// );

// Ex 3.2 ----------------------------------------------------
const testArr = [[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]];

function busStops(test) {
    let totalPpl = 0
    for (let i = 0; i < test.length; i++) {
        let currentStop = test[i]
        let getOn = currentStop[0]
        let getOff = currentStop[1]
        totalPpl += getOn - getOff
    }
    return console.log(totalPpl);
}
//  -----------------------test-------------------------------
// busStops(testArr)

// Ex 4.1 ----------------------------------------------------
function fib(n) {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr[n]
}
//  -----------------------test-------------------------------
// console.log(
// fib(3)
// );
//  Ex 4.2------------------------------------------------------
function trib(n) {
    let arr = [1, 1, 1];
    for (let i = 3; i < n + 1; i++) {
        arr.push(arr[i - 3] + arr[i - 2] + arr[i - 1])
    }
    return arr[n - 1]
}

//  -----------------------test-------------------------------
// console.log(trib(7))

// Ex 5.1------------------------------------------------------
function trim(str) {
    return str.slice(1, -1)
}
//  -----------------------test-------------------------------
// console.log(
// trim('abc'));

// Ex 5.2------------------------------------------------------
function repeatStr(num, str) {
    return str.repeat(num)
}
//  -----------------------test-------------------------------
// console.log(
// repeatStr(6,'hi')
// );
// Ex 5.3------------------------------------------------------
function toCamelCase(str) {
    let myArr = []
    str.includes('-') ? myArr = str.split('-') : myArr = str.split('_');
    let myArr2 = []
    for (let i = 0; i < myArr.length; i++) {
        let el = myArr[i]
        el = el.charAt(0).toUpperCase() + el.slice(1)
        myArr2.push(el)
    }
    return myArr2
}
// -------------------------------test-------------------------
// console.log(toCamelCase('My_hero_Academia'));

// Ex 5.4------------------------------------------------------
function toWeirdCase(str) {
    // let mystr = str
    let myArr = [];
    if (str.includes(" ")) {
        myArr = str.split(" ").map(el => el.split(''))

        for (let el of myArr) {
            for (let i = 0; i < el.length; i += 2) {
                el.splice(i, 1, el[i].toUpperCase());
            };
            for (let i = 1; i < el.length; i += 2) {
                el.splice(i, 1, el[i].toLowerCase());
            };
        }
        for (let i = 0; i < myArr.length; i++) {
            myArr[i] = myArr[i].join('');
        }
        return myArr.join(' ')
    } else {
        myArr = str.split("");
        for (let i = 0; i < str.length; i += 2) {
            myArr.splice(i, 1, myArr[i][0].toUpperCase());
        }
        for (let i = 1; i < str.length; i += 2) {
            myArr.splice(i, 1, myArr[i][0].toLowerCase());
        }
        return myArr.join('')
    }
    console.log(myArr);
}
// ---------------------------test-----------------------------
//  console.log(toWeirdCase('Weird STRIng CAse'));
// Ex 5.5 -----------------------------------------------------

function initials(str) {
    let name = ''
    let arr = str.split(' ');
    for (let el of arr) {
        name += el.charAt(0).toUpperCase() + '.'
    }
    return name;
}
// --------------------------------test--------------------------
// console.log(
//     initials('sam harris')
// );
// Ex 5.6 -------------------------------------------------------
function Maskify(str) {
    let myArr = str.split('');
    return myArr.fill('#', 0, myArr.length - 4).join('')
}
// --------------------------------test--------------------------
//     console.log(
//     Maskify("2")
// );
// Ex 5.7 -------------------------------------------------------
function shortestWord(str) {
    let myArr = str.split(' ')
    console.log(myArr);
    myArr.sort((a, b) => {
        return b.length - a.length
    })
    return myArr[0].length
}
// --------------------------------test--------------------------
// console.log(
//     shortestWord('String will never be empty and you do not need')
//     );

// Ex 6.1 -------------------------------------------------------
function mumble(str) {
    let myArr = str.toLowerCase().split('').map((e, i) => {
        return e = e.toUpperCase() + e.repeat(i)
    });
    return myArr.join('-')
}
// --------------------------------test--------------------------
// console.log(
    //     mumble('cwAt')
    // );
    
    // Ex 6.2 -------------------------------------------------------
    function countDups (text){
        let result = 0,
        soltingObject = {};
        text.toLowerCase().split('').map(str => {
            if (!soltingObject.hasOwnProperty(str)) {
                soltingObject[str] = 0;
            } else {
                if (soltingObject[str] === 0) {
                    result += 1;
                }
                soltingObject[str] = soltingObject[str] + 1;
            }
        });
        return result;
    }
    // --------------------------------test--------------------------
    // console.log((countDups('abbccccdDdd')));
    // Ex 6.3  --------------------------------------------------------- 
    function longest(s1, s2) {
        let newStr = s1.concat(s2);
        let longestCharArr = unique(newStr).split("").sort();
        
        return longestCharArr.join("");
      }
      
      function unique(str) {
        let result = "";
        for(let i = 0; i < str.length; i++) {
          if(result.indexOf(str[i]) == -1) {
            result += str[i];
          }
        }
        return result;
      }
      const a = "xyaabbbccccdefww"
      const b = "xxxxyyyyabklmopq"
//   ----------------------------test-------------------------
//   console.log(longest(a,b))


// Ex 6.4 -------------------------------------------------
function isIsogram(str){
    return str.toLowerCase().split('').filter((item, pos, arr)=> arr.indexOf(item) == pos).length == str.length;
   }
  console.log(  
    isIsogram("mOose") 
    );