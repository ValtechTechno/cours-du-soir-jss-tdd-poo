function inherit(obj) {
    function F() {}
    for (var s in obj) {
        F[s] = obj[s];
    }
    F.prototype = new obj(null);
	return F;
}