//broot force O(n^2)

const SUM2 = () => {
  const nums = [2, 7, 11, 15]

  const target = 9
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j]
      }
    }
  }
}
console.log(SUM2())
//hashmap O(n)
 SUM2 = () => {
  const nums = [2, 2, 11, 15 , 8]

  const target = 9

  const hashmap = {}
  for (let i = 0; i < nums.length; i++) {
    hashmap[nums[i]] = i
  }

  for (let i = 0; i < nums.length; i++) {

    const currentNumb = target - nums[i]
    if (currentNumb in hashmap) {
      return [i, hashmap[currentNumb]]
    }
  }
  return []

}

console.log(SUM2())

//hashmap O(n) покороче
const SUM2 = () => {
  const nums = [2, 2, 11, 15, 7]

  const target = 9

  const hashmap = {}
  for (let i = 0; i < nums.length; i++) {
    const currentNumb = target - nums[i]
    if (currentNumb in hashmap && i !== hashmap[currentNumb]) {
      return [i, hashmap[currentNumb]]
    }
    hashmap[nums[i]] = i
  }
  return []

}

console.log(SUM2())


