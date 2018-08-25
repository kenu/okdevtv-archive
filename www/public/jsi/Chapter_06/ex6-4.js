function create_object(o) {
	function F() {}
	F.prototype = o;
	return new F();
}
