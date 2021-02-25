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
    const newArray = [];
    for (let i = 0; i < newArray.length; i++)
    {
        callback(newArray[i], i, newArray)
    }
    return newArray;
}

/** (Li) Without using the native “Array.prototype.filter” method of JavaScript, compose a function titled “myFilter” 
    that will take in an array of elements and execute a callback function on each of those elements. */
Array.prototype.myFilter = function(callback) {};

/** (Jackie) (aka any())
    Without using the native “Array.prototype.some” method of JavaScript, compose a function titled “mySome” 
    that will take in an array of elements and execute a callback function on each of those elements. */
Array.prototype.mySome = function(callback) {};

/** (Jackie) Without using the native “Array.prototype.every” method of JavaScript, compose a function titled “myEvery” 
    that will take in an array of elements and execute a callback function on each of those elements. */
Array.prototype.myEvery = function(callback) 
{
}

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
Array.prototype.myPush = function(callback) {};

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
Array.prototype.grabValues = function(callback)
{

}

/** -------------------------------------------------------------
    TESTING
 -------------------------------------------------------------- */

 //test for myEach
const arr = [1, 2, 3, 4]
arr.myEach((x) => console.log(x));

//test myMap

//test for myIndexOf : DONE
var arr2 = [1, 2, 3, 4, 5, 3];
var seekElement = 3;
console.log(myIndexOf(arr2, seekElement));

//test for lastIndexOf : DONE
var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 4];
var seekElement = 4;
console.log(myLastIndexOf(arr3, seekElement));

//test for grabKeys : DONE
const key_value = {a:10, b:5, c:2};
console.log(grabKeys(key_value));