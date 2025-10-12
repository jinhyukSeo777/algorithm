function solution(gems) {
    var answer = [1, gems.length];
    const total = new Set(gems).size;
    const map = new Map();
    
    for(let i = 0; i < gems.length; i++) {
        map.set(gems[i], i);
        if(map.size !== total) continue;
        const orderd_list = [...map].sort((a,b)=>a[1]-b[1]);
        const first_item_location = orderd_list[0][1]+1;
        const last_item_location = orderd_list.at(-1)[1]+1;
        const first_item = orderd_list[0][0];
        if(answer[1]-answer[0] > last_item_location - first_item_location) {
            answer = [first_item_location, last_item_location]
        }
        map.delete(first_item);
    }
    
    return answer;
}