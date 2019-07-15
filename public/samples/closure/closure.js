var Proto = function() {
    // This is intentional
};
Proto.prototype.count = 0;
Proto.prototype.log = function() {
    return ++this.count;
}
Proto.log2 = function() {
    return 'h:' + this.count;
}


var obja = new Proto();
var objb = new Proto();


obja.log();
obja.log();
obja.log();
obja.log();
obja.log();
obja.log();

objb.log();
objb.log();
objb.log();

obja.count;
objb.count;
