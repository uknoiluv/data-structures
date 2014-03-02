var makeQueue = function(){
  var instance = {};

  var storage = {};
  var size = 0;
  var start = -1;
  var end = -1;

  instance.enqueue = function(value){
    end++;
    storage[end] = value;
  };

  instance.dequeue = function(){
    console.log(instance.size());
    instance.size() && start++;
    var result = storage[start];
    delete storage[start];
    return result;
  };

  instance.size = function(){
    return end - start;
  };

  return instance;
};
