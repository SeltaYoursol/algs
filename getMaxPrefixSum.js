//функция, которая принимает на вход массив целых чисел. Она находит префикс с максимальной суммой и возвращает одно число — сумму чисел этого префикса.


const getMaxPrefixSum = (arr) => {
  let maxSum = 0;
  for( let i = 0; i < arr.length; i++ ){
    let currentSum =  0 ;
    for(let j = 0; j<= i ; j++){
      currentSum = arr[j] + currentSum
    }
        maxSum = Math.max(maxSum, currentSum)  
  }
  return maxSum
}
const getMaxPrefixReduce = (arr)=>{
return  arr.reduce((acc, currentItem)=> acc+ currentItem, 0)
}
console.log(getMaxPrefixSum([0,1, 2,3,9]))
console.log(getMaxPrefixReduce([0,1, 2,3,9]))
