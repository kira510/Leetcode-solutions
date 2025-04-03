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

    isBalanced() {
        function isBalanced(root) {
            if(root.val > root.right.val || root.val < root.left.val) return false;

            return isBalanced(root.left) && isBalanced(root.right); 
        }

        return isBalanced(this.root);
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