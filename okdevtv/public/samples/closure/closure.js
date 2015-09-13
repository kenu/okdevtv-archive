var Proto = function() {};
Proto.prototype.count = 0;
Proto.prototype.log = function() {
    console.log(++this.count);
}
Proto.log2 = function() {
    console.log('h:' + this.count);
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
