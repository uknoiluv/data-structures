var Stack = function(){

  this._storage = {};
  this._size = 0;

};

  Stack.prototype.push = function(value){
    this._storage[this._size++] = value;
  };

  Stack.prototype.pop = function(){
    if (this._size !== 0) {
      var item = this._storage[this._size - 1];
      delete(this._storage[this._size - 1]);
      this._size--;
      return item;
    }
  };

  Stack.prototype.size = function(){
    return this._size;
  };

var stack = new Stack();
