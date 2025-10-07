function isPossible(user, banned) {
    if(user.length !== banned.length) return false;
    for(let i = 0; i < banned.length; i++) {
        if(banned[i] === "*") continue;
        if(banned[i] !== user[i]) return false;
    }
    return true;
}

function solution(user_id, banned_id) {
    const set = new Set();
    const list_set = new Set();
    
    function dfs(index, list) {
        if(list.length === banned_id.length) {
            const list_str = list.sort().join("");
            list_set.add(list_str);
            return;
        }
        for(let user of user_id) {
            if(set.has(user) || !isPossible(user, banned_id[index])) continue;
            set.add(user);
            dfs(index+1, [...list, user]);
            set.delete(user);
        }
    }
    
    dfs(0, []);
    
    return list_set.size;
}