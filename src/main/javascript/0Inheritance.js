function copyStatic(f, s, obj) {
    f[s] = obj[s];
}
function inherit(obj) {
    function F() {}
    for (var s in obj) {
        if (obj.hasOwnProperty(s)) {
            copyStatic(F, s, obj);
        }
    }
    F.prototype = new obj(null);
	return F;
}