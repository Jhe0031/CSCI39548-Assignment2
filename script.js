/** ---------------------------------------------
    Names: Jia Qi He, Sumiya Akter, Li Gao
    Assignment: #2
    Date: February 25, 2021 
    Course: CSCI39548 - Practical Web Development
------------------------------------------------- */

/** -----------------
    FUNCTION CODES
--------------------- */

/** Without using the native “Array.prototype.forEach” method of JavaScript, compose a function titled “myEach” 
    that will take in an array of elements and execute any callback function on each of those elements. */
Array.prototype.myEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
    return;  //undefined
}

/** (Sumiya) Without using the native “Array.prototype.map” method of JavaScript, compose a function titled “myMap” that 
    will take in an array of elements and execute a callback function on each of those elements. */
Array.prototype.myMap = function (callback)
{
    //creates an array
    let newArray = [];
    //let x hold the length
    let x = this.length;
    //for loop for the array and do the function
    for (let i = 0; i < x; i++)
    {
        let counter = callback(this[i]);
        newArray.push(counter);
    }
    //return the new array
    return newArray;
}

/** (Li) Without using the native “Array.prototype.filter” method of JavaScript, compose a function titled “myFilter” 
    that will take in an array of elements and execute a callback function on each of those elements. */
Array.prototype.myFilter = function(callback) {
    var newArray = [];
    for(let i=0; i<this.length; i++){
        if(callback(this[i])) {
            newArray.push(this[i]);
        }
    }
    return newArray;
};

/** (Jackie) (aka any())
    Without using the native “Array.prototype.some” method of JavaScript, compose a function titled “mySome” 
    that will take in an array of elements and execute a callback function on each of those elements. */
Array.prototype.mySome = function(callback) {
    var bool = new Boolean(false);
    for (var i = 0; i < this.length; i++) {
        if(callback(this[i])) {
            bool = true;
        };
    };
    return bool.toString();
};

/** (Jackie) Without using the native “Array.prototype.every” method of JavaScript, compose a function titled “myEvery” 
    that will take in an array of elements and execute a callback function on each of those elements. */
Array.prototype.myEvery = function(callback) {
    var bool = new Boolean(true);
    for (var i = 0; i < this.length; i++) {
        if(callback(this[i]) == false) {
            bool = false;
        };
    };
    return bool.toString();
};

/** (Li) Without using the native “Array.prototype.reduce” method of JavaScript, compose a function titled “myReduce” 
    that will take in an array of elements and execute a callback function on each of those elements. */
Array.prototype.myReduce = function(callback, initialValue) {
    var num = 0;
    if (initialValue != undefined) {
        total = initialValue;
    } else {
        total = this[0];
        num = 1;
    } 
    for(let i = num ; i < this.length ; i++) {
        total = callback(total,this[i],i,this);    
    }
    return total;
};

/** (Jackie) Without using the native “Array.prototype.includes” method of JavaScript, compose a function titled 
    “myIncludes” that will take in an array of elements and indicate whether or not a target element is 
    contained within the input array. This returns a boolean. */
Array.prototype.myIncludes = function(callback) {
    var bool = new Boolean(false);
    for (var i = 0; i < this.length; i++) {
        if(this[i] == callback) {
            bool = true;
        };
    };
    return bool.toString();
};

/** (Sumiya) Without using the native “Array.prototype.indexOf” method of JavaScript, compose a function titled 
    “myIndexOf” that will take in an array of elements and returns the index of the first encounter of a target 
    element (if it is found) or -1 if that element does not exist within the input array. */
function myIndexOf(arr, seekElement)
{
    //create variable to retain index = -1
    var index = -1;
    //for the length of the array loop this
    for (var i = 0; i < arr.length; i++)
    {
        //if the element exists within the array, store the index of that array into index
        if(arr[i] == seekElement)
        {
            index = i;
            break;
        }
    }
    //returns -1 if the element does not exist
    return index;
}

/** (Li) Without using the native “Array.prototype.push” method of JavaScript, compose a function titled “myPush” 
    that will take in an array of elements as well as an elementToAdd and append that element to the end of the 
    array. */
Array.prototype.myPush = function() {
    var old = this.length;
    for(var i = old ; i < old + arguments.length ; i++){
        this[i] = arguments[i - old];
    }
    return this.length;
};

/** (Sumiya) Without using the native “Array.prototype.lastIndexOf” method of JavaScript, compose a function titled 
    “myLastIndexOf” that will take in an array of elements and returns the index of the last encounter of a 
    target element (if it is found) or -1 if that element does not exist within the input array. */
function myLastIndexOf(arr, seekElement) 
{
    //set index to -1 for false statement
    var index = -1;
    //for the duration of the loop seek the element's last iteration
    //and print out the index
    for (var i = 0; i < arr.length; i++)
    {
        if(arr[i] == seekElement)
        {
            index = i;
        }
    }
    //if not found print index -1
    return index;
}

/** (Sumiya) Object.keys() */
/** Without using the native “Object.keys()” method of JavaScript, compose a function titled “grabKeys” that 
    will take in an object and return all of the keys of the key:value pairs of that object. */
function grabKeys(obj)
{
    let arr = []; //array declaration
    for (element in obj)
    {
        arr.push(element); //appends to array
    }
    //returns array keys
    return arr;
}
/** (Li) Object.values() */
/** Without using the native “Object.values()” method of JavaScript, compose a function titled “grabValues” 
    that will take in an object and return all of the values of the key:value pairs of that object. */

function grabValues(callback){
     let newArray = []
     for(let items in callback){
       newArray.push(callback[items]);
     }
     return newArray;
 };

/** -------------------------------------------------------------
    TESTING
 -------------------------------------------------------------- */
 //test for myEach
console.log("[TEST] myEach:");
const arr = [1, 2, 3, 4]
arr.myEach((x) => console.log(x));
console.log("---");

//test myMap
console.log("[TEST] myMap:");
let arr1 = [1, 2, 3];
arr1 = arr1.myMap(e=>e*2);
console.log(arr1);
console.log("---");

//test mySome
console.log("[TEST] mySome:");
const arrSome = [1, 3, 5];
// checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(arrSome.mySome(even));
console.log("---");

//test myEvery
console.log("[TEST] myEvery:");
const isBelowThreshold = (currentValue) => currentValue < 40;
const arrEvery1 = [1, 30, 39, 29, 10, 13];
console.log(arrEvery1.myEvery(isBelowThreshold));
console.log("---");

console.log("[TEST] myIncludes:");
//test myIncludes
const arrIncludes1 = [1, 2, 3];
console.log(arrIncludes1.myIncludes(2));
// expected output: true

const arrIncludes2 = ['cat', 'dog', 'bat'];
console.log(arrIncludes2.myIncludes('cat'));
// expected output: true
console.log(arrIncludes2.myIncludes('at'));
// expected output: false
console.log("---");

//test for myIndexOf : DONE
console.log("[TEST] myIndexOf:");
var arr2 = [1, 2, 3, 4, 5, 3];
var seekElement = 3;
console.log(myIndexOf(arr2, seekElement));
console.log("---");

//test for lastIndexOf : DONE
console.log("[TEST] lastIndexOf:");
var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 4];
var seekElement = 4;
console.log(myLastIndexOf(arr3, seekElement));
console.log("---");

//test for grabKeys : DONE
console.log("[TEST] grabKeys:");
const key_value = {a:10, b:5, c:2};
console.log(grabKeys(key_value));
console.log("---");

//test for myFilter : DONE
console.log("[TEST] myFilter:");
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.myFilter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
console.log("---");

//test for myReduce : DONE
console.log("[TEST] myReduce:");
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array1.myReduce(reducer));
// expected output: 10
console.log(array1.myReduce(reducer, 5));
// expected output: 15
console.log("---");

//test for myPush : DONE
console.log("[TEST] myPush:");
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.myPush('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]
animals.myPush('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
console.log("---");

//test for grabValue : DONE
console.log("[TEST] grabValue:");
const keyvalue = {a:10, b:5, c:2};
console.log(grabValues(keyvalue));
console.log("---");

console.log("All tests are complete! ( ᐛ )و")
