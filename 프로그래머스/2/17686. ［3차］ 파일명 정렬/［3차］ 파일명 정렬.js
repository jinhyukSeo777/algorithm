function splitStringByNumber(input) {
    // const [_, prefix, number, suffix] = input.match(/^([^0-9]+)([0-9]+)(.*)$/);
    const [prefix, suffix] = input.split(/[0-9]+/);
    const number = input.match(/[0-9]+/);
    return [prefix.toLowerCase(), Number(number), suffix];
}

function solution(files) {
    // const str = "img12.png img34.png img56.png";
    // console.log(str.match(/^([^0-9]+)([0-9]+)(.*)$/));
    // console.log(str.match(/[^0-9]+[0-9]+.*/g));
    // console.log(/[^0-9]+[0-9]+.*/.test(str))   //
    // console.log(/^[^0-9]+[0-9]+.*$/.test(str)) // 둘이 다름
    // console.log(str.match(/[a-zA-Z]+[0-9]+\.png/g));
    // console.log(str.split(/[a-zA-Z]+[0-9]+\.png/));
    
    return files.sort((a,b)=>{
        const result1 = splitStringByNumber(a);
        const result2 = splitStringByNumber(b);
        if(result1[0] !== result2[0]) return result1[0].localeCompare(result2[0]);
        if(result1[1] !== result2[1]) return result1[1] - result2[1];
    })
}