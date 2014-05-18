// var makeQueue = function(){
//   var instance = {};

//   // Use an object with numeric keys to store values
//   var storage = {};
//   var size = 0;


//   // Implement the methods below

//   instance.enqueue = function(value){
//     if (size > 0) {
//       _.each(storage, function(item, key){
//         key++;
//         storage[key] = item;
//       });
//     }
//     storage[0] = value;
//     size++;
//   };

//   instance.dequeue = function(){
//     if (size > 0) {
//       var value = storage[size - 1];
//       delete(storage[size - 1]);
//       size--;
//       return value;
//     }
//   };

//   instance.size = function(){
//     return size;
//   };

//   return instance;
// };


var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var start = -1;
  var end = -1;

  // Implement the methods below

  instance.enqueue = function(value){
    end++;
    storage[end] = value;
  };

  instance.dequeue = function(){
    console.log(instance.size());
    instance.size() && start++;
    console.log(start);
    var result = storage[start];
    delete storage[start];
    return result;
  };

  instance.size = function(){
    return end - start;
  };

  return instance;
};