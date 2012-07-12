myapp = {};

myapp.Greeter = function() { };

myapp.Greeter.prototype.greet = function(name) {
  if (name === "foo") {
      name = name + "bar qix";
  }
  return "Hello " + name + "!";
};