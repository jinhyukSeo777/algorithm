function makeNode(node) {
    return {data: node, left: null, right: null};
}

function insert(root, data) {
    if(root === null) return makeNode(data);
    
    const node = makeNode(data);
    let current = root;
    
    while(true) {
        if(current.data[0] < node.data[0] && current.right === null) {
            current.right = node;
            break;
        }
        if(current.data[0] < node.data[0]) {
            current = current.right;
            continue;
        }
        if(current.data[0] > node.data[0] && current.left === null) {
            current.left = node;
            break;
        }
        if(current.data[0] > node.data[0]) {
            current = current.left;
            continue;
        }
    }
    
    return root;
}

function preorder(current, result=[]) {
    if(current === null) return;
    result.push(current.data[2]);
    preorder(current.left, result);
    preorder(current.right, result);
    return result;
}

function postorder(current, result=[]) {
    if(current === null) return;
    postorder(current.left, result);
    postorder(current.right, result);
    result.push(current.data[2]);
    return result;
}

function solution(nodeinfo) {
    var answer = [];
    nodeinfo = nodeinfo.map((v,i)=>[...v, i+1]);
    nodeinfo.sort((a,b)=>b[1]-a[1]);
    
    let root = null;
    for(let node of nodeinfo) {
        root = insert(root, node);
    }
    
    answer.push(preorder(root));
    answer.push(postorder(root));
    
    return answer;
}