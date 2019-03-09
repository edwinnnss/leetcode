/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let isMinus = false
  const number = Math.abs(x)

  if (x < 0) {
    isMinus = true
  }

  const before = String(number)
  const length = before.length
  let reverse = ''

  for (let i = 1; i <= length; i++) {
    reverse += String(before[length - i])
  }

  let result = Number(reverse)
  if (result > Math.pow(2, 31)) {
    return 0
  }

  return isMinus ? -result : result
}
