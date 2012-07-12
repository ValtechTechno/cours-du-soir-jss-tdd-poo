CarTestMock = TestCase("CarTestMock");

CarTestMock.prototype.testMock = function () {
    var leakingVar = {};
    var savedCopyStatic = copyStatic;
    var mockCopyStatic = function (f, s, o) {
        leakingVar[s] = !leakingVar[s] ? 1 : leakingVar[s] + 1;
        savedCopyStatic(f, s, o);
    };
    copyStatic = mockCopyStatic;

    var MonsterTruck = inherit(QuatreQuatre);
    MonsterTruck.bigWheels = true;

    assertTrue("bigWheels" in MonsterTruck);
    assertTrue("dany" in MonsterTruck);
    assertEquals(1, leakingVar["dany"]);
};