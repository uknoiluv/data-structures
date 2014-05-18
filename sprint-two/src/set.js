var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage[item] = true;
};

setPrototype.contains = function(item){
  var keys = Object.keys(this._storage);
  var found = false;
  _.each(keys, function(key) {
    if(key === item){
      found = true;
    }
  });
  return found;
};

setPrototype.remove = function(item){
  delete(this._storage[item]);
};
