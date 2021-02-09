/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  var current = '1'
  while (n > 1) {
      current = countConvert(current)
      n--
  } 
  return current
};

function countConvert(number) {
    var strNumber = number + ''
    var numbers = []
    var indexes = []
    var result = '';

    
    for(i=0;i<strNumber.length;i++){
        if (numbers[numbers.length-1] && strNumber[i] == numbers[numbers.length-1]) {
            indexes[numbers.length-1]++
        } else {
            numbers.push(strNumber[i])
            indexes[numbers.length-1] = 1
       
        }
    }
    
    for (i = 0;i<numbers.length;i++) {
        result += indexes[i] + numbers[i]
    }
    
    return result
}
