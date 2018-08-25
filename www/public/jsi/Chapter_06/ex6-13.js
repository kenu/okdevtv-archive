function subClass(obj) {
	var parent = this === window ? Function : this; // Node.js�� ��쿡�� global�� ����Ѵ�.
	var F = function() {};

	var child = function() {
		var _parent = child.parent;
		
		if (_parent && _parent !== Function) {
		     _parent.apply(this, arguments);
		}
		
		if (child.prototype._init) {
			child.prototype._init.apply(this, arguments);
		}
	};

	F.prototype = parent.prototype;
	child.prototype = new F();
	child.prototype.constructor = child;
	child.parent = parent;
	child.subClass = arguments.callee;

	for (var i in obj) {
		if (obj.hasOwnProperty(i)) {
			child.prototype[i] = obj[i];
		}
	}

	return child;
}

