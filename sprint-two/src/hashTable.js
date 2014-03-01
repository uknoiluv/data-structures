var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  if(!Array.isArray(this._storage[i])){
    this._storage[i] = [];
  }
  this._storage[i].push([k,v]);

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var found = undefined;
  for(var j = 0; j < this._storage[i].length; j++){
    if(this._storage[i][j][0] === k){
      found = this._storage[i][j][1];
    }
  }
  return found;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for(var j = 0; j < this._storage[i].length; j++){
    if(this._storage[i][j][0] === k){
      this._storage[i][j][1] = null;
    }
  }
};

