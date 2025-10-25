function solution(new_id) {
    // 1.
    new_id = new_id.toLowerCase();
    
    // 2.
    new_id = new_id.match(/[a-z0-9._-]/g).join("");
    
    // 3.
    new_id = new_id.replace(/\.{2,}/g, '.');
    
    // 4.
    if(new_id.at(0) === ".") new_id = new_id.slice(1);
    if(new_id.at(-1) === ".") new_id = new_id.slice(0, -1);
    
    // 5.
    if(new_id === "") new_id = "a";
    
    // 6.
    if(new_id.length >= 16) new_id = new_id.slice(0, 15)
    if(new_id.at(-1) === ".") new_id = new_id.slice(0, -1);
    
    // 7.
    if(new_id.length === 1) new_id = new_id + new_id.at(-1) + new_id.at(-1);
    if(new_id.length === 2) new_id = new_id + new_id.at(-1);
    
    return new_id;
}