
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,element){
  return [element,...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  //array = [element,...array]
  array.unshift(element);
  return array

  //return array.push(element)
}

function addElementToEndOfArray(array, element){
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}
