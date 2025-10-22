function splitStringByNumber(input) {
    const match = input.match(/^([^0-9]+)([0-9]+)(.*)$/);
    const [_, prefix, number, suffix] = match;
    return { prefix, number, suffix };
}

function solution(files) {
   return files.sort((a,b)=>{
       const result1 = splitStringByNumber(a);
       const result2 = splitStringByNumber(b);
       if(result1.prefix.toLowerCase() !== result2.prefix.toLowerCase()) {
           return result1.prefix.toLowerCase().localeCompare(result2.prefix.toLowerCase());
       }
       if(+result1.number - +result2.number) {
           return +result1.number - +result2.number;
       }
   })
    
    return files;
}