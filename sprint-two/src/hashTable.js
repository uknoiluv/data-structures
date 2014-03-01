var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};


HashTable.prototype.insert = function(k, v){
  // var i = getIndexBelowMaxForKey(k, this._limit);
  var generateIndex = function(key, limit) {
    var keyCode = 0;
    _.each(key, function(letter){
      keyCode = keyCode + letter.charCodeAt();
    });
    keyCode = keyCode % limit;
  };
  var i = generateIndex(k, this._limit);
  if (!Array.isArray(this._storage[i])) {
    this._storage[i] = [];
  }
  this._storage[i].push([k, v]);
};

HashTable.prototype.retrieve = function(k){
  // var i = getIndexBelowMaxForKey(k, this._limit);
  var generateIndex = function(key, limit) {
    var keyCode = 0;
    _.each(key, function(letter){
      keyCode = keyCode + letter.charCodeAt();
    });
    keyCode = keyCode % limit;
  };
  var i = generateIndex(k, this._limit);
  var storage = this._storage;
  var item;
  _.each(storage[i], function(value){
    if(value[0] === k){
      item = value[1];
    }
  });
  return item;
};

HashTable.prototype.remove = function(k){
  var generateIndex = function(key, limit) {
    var keyCode = 0;
    _.each(key, function(letter){
      keyCode = keyCode + letter.charCodeAt();
    });
    keyCode = keyCode % limit;
  };
  var i = generateIndex(k, this._limit);
  var storage = this._storage;
  _.each(storage[i], function(value){
    if(value[0] === k){
      delete(value);
      console.log(value);
    }
  });
};


