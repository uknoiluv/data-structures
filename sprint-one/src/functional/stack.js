var makeStack = function(){
  var instance = {};

  var storage = {};
  var size = 0;

  instance.push = function(value){
    storage[size++] = value;
  };

  instance.pop = function(){
    if (size !== 0) {
      var item = storage[size - 1];
      delete(storage[size - 1]);
      size--;
      return item;
    }
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
