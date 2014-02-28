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
      list.tail = node;

      // list.head.next = node;
      // list.tail = node;

    }

  };

  list.removeHead = function(){
    var oldHead = list.head;
    list.head = oldHead.next;
  };

  list.contains = function(target, node){
    console.log(target, node);
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
//    if(list.head === null){
//
    /*
      list.head = null;
      list.head = list.tail || null;
      list.node.next = list.tail;
      list.tail = makeNode(value);
    */
/*
      }else{
      list.tail.next = value;
      list.tail = makeNode(value);
    }
*/
/*
    list.head = list.head.next;
    console.log(list);
*/
