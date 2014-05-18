// var makeQueue = function(){
//   var instance = {};

//   // Use an object with numeric keys to store values
//   instance._storage = {};
//   instance._size = 0;

//   _.extend(instance, queueMethods);
//   // Implement the methods below



//   return instance;
// };


// var queueMethods = {
//   "enqueue" : function(value){
//     var storage = this._storage;
//     if (this._size > 0) {
//       _.each(storage, function(item, key){
//         key++;
//         storage[key] = item;
//       });
//     }
//     this._storage[0] = value;
//     this._size++;
//   },

//   "dequeue" : function(){
//     if (this._size > 0) {
//       var value = this._storage[this._size - 1];
//       delete(this._storage[this._size - 1]);
//       this._size--;
//       return value;
//     }
//   },

//   "size" : function(){
//     return this._size;
//   }
// };


var makeQueue = function(){
  
  var instance = {};
  // Use an object with numeric keys to store values
  instance._storage = {};
//  instance._size = 0;
  instance._start = -1;
  instance._end = -1;

  _.extend(instance, queueMethods);
  return instance;
}
  // Implement the methods below

var queueMethods = {
  "enqueue" : function(value){
    this._end++;
    this._storage[this._end] = value;
  },

  "dequeue" : function(){
    this.size() && this._start++;
    var result = this._storage[this._start];
    delete this._storage[this._start];
    return result;
  },

  "size" : function(){
    return this._end - this._start;
  }
};
