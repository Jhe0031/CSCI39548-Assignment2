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
Array.prototype.myMap = function (callback) {};

/** (Li) Without using the native “Array.prototype.filter” method of JavaScript, compose a function titled “myFilter” 
    that will take in an array of elements and execute a callback function on each of those elements. */
Array.prototype.myFilter = function(callback) {};

/** (Jackie) (aka any())
    Without using the native “Array.prototype.some” method of JavaScript, compose a function titled “mySome” 
    that will take in an array of elements and execute a callback function on each of those elements. */
Array.prototype.mySome = function(callback) {
    var bool = new Boolean(false);
    for (let i = 0; i < this.length; i++) {

    }
};

/** (Sumiya) Without using the native “Array.prototype.every” method of JavaScript, compose a function titled “myEvery” 
    that will take in an array of elements and execute a callback function on each of those elements. */
Array.prototype.myEvery = function(callback) {};

/** (Li) Without using the native “Array.prototype.reduce” method of JavaScript, compose a function titled “myReduce” 
    that will take in an array of elements and execute a callback function on each of those elements. */
Array.prototype.myReduce = function(callback) {};

/** (Jackie) Without using the native “Array.prototype.includes” method of JavaScript, compose a function titled 
    “myIncludes” that will take in an array of elements and indicate whether or not a target element is 
    contained within the input array. This returns a boolean. */
Array.prototype.myIncludes = function(callback) {};

/** (Sumiya) Without using the native “Array.prototype.indexOf” method of JavaScript, compose a function titled 
    “myIndexOf” that will take in an array of elements and returns the index of the first encounter of a target 
    element (if it is found) or -1 if that element does not exist within the input array. */
Array.prototype.myIndexOf = function(callback) {};

/** (Li) Without using the native “Array.prototype.push” method of JavaScript, compose a function titled “myPush” 
    that will take in an array of elements as well as an elementToAdd and append that element to the end of the 
    array. */
Array.prototype.myPush = function(callback) {};

/** (Jackie) Without using the native “Array.prototype.lastIndexOf” method of JavaScript, compose a function titled 
    “myLastIndexOf” that will take in an array of elements and returns the index of the last encounter of a 
    target element (if it is found) or -1 if that element does not exist within the input array. */
Array.prototype.myLastIndexOf = function(callback) {};

/** (Sumiya) Object.keys() */
/** Without using the native “Object.keys()” method of JavaScript, compose a function titled “grabKeys” that 
    will take in an object and return all of the keys of the key:value pairs of that object. */

/** (Li) Object.values() */
/** Without using the native “Object.values()” method of JavaScript, compose a function titled “grabValues” 
    that will take in an object and return all of the values of the key:value pairs of that object. */


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
const arrSome = [1, 2, 3, 4, 5];
// checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(arrSome.mySome(even));
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
console.log("[TEST] lastIndexOf:");
const key_value = {a:10, b:5, c:2};
console.log(grabKeys(key_value));
console.log("---");
