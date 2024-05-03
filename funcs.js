function isFive(num) {

  if(num === 5) {

    return true;

  } else {

    return false;

  }

}

function isOdd(number) {

  if (typeof number !== 'number') {
    throw new Error('Input must be a number');
  }


  if(number % 2 !== 0) {

    return true;

  }
  else if(number % 2 === 0)

    return false;

}





function myRange(min, max, step = 1) {

  let result = [];

  if(min <= max) {

  for (let i = min; i < max + 1; i += step) {

    result.push(i);

  }

}

    return result;
}




module.exports = { isFive, isOdd, myRange };
