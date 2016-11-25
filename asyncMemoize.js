
/* Implement the function asyncMemoize:
 *
 * asyncMemoize takes an asynchronous function and returns a memoized version of it.  When the
 * memoized async function is invoked with new arguments, it performs asynchronous work on the
 * arguments, caches the result, and then invokes the given callback on the cached value.  When the
 * memoized function receives previously evaluated arguments, it invokes the given callback on the
 * cached value instead of making another asynchronous call.
 *
 * If the same arguments are passed to the function with a different callback, the callback should
 * be invoked on the cached value instead of performing an additional asynchronous call.
 *
 * fakeAsyncFunc( 10, result => result + 20 ); // makes asynchronous call on new argument
  --> 30

 * fakeAsyncFunc( 10, result => result + 30 ); // invokes callback on previously cached value
  --> 30?
  --> 40
 *

 asynchronous function?


 memoized version?

 a) Check the hash table for the result of asyncFunc, by checking the value of result and asyncFunc,
  {
    funcName: {
      10: 30,
      20: 40
    },
    func2: {
      true:
      false:
    }
  }

 b) IF there is no value to the key of result and asyncFunc,
 - hash table caches the result of the asyncFunc
 - apply the callback from the asyncFunc to the result

 */

const asyncMemoize = asyncFunc => {

  let memohash = {};
  // check if the asyncFunction exists inside memohash
  let args = asyncFunc
  return function(value, cb){
    let asyncFunc = args[0]
    let asyncFuncString = asyncFunc.toString();
    // checking if asyncFunc exists inside memohash
    if (memohash[asyncFuncString]) {
      if (memohash[asyncFuncString][value]) {
        return memohash[asyncFuncString][value]();
      } else {
        let retVal = asyncFunc(value);
        memohash[asyncFuncString][value] = retVal;
        return cb(retVal);
      }
    } else {
    //it does not exist
      memohash[asyncFuncString] = asyncFunc;
      memohash[asyncFuncString][value] = cb(asyncFunc(value));
      return memohash[asyncFuncString][value]();
    }
  }
    // check if the value in asyncFunction exists (memohash[async][value])
      // evalRes = memohash[async][value]
      // apply cb on evalRes ( return cb(evalRes) )
    // otherwise calculate it and then store the value inside memohash[async]
  // calculate asyncFunction(value), and then store it in the memohash
  // apply cb on asyncFunction(value)

};






/*  --=*=--  Tests below.  Do not modify.  --=*=--  */

// These aren't actual asynchronous functions, but they serve our testing purposes.
function upper(value, callback) {
  setTimeout( () => callback(value.toUpperCase()), 1000);
}

function doubler(num, callback) {
  setTimeout( () => callback(num * 2), 500);
}

const mocha = require('mocha');
const expect = require('chai').expect;
const sinon = require('sinon');
const spyUpper = sinon.spy(upper);
const spyDoubler = sinon.spy(doubler);
const memoUpper = asyncMemoize(spyUpper);
const memoDoubler = asyncMemoize(spyDoubler);
const dogs = [];
const cats = [];
const nums = [];