function solution(places) {
    var answer = [];
    
    for(let place of places) {
        let success = 1;
        
        for(let i = 0; i < 5; i++) {
            for(let j = 0; j < 5; j++) {
                if(place[i][j] !== "P") continue;
                
                if(j+1 < 5 && place[i][j+1] === "P") success = 0;
                if(i+1 < 5 && place[i+1][j] === "P") success = 0;
                
                if(j+2 < 5 && place[i][j+2] === "P" && place[i][j+1] !== "X") success = 0;
                if(i+2 < 5 && place[i+2][j] === "P" && place[i+1][j] !== "X") success = 0;
                
                
                if(i+1 < 5 && j+1 < 5 && place[i+1][j+1] === "P" && (place[i][j+1] !== "X" || place[i+1][j] !== "X")) success = 0;
                if(i-1 >= 0 && j+1 < 5 && place[i-1][j+1] === "P" && (place[i][j+1] !== "X" || place[i-1][j] !== "X")) success = 0;
            }
        }
        
        answer.push(success);
    }
    
    return answer;
}