function getFilteredArray(str) {
    const arr = [];
    for(let i = 0; i < str.length-1; i++) {
        if(/[a-zA-Z]/.test(str[i]) === false || /[a-zA-Z]/.test(str[i+1]) === false) continue;
        const word = (str[i]+str[i+1]).toLowerCase();
        arr.push(word);
    }
    return arr;
}

function countCommonElements(arr1, arr2) {
    const short = arr1.length < arr2.length ? arr1 : arr2;
    const long = arr1.length >= arr2.length ? arr1 : arr2;
    let count = 0;
    
    short.forEach((v)=>{
        if(long.indexOf(v) !== -1) {
            long.splice(long.indexOf(v), 1);
            count++;
        }
    })
    
    return count;
}

function solution(str1, str2) {
    const arr1 = getFilteredArray(str1);
    const arr2 = getFilteredArray(str2);
    const len = arr1.length+arr2.length;
    
    const intersection = countCommonElements(arr1, arr2);
    const union = len - intersection;
    
    return union === 0 ? 65536 : Math.floor(intersection/union*65536);
}