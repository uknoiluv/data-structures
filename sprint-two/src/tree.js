var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var newTree = makeTree(value);
  newTree.parent = this;
  this.children.push(newTree);
};

treeMethods.contains = function(target){
  var foundTarget = false;
  var checkTree = function(tree){
    var children = tree.children;
    var value = tree.value;
    if (value === target) {
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

treeMethods.removeParent = function(){
  var that = this;
  for(var i = 0; i < this.parent.children.length; i++){
    if(this.parent.children[i] === this){
      this.parent.children.splice(i, 1);
    }
  }
  that.parent = null;
  return that;
};
