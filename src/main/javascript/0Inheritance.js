function inherit(obj) {
    function F() {}
    for (var s in obj) {
        if (obj.hasOwnProperty(s)) {
            F[s] = obj[s];
        }
    }
    F.prototype = new obj(null);
	return F;
}