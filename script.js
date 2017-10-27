class Node {
  constructor(data){
    this.data=data;
    this.right=null;
    this.left=null;
  }
}

class BST {
  constructor(){
    this.root=null;
  }
  
  // insert method
  insert(data){
    var newNode = new Node(data); // create a node and initialize with data passed for inserting.
    
    if (this.root === null){
      this.root = newNode;
    }
    else
      this.insertNode(this.root,newNode);
  }
  
  insertNode(node,newNode){
    if(newNode.data < node.data){
      if (node.left === null){
        node.left = newNode;
      }
      else
        {
          this.insertNode(node.left,newNode);
        }
    }
    
    else if(newNode.data > node.data){
      if (node.right === null){
        node.right = newNode;
      }
      else
        {
          this.insertNode(node.right,newNode);
        }
    }
  }
  
  // get root node
  getRootNode(){
    return this.root;
  }
  
  //find min valued node
  findMinNode(node){
    if (node.left === null){
      return node;}
     else
       {
         return this.findMinNode(node.left);
       }
    }
  }


var myTree = new BST();
myTree.insert(100);
myTree.insert(52);
myTree.insert(80);
myTree.insert(23);

//console.log(myTree.getRootNode());
console.log(myTree.findMinNode(myTree.getRootNode()));








