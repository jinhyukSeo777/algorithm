function getCombinations(n) {
    const arr = [];
    for(let i = 0; i < n-2; i++) {
        for(let j = i+1; j < n-1; j++) {
            for(let k = j+1; k < n; k++) {
                arr.push([i, j, k]);
            }
        }
    }
    return arr;
}

function isPrime(num) {
  if (num <= 1) return false; 

  for (let i = 2; i*i <= num; i++) {
    if (num % i === 0) return false;
  }

  return true; 
}

function solution(nums) {
    var answer = 0;
    const combinations = getCombinations(nums.length);
    
    for(let combination of combinations) {
        const sum = nums[combination[0]]+nums[combination[1]]+nums[combination[2]];
        if(isPrime(sum)) answer++;
    }
    
    return answer;
}