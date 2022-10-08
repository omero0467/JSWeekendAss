// Basic 
// Ex 1.1 ---------------------------------------------------
function yesNo (boolean) {
 return boolean ? 'Yes' : 'No'
}
//  -----------------------test-------------------------------
// console.log (yesNo(false))

// Ex 2.1 -––––––––––––––––––––––––––––––––––––––––––---------
// let myArr = [10, 343445353, 3453445, 3453545353453];
function sumLow (numbers) { 
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
    function getBinary (arr) {
        return parseInt(arr.join(''), 2)
    }
    //  -----------------------test-------------------------------
    // console.log(
        //     getBinary(myTestArr)
        //     );
        
        
// Ex 2.3 -–––––––––––––––––––––––––––––––––––––––––––––––––––––
        
        function findNextSquare (sq) {
    return  Math.sqrt(sq)%1===0 ? Math.pow(Math.sqrt(sq)+1,2) : -1
        }
//  -----------------------test-------------------------------
// console.log(
    //     findNextSquare(625)
    // );
    //  Ex 2.4 ------------------------------------------------------
    
    const findUnique = (arr) =>{
        const myarr = arr.filter((el,i)=>{
            if(el !== arr.indexOf(i+1)) {
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
    for (let i =1; i<=num; i++) {
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
    function findCentury (year) {
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
function basicOp (Op, a,b){
    const add = (a,b) =>{
        return a+b
    }
    const subtract = (a,b) =>{
        return a-b
    }
    const divide = (a,b) =>{
        return a/b
    }
    const times = (a,b) =>{
        return a*b
    }
    
    switch (Op) {
        case '+' : 
        return add(a,b)
        case '-' :
        return    subtract(a,b)
        case '/' :
        return    divide(a,b)
        case '*' :
        return    times(a,b)
    }
}
//  -----------------------test-------------------------------

// console.log(
    // basicOp('/',49,7))
    
    
    // Ex 3.1 ----------------------------------------------------
    function nb_year (p0, percent, aug, p) {
        let growth = p0 * percent/100 +aug;
        let counter = 0
        for (let i = p0; i<p; i+=growth){
            counter++
        }
        return counter-1
    }
    
    //  -----------------------test-------------------------------
    // console.log(
        // nb_year(1500000, 2.5, 10000, 2000000) 
        // );
        
    // Ex 3.2 ----------------------------------------------------
    const testArr =[[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]];
    
    function busStops (test) {
        let totalPpl = 0
        for (let i =0; i<test.length; i++){
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
    function fib(n){
        let arr = [0, 1];
        for (let i = 2; i < n + 1; i++){
          arr.push(arr[i - 2] + arr[i -1])
        }
       return arr[n]
      }
//  -----------------------test-------------------------------
// console.log(
    // fib(3)
    // );
    //  Ex 4.2------------------------------------------------------
    function trib(n){
        let arr = [1,1,1];
        for (let i = 3; i < n + 1; i++){
            arr.push(arr[i-3] + arr[i -2]+ arr[i-1])
        }
        return arr[n-1]
    }
    
//  -----------------------test-------------------------------
// console.log(trib(7))

// Ex 5.1------------------------------------------------------
function trim (str) {
    return str.slice(1,-1)
}
//  -----------------------test-------------------------------
// console.log(
    // trim('abc'));

// Ex 5.2------------------------------------------------------
function repeatStr (num, str) {
    return str.repeat(num)      
}
//  -----------------------test-------------------------------
// console.log(
// repeatStr(6,'hi')
// );
// Ex 5.3------------------------------------------------------
function toCamelCase(str) {
let myArr = []
str.includes('-')? myArr=str.split('-') : myArr=str.split('_');
let myArr2 = []
for(let i=0; i<myArr.length; i++){
    let el = myArr[i]
    el = el.charAt(0).toUpperCase()+el.slice(1)
    myArr2.push(el)
}
return myArr2
}

console.log(toCamelCase('My_hero_Academia'));