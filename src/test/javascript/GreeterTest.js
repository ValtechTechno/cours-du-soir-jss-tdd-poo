GreeterTest = TestCase("GreeterTest");

GreeterTest.prototype.testGreet = function() {
  var greeter = new myapp.Greeter();
  assertEquals("Hello World!", greeter.greet("World"));
};

GreeterTest.prototype.testGreetFoo = function() {
  var greeter = new myapp.Greeter();
  assertEquals("Hello foo!", greeter.greet("foo"));
};