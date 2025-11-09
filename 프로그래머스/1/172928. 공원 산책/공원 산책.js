function solution(park, routes) {
    const height = park.length;
    const width = park[0].length;
    let start = [];
    
    for(let i = 0; i < height; i++) {
        for(let j = 0; j < width; j++) {
            if(park[i][j] === "S") start = [i, j];
        }
    }
    
    for(let route of routes) {
        const [dir, dis] = route.split(" ");
        let current = [...start];
        let success = true;
        
        for(let i = 1; i <= Number(dis); i++) {
            if(dir === "N") current[0]--;
            if(dir === "S") current[0]++;
            if(dir === "W") current[1]--;
            if(dir === "E") current[1]++;
            if(current[0] < 0 || current[0] >= height || 
               current[1] < 0 || current[1] >= width || 
               park[current[0]][current[1]] === "X") {
                success = false;
                break;
            }
        }
        
        if(success) start = current;
    }
    
    return start;
}