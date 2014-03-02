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
      var oldTail = list.tail;
      oldTail.next = node;
      node.previous = oldTail;
      list.tail = node;
    }
  };

  list.addToHead = function(value){
    var node = makeNode(value);
    if(list.head === null && list.tail === null){
      list.head = node;
      list.tail = node;
    }else{
      var oldHead = list.head;
      node.next = oldHead;
      oldHead.previous = node;
      list.head = node;
    }
  };

  list.removeHead = function(){
    var oldHead = list.head;
    if(list.head.next !== null){
      list.head = oldHead.next;
      list.head.previous = null;
    }else{
      list.head = null;
      list.tail = null;
    }
    return oldHead.value;
  };

  list.removeTail = function(){
    var result = list.tail.value;
    if(list.tail.previous !== null){
      list.tail = list.tail.previous;
      list.tail.next = null;
    }else{
      list.tail = null;
      list.head = null;
    }
    return result;
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
