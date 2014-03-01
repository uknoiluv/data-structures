var makeBinarySearchTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {
  "insert": function(value){
    var newTree = makeBinarySearchTree(value);
    var tryInsert = function(target){
      if(value < target.value){
        if(target.left === null){
          target.left = newTree;
        }
        else {
          tryInsert(target.left);
        }
      }
      else if(value > target.value){
        if(target.right === null){
          target.right = newTree;
        }
        else{
          tryInsert(target.right);
        }
      }
    };
    tryInsert(this);
  },

  "contains": function(value){
    var result = false;
    var findValue = function(target){
      if(value < target.value){
        if(target.left === null){
        }
        else {
          findValue(target.left);
        }
      }
      else if(value > target.value){
        if(target.right === null){
        }
        else{
          findValue(target.right);
        }
      }
      else if (value === target.value) {
        result = true;
      }
    };
    findValue(this);
    return result;
  },

  "depthFirstLog": function(iterator){
    traverseTree = function(node){
      iterator(node);
      if(node.left !== null){
        traverseTree(node.left);
      }
      if(node.right !== null){
        traverseTree(node.right);
      }
    };
    traverseTree(this);
  }
};
