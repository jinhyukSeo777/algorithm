// function solution(n, s, a, b, fares) {
//     const map = new Map();
    
//     for(let [a, b, cost] of fares) {
//         if(!map.has(a)) map.set(a, []);
//         if(!map.has(b)) map.set(b, []);
//         map.get(a).push([b, cost]);
//         map.get(b).push([a, cost]);
//     }
    
//     function dijkstra(start) {
//         const arr = new Array(n+1).fill(Infinity);
        
//         const queue = [];
//         queue.push(start);
//         arr[start] = 0;
        
//         while(queue.length > 0) {
//             const current = queue.shift();
//             for(let [next, cost] of map.get(current) || []) {
//                 if(arr[current]+cost < arr[next]) {
//                     queue.push(next);
//                     arr[next] = arr[current]+cost;
//                 }
//             }
//         }
        
//         return arr;
//     }
    
//     const dijkA = dijkstra(a);
//     const dijkB = dijkstra(b);
//     const dijkS = dijkstra(s);
    
//     let min = Infinity;
//     for(let i = 1; i <= n; i++) {
//         min = Math.min(min, dijkA[i]+dijkB[i]+dijkS[i]);
//     }
    
//     return min;
// }

function solution(n, s, a, b, fares) {
    var answer = Infinity;
    const arr = new Array(n+1).fill(null).map(v => new Array(n+1).fill(Infinity));

    for(let i = 1; i <= n; i++) {
        arr[i][i] = 0;
    }

    for(let [from, to, cost] of fares) {
        arr[from][to] = cost;
        arr[to][from] = cost;
    }
    
    for(let k = 1; k <= n; k++) {
        for(let i = 1; i <= n; i++) {
            if(arr[i][k] !== Infinity) {
                for(let j = 1; j <= n; j++) {
                    if(arr[i][j] > arr[i][k] + arr[k][j]) {
                        arr[i][j] = arr[i][k] + arr[k][j];
                    }
                }
            }
        }
    }

    for(let i = 1; i <= n; i++) {
        answer = Math.min(answer, arr[s][i] + arr[i][a] + arr[i][b]);
    }

    return answer;
}