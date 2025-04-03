/*
Ref: https://www.tpointtech.com/inorder-traversal
https://www.tpointtech.com/postorder-traversal
https://www.tpointtech.com/preorder-traversal
*/

class Node {
    constructor(value) {
        this.val = value;
        this.right = null;
        this.left = null;
    }
}

class BST {
    constructor(node) {
        this.root = node;
    }

    insertNode(val) {
        let newNode = new Node(val);

        let temp = this.root;

        while(temp) {
            if(newNode.val > temp.val) {
                if(!temp.right) {
                    temp.right = newNode;
                    temp = null;
                } else {
                    temp = temp.right;
                }
            } else if(newNode.val < temp.val) {
                if(!temp.left) {
                    temp.left = newNode;
                    temp = null;
                } else {
                    temp = temp.left;
                }
            } else {
                temp = null;
            }
        } 
    }

    levelOrderTraversal() {
        if(!this.root) {
            return [];
        }

        const res = [];
        const q = [];

        q.push(this.root);

        while(q.length > 0) {
            const node = q.shift();

            if(node.left) {
                q.push(node.left);
            }

            if(node.right) {
                q.push(node.right);
            }

            res.push(node.val);
        }

        return res;
    }

    preOrderTraversal() {
        const res = [];

        function traverse(node) {
            res.push(node.val);
            if(node.left) {
                traverse(node.left);
            }
            if(node.right) {
                traverse(node.right);
            }
        }

        traverse(this.root);

        return res;
    }

    postOrderTraversal() {
        const res = [];

        function traverse(node) {
            if(node.left) {
                traverse(node.left);
            }
            if(node.right) {
                traverse(node.right);
            }
            res.push(node.val);
        }

        traverse(this.root);

        return res;
    }

    inOrderTraversal() {
        const res = [];

        function traverse(node) {
            if(node.left) traverse(node.left);
            res.push(node.val);
            if(node.right) traverse(node.right); 
        }

        traverse(this.root);

        return res;
    }

    find(val) {
        let found = false;

        let current = this.root;
        while(current && !found) {
            if(val == current.val) {
                found = true;
            } else if(val > current.val) {
                current = current.right;
            } else {
                current = current.left;
            }
        }

        return found;
    }

    deleteReplaceWtihLargestOnLeft(val) {

        function replace(parent, target, node) {
            if(parent.left == target) {
                parent.left = node;
            } else {
                parent.right = node;
            }
        }
        //find the value
        var parent = this.root;
        var rightParent;
        var target = this.root;

        while(target.val !== val) {
            parent = target;
            if(val > target.val) {
                target = target.right;
            } else {
                target = target.left;
            }
        }

        if(target != this.root) {
            if(!target.left && !target.right) {
                replace(parent, target, null);
            } else if(target.left && !target.right) {
                replace(parent, target, target.left);
            } else if(!target.left && target.right) {
                replace(parent, target, target.right);
            } else {
                //go right
                //no left -> replace target with right, right.left = target.left
                //if left, traverse and find the smallest
                        //may have right, if right, right parent.left = right else null

                let right = target.right;

                if(!right.left) {
                    replace(parent, target, right);
                    right.left = target.left;
                } else {
                    let rightParent;
                    while(right.left) {
                        rightParent = right;
                        right = right.left;
                    }
                    if(parent.left == target) {
                        parent.left.val = right.val;
                    } else {
                        parent.right.val = left.val;
                    }

                    if(!right.right) {
                        rightParent.left = null;
                        right.left = target.left;
                    } else {
                        rightParent.left = right.right;
                        right.left = target.left;
                    }
                }
            }
        }

        return target;
    }

    //https://leetcode.com/problems/delete-node-in-a-bst/
    //see william fiset video
    deleteWithRecursion(val) {
        function findLeftMost(root) {
            while(root.left) root = root.left;

            return root;
        }
        function deleteNode(root, val) {
            if(!root) {
                return root;
            }

            if(val > root.val) {
                root.right = deleteNode(root.right, val);
            } else if(val < root.val) {
                root.left = deleteNode(root.left, val);
            } else {
                if(!root.left && !root.right) {
                    return null;
                }

                if(!root.left && root.right) {
                    return root.right;
                }

                if(root.left && !root.right) {
                    return root.left;
                }

                let leftMost = findLeftMost(root.right);
                root.val = leftMost.val;
                root.right = deleteNode(root.right, leftMost.val);
            }

            //return root;
        }

        return deleteNode(this.root, val);
    }
}

function main() {
    const node = new Node(40);
    const bst = new BST(node);

    bst.insertNode(30);
    bst.insertNode(50);
    bst.insertNode(25);
    bst.insertNode(35);
    bst.insertNode(15);
    bst.insertNode(28);
    bst.insertNode(45);
    bst.insertNode(60);
    bst.insertNode(55);
    bst.insertNode(70);

    // console.log(bst.levelOrderTraversal());
    // console.log(bst.preOrderTraversal());
    // console.log(bst.postOrderTraversal());
    // console.log(bst.inOrderTraversal());

    // console.log(bst.find(30));
    // console.log(bst.find(37));
    // console.log(bst.find(61));
    // console.log(bst.find(55));
    // console.log(bst.find(40));

    bst.deleteReplaceWtihLargestOnLeft(50);
    console.log(bst.levelOrderTraversal());
}

main();