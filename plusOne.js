/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const last = digits.length - 1
  const first = 0
  let number = digits

  for (var i = last; i >= first; i--) {
    number[i]++

    if (number[i] > 9) {
      number[i] = 0
    } else {
      return number
    }
  }

  number.unshift(1)
  
  return number
}
