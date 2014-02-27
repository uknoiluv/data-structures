var makeStack = function(){


  var instance = Object.create(stackMethods);

  // Use an object with numeric keys to store values
  instance._storage = {};
  instance._size = 0; // Hint: set an initial value here


  // Implement the methods below

  return instance;
};

var stackMethods = {
  "push" : function(value){
    this._storage[this._size++] = value;
  },

  "pop" : function(){
    if (this._size !== 0) {
      var item = this._storage[this._size - 1];
      delete(this._storage[this._size - 1]);
      this._size--;
      return item;
    }
  },

  "size" : function(){
    return this._size;
  }
};
var stack = makeStack();
