var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);
    if(list.head === null && list.tail === null){
      list.head = node;
      list.tail = node;
    }else{

      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function(){
    list.head = list.head.next;
  };

  list.contains = function(target, node){
    
    var checkNode = function(node){
      if(node.value === target){
        return true;
      }else if(node.next !== null){
        checkNode(node.next);
      }else{
        return false;
      }
    };
    return checkNode(list.head);
    

  };

  list.contains = function(target){
    var result = false;
    var checkNode = function(node){
      if(node.value === target){
        result = true;
      }
      if(node.next !== null){
        checkNode(node.next);
      }
    };
    checkNode(list.head);
    return result;
  };
  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};
