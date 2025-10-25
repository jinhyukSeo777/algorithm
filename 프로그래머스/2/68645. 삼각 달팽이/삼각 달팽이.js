function solution(n) {
    const arr = Array.from({ length: n }, () => Array(n).fill(undefined));
    let number = 1;
    let offsetNumber = 0;
    let position = [-1,0];
    let offset = [[1,0], [0,1], [-1,-1]]
    
    while(n > 0) {
        for(let i = 0; i < n; i++) {
            position[0]+=offset[offsetNumber][0];
            position[1]+=offset[offsetNumber][1];
            arr[position[0]][position[1]] = number;
            number++;
        }
        offsetNumber = (offsetNumber+1)%3;
        n--;
    }
    
    return arr.flat().filter(Boolean);
}