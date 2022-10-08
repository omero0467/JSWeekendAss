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