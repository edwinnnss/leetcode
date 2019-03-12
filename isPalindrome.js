/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let rem = null
  let final = 0
  let number = Number(x)
  const temp = number

  while (number > 0) {
    rem = number % 10
    number = parseInt(number / 10)
    final = final * 10 + rem
  }

  return final === temp
}
