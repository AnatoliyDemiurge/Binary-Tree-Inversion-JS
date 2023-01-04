var Tree = class {
    constructor(data, left=null, right=null) {
        this.data = data
        this.left = left
        this.right = right
    }
  };

function preorder(root){
    if (!root) {
      return 
    }
    
    console.log(root.data)
    preorder(root.left);
    preorder(root.right);
 }

function swap(root){
    if (!root) {
       return
    }

    temp = root.left;
    root.left = root.right;
    root.right = temp;
}

function invertBinaryTree(root){
    if (!root){
        return 
    }

    swap(root);

    invertBinaryTree(root.left);

    invertBinaryTree(root.right);
}

root = new Tree(1);
root.left = new Tree(2);
root.right = new Tree(3);
root.left.left = new Tree(4);
root.left.right = new Tree(5);
root.right.left = new Tree(6);
root.right.right = new Tree(7);
invertBinaryTree(root);
preorder(root);