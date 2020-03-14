/**
 * @param {string} str
 * @return {number}
 */

var myAtoi = function(str) {
  const max = Math.pow(2, 31)

  let prevSign = ''
  let value = str.trim()

  const firstCharacter = value[0]
  if (value.length > 1) {
    secondCharacter = value[1]
  }
  if (isNaN(firstCharacter) && isNaN(secondCharacter)) {
    return 0
  } else if (firstCharacter === '-' || firstCharacter === '+') {
    prevSign = firstCharacter
    value = value.substr(1, value.length)
  } else if (isNaN(firstCharacter) || !value) {
    return 0
  }
  value = removeLeadingZero(value)
  value = removeAfterNumber(value)
  const sign = Math.sign(prevSign + value)

  let absValue = Math.abs(value)
  let additional = 0

  if (absValue >= max) {
    additional = sign === -1 ? 0 : 1
    value = max
  }

  return sign * value - additional
}

var removeLeadingZero = function(str) {
  if (str.length > 0) {
    if (parseInt(str[0]) > 0) {
      return str
    }

    const removedLeadingZero = str.substring(1, str.length)

    return removeLeadingZero(removedLeadingZero)
  }

  return '0'
}

var removeAfterNumber = function(str) {
  let output = []

  for (let i = 0; i < str.length; i++) {
    console.log(
        parseInt(str[i]),
        str,
        str[i] == 0,
        str.length - 1 >= i + 1,
        isNaN(str[i + 1]),
      )
    if (
      parseInt(str[i]) === 0 &&
      str.length - 1 >= i + 1 &&
      isNaN(str[i + 1])
    ) {


      return 0
    } else if (!isNaN(str[i])) {
      output.push(str[i])
    } else {
      break
    }
  }
  return parseInt(output.join(''))
}
