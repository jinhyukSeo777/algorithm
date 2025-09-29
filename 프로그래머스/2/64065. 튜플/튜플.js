function parseAndSort(input) {
  const sets = input
    .slice(2, -2)
    .split("},{")
    .map((set) => set.split(",").map(Number));
  sets.sort((a, b) => a.length - b.length);
  return sets;
}

function solution(s) {
    var answer = [];
    const arr = parseAndSort(s);
    
    for(let item of arr) {
        item.forEach((v)=>{
            if(!answer.includes(v)) answer.push(v);
        })
    }
    
    return answer;
}