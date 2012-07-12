CarTest = TestCase("CarTest");

CarTest.prototype.testInstance = function() {
   var myCar = new Car();
    assertInstanceOf(Car,myCar);
    assertInstanceOf(Object,myCar);
};


