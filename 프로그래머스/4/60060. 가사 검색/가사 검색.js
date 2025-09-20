function reverse(w) {
    return w.split("").reverse().join("");
}

function getCount(query, trie) {
    const len = query.length;
    let root = trie[len];
    let temp;
    
    for(let q of query) {
        if(q === "?") break;
        if(root[q] === undefined) return 0;
        root = root[q];
        temp = root.count;
    }
    
    return temp;
}

function solution(words, queries) {
    var answer = [];
    const trie = new Array(10001);
    const trie_reverse = new Array(10001);
    const words_reverse = words.map((w)=>reverse(w))
    
    for(let i = 1; i < trie.length; i++) {
        trie[i] = {word: "", count: 0};
        trie_reverse[i] = {word: "", count: 0};
    }

    for(let word of words) {
        const len = word.length;
        let root = trie[len];
        
        for(let w of word) {
            if(root[w] === undefined) root[w] = {word: w, count: 0};
            root.count++;
            root = root[w];
        }
    }
    
    for(let word of words_reverse) {
        const len = word.length;
        let root = trie_reverse[len];
        
        for(let w of word) {
            if(root[w] === undefined) root[w] = {word: w, count: 0};
            root.count++;
            root = root[w];
        }
    }
    
    for(let query of queries) {
        let temp;
        
        if(query.split("?").length-1 === query.length) {
            answer.push(trie[query.length].count);
            continue;
        }
        
        if(query[0] === "?") temp = getCount(reverse(query), trie_reverse);
        if(query[0] !== "?") temp = getCount(query, trie);
        
        answer.push(temp);
    }
    
    return answer;
}