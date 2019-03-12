/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const characters = s.toUpperCase().split('')
  return characters.reduce((curr, character, index, data) => {
    if (index > 0 && data[index - 1]) {
      const current = getValueFromRoman(character)
      const previous = getValueFromRoman(data[index - 1])

      if (previous < current) {
        return (curr += current - 2 * previous)
      }
    }

    return (curr += getValueFromRoman(character))
  }, 0)
}

const getValueFromRoman = function(character) {
  const ROMAN = {
    I: 'I',
    V: 'V',
    X: 'X',
    L: 'L',
    C: 'C',
    D: 'D',
    M: 'M',
  }

  const converter = {
    [ROMAN.I]: 1,
    [ROMAN.V]: 5,
    [ROMAN.X]: 10,
    [ROMAN.L]: 50,
    [ROMAN.C]: 100,
    [ROMAN.D]: 500,
    [ROMAN.M]: 1000,
  }

  return converter[character] || 0
}
