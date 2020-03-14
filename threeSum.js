/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b)

  let sums = []
  const target = 0

  if (nums.length < 3) {
    return sums
  }

  if (nums[0] === 0 && nums[nums.length - 1] === 0) {
    return [[0, 0, 0]]
  }

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[0] > 0) {
      return sums
    }

    for (let j = i + 1; j < nums.length - 1; j++) {
      let k = nums.length - 1

      while (k > j) {
        const a = nums[i]
        const b = nums[j]
        const c = nums[k]

        if (c < 0) {
          break
        }

        if (a + b + c === target) {
          sums.push([a, b, c])
        }
        --k
      }
    }
  }

  return removeDuplicates(sums)
}

var removeDuplicates = function(arr) {
  var obj = {}
  var temp = []

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = true
  }

  for (var key in obj) {
    temp.push(key.split(','))
  }

  return temp
}
