// Code your solution in this file!

const returnFirstTwoDrivers = function(array) {
    return array.slice(0, 2)
}

const returnLastTwoDrivers = function(array) {
    return array.slice(array.length - 2, array.length)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(integer) {
    return function(multiplier) {
        return integer * multiplier
    }
}

const fareDoubler = function(integer) {
    return createFareMultiplier(integer)(2)
}

const fareTripler = function(integer) {
    return createFareMultiplier(integer)(3)
}

function selectDifferentDrivers(arrayOfDrivers, f) {
    return f(arrayOfDrivers)
}