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
   assertEquals(2,myCar.tractionWheels);
};

CarTest.prototype.testHasStatic = function() {
	assertTrue("dany" in Car);
	assertUndefined(new Car().dany);
};

CarTest.prototype.testInheritance = function() {
    assertTrue("dany" in QuatreQuatre);
    var myCar = new QuatreQuatre();
    assertTrue("wheels" in myCar);
    assertTrue("tractionWheels" in myCar);
    assertEquals(4,myCar.tractionWheels);
};