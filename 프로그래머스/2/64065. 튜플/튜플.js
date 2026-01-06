function parseAndSort(input) {
  const sets = input
    .slice(2, -2)
    .split("},{")
    .map(v => v.split(",").map(Number));
  sets.sort((a, b) => a.length - b.length);
  return sets;
}

function solution(s) {
    var answer = [];
    const arr = parseAndSort(s);
    const set = new Set();
    
    for(let item of arr) {
        item.forEach(v => {
            if(!set.has(v)) {
                set.add(v);
                answer.push(v);
            }
        })
    }
    
    return answer;
}