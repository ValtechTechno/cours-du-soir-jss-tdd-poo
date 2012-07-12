DomTest = TestCase("DomTest");

DomTest.prototype.setUp = function () {
    /*:DOC += <div id="foo"></div> */
};

DomTest.prototype.testHello = function () {
    var elementFoo = document.getElementById("foo");
    assertNotNull(document.getElementById('foo'));
    assertElementId("foo",elementFoo);

    var element = document.createElement("span");
    element.appendChild(document.createTextNode("hello world"));

    elementFoo.appendChild(element);
    assertEquals(1, elementFoo.children.length);
    assertEquals("hello world", elementFoo.children[0].innerText);
};