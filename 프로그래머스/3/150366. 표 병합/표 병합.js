function updateValue(r, c, value, arr) {
    for(let bro of arr[r][c][1]) {
        const [br, bc] = bro;
        arr[br][bc][0] = value;
    }
}

function solution(commands) {
    var answer = [];
    const arr = new Array(51).fill(null).map((v)=>new Array(51).fill(null).map((v)=>["", []]));
    
    for(let r = 0; r < arr.length; r++) {
        for(let c = 0; c < arr[0].length; c++) {
            arr[r][c][1].push([r, c]);
        }
    }
    
    for(let str of commands) {
        const command = str.split(" ")[0];
        const len = str.split(" ").length;
        
        if(command === "UPDATE" && len === 4) {
            const [_, r, c, value] = str.split(" ");
            updateValue(r, c, value, arr);
        }
        
        if(command === "UPDATE" && len === 3) {
            const [_, value1, value2] = str.split(" ");
            for(let r = 0; r < arr.length; r++) {
                for(let c = 0; c < arr[0].length; c++) {
                    if(arr[r][c][0] === value1) updateValue(r, c, value2, arr);
                }
            }
        }
        
        if(command === "MERGE") {
            const [_, r1, c1, r2, c2] = str.split(" ");
            
            if(r1 === r2 && c1 === c2) continue;
            if (arr[r1][c1][1] === arr[r2][c2][1]) continue;
            
            const value = arr[r1][c1][0] !== "" ? arr[r1][c1][0] : arr[r2][c2][0];
            const temp = [...arr[r1][c1][1], ...arr[r2][c2][1]];
            
            for(let bro of temp) {
                const [r, c] = bro;
                arr[r][c][0] = value;
                arr[r][c][1] = temp;
            }
        }
        
        if(command === "UNMERGE") {
            const [_, r, c] = str.split(" ");
            const value = arr[r][c][0];
            const temp = [...arr[r][c][1]];
            
            for(let bro of temp) {
                const [br, bc] = bro;
                arr[br][bc][0] = "";
                arr[br][bc][1] = [[br, bc]];
            }
            
            arr[r][c][0] = value;
        }
        
        if(command === "PRINT") {
            const [_, r, c] = str.split(" ");
            if(arr[r][c][0] === "") answer.push("EMPTY");
            else answer.push(arr[r][c][0]);
        }
    }
    
    return answer;
}