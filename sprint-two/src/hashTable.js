var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._filled = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  if(!Array.isArray(this._storage[i])){
    this._storage[i] = [];
  }
  this._storage[i].push([k,v]);
  this._filled++;
  if(this._filled > this._limit * 0.75){
    this._limit = this._limit * 2;
    this.resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var found = null;
  if(this._storage[i] !== undefined) {
    for(var j = 0; j < this._storage[i].length; j++){
      if(this._storage[i][j][0] === k){
        found = this._storage[i][j][1];
      }
    }
  }
  return found;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage[i] !== undefined) {
    for(var j = 0; j < this._storage[i].length; j++){
      if(this._storage[i][j][0] === k){
      // this._storage[i][j][1] = null;
        this._storage[i].slice(j, 1);
      }
    }
  }
  this._filled--;
  if(this._filled < this._limit * 0.25){
    this._limit = this._limit * 1/2;
    this.resize(this._limit * 1/2);
  }
};

// HashTable.prototype.resize = function(newLimit){
//   if(this._limit * 0.75 < this._filled){
//     var oldStorage = this._storage;
//     this._storage = makeLimitedArray(newLimit);
//     this._limit = newLimit;
//     var storage = this._storage;
//     oldStorage.each(function(bucket){
//       for(var i =0; i < bucket.length ; i++){
//         storage.insert(bucket[i]);
//       }
//     });
//   }
//   else if(this._limit * 0.25 > this._filled)
//   {

//   }
// }

HashTable.prototype.resize = function(newLimit){
    var storage = this._storage;
    this._storage = makeLimitedArray(newLimit);
    storage.each(function(bucket){
      for(var i =0; i < bucket.length ; i++){
        storage.insert(bucket[i]);
      }
    });
};
