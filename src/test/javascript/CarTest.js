CarTest = TestCase("CarTest");

CarTest.prototype.testInstance = function() {
   var myCar = new Car();
    assertInstanceOf(Car,myCar);
    assertInstanceOf(Object,myCar);
};

CarTest.prototype.testHasProperty = function() {
   var myCar = new Car();
   assertTrue("wheels" in myCar);
   assertTrue(myCar.hasOwnProperty("wheels"));
};

CarTest.prototype.testHasStatic = function() {
    assertTrue("dany" in Car);
    assertUndefined(new Car().dany);
};
