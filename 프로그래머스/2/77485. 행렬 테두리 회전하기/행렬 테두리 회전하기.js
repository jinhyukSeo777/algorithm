function solution(rows, columns, queries) {
    var answer = [];
    const arr = new Array(rows).fill(null).map((v)=>new Array(columns));
    
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            arr[i][j] = i * columns + j + 1;
        }
    }
    
    for(let [x1, y1, x2, y2] of queries) {
        x1--; y1--; x2--; y2--;
        const temp = arr[x1][y1];
        let min = temp;
        
        for(let i = x1; i < x2; i++) {
            arr[i][y1] = arr[i+1][y1];
            min = Math.min(min, arr[i][y1]);
        }
        
        for(let j = y1; j < y2; j++) {
            arr[x2][j] = arr[x2][j+1];
            min = Math.min(min, arr[x2][j]);
        }
        
        for(let i = x2; i > x1; i--) {
            arr[i][y2] = arr[i-1][y2];
            min = Math.min(min, arr[i][y2]);
        }
        
        for(let j = y2; j > y1; j--) {
            arr[x1][j] = arr[x1][j-1];
            min = Math.min(min, arr[x1][j]);
        }
        
        arr[x1][y1+1] = temp;
        answer.push(min);
    }
    
    return answer;
}