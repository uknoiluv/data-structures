var makeQueue = function(){
  var instance = Object.create(queueMethods);

  // Use an object with numeric keys to store values
  instance._storage = {};
  instance._size = 0;

  // Implement the methods below



  return instance;
};


var queueMethods = {
  "enqueue" : function(value){
    var storage = this._storage;
    if (this._size > 0) {
      _.each(storage, function(item, key){
        key++;
        storage[key] = item;
      });
    }
    this._storage[0] = value;
    this._size++;
  },

  "dequeue" : function(){
    if (this._size > 0) {
      var value = this._storage[this._size - 1];
      delete(this._storage[this._size - 1]);
      this._size--;
      return value;
    }
  },

  "size" : function(){
    return this._size;
  }
};
