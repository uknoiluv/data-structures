var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var newTree = makeTree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target){
  var foundTarget = false;
 // console.log(this.value);
//  console.log(children);
  var checkTree = function(tree){
    var children = tree.children;
    var value = tree.value;;
    if (value === target) {
     // console.log(this.value);
      foundTarget = true;
    }
    if (children.length !== 0) {
      console.log(children.length);
      _.each(children, function(child){
        checkTree(child);
      });
    }
    return foundTarget;
  };
  return checkTree(this);
};

