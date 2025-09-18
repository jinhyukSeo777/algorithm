function createNode(data) {
    return { data, left: null, right: null };
}

function insert(root, data) {
    if (root === null) return createNode(data);

    let current = root;
    while (true) {
        if (data[0] < current.data[0]) {
            if (current.left === null) {
                current.left = createNode(data);
                break;
            }
            current = current.left;
        } else {
            if (current.right === null) {
                current.right = createNode(data);
                break;
            }
            current = current.right;
        }
    }
    return root;
}

function preorder(node, result = []) {
    if (node === null) return result;
    result.push(node.data[2]);
    preorder(node.left, result);
    preorder(node.right, result);
    return result;
}

function postorder(node, result = []) {
    if (node === null) return result;
    postorder(node.left, result);
    postorder(node.right, result);
    result.push(node.data[2]);
    return result;
}

function solution(nodeinfo) {
    let answer = [];
    nodeinfo = nodeinfo.map((v, i) => [...v, i + 1]);
    nodeinfo = nodeinfo.sort((a, b) => b[1] - a[1]);

    let root = null;
    for (let i = 0; i < nodeinfo.length; i++) {
        root = insert(root, nodeinfo[i]);
    }

    const preorderResult = preorder(root);
    const postorderResult = postorder(root);

    answer.push(preorderResult);
    answer.push(postorderResult);

    return answer;
}
