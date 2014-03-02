var Queue = function(){

  this._storage = {};
  this._size = 0;

};

  Queue.prototype.enqueue = function(value){
    var storage = this._storage;
    if (this._size > 0) {
      _.each(storage, function(item, key){
        key++;
        storage[key] = item;
      });
    }
    this._storage[0] = value;
    this._size++;
  };

  Queue.prototype.dequeue = function(){
    if (this._size > 0) {
      var value = this._storage[this._size - 1];
      delete(this._storage[this._size - 1]);
      this._size--;
      return value;
    }
  };

  Queue.prototype.size = function(){
    return this._size;
  };

var queue = new Queue;
