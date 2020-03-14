/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  // convert to array and sort
  const sortedS = s.split("").sort();

  // grouping and count character
  const count = sortedS.reduce((curr, val) => {
    if (curr[val]) {
      curr[val]++;
    } else {
      curr[val] = 1;
    }
    return curr;
  }, {});

  // reduce by divide wuth two and do math floor
  // chack the single char for odd length, by using modulo
  const result = Object.keys(count).reduce(
    (curr, val) => {
      const answer = curr;
      answer.total += Math.floor(count[val] / 2);
      if (count[val] % 2 == 1 && !curr.flag) answer.flag = true;

      return answer;
    },
    { total: 0, flag: false }
  );

  return result.total * 2 + (result.flag ? 1 : 0);
};
