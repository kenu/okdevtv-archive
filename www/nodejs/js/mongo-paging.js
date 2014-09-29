// http://stackoverflow.com/questions/9703319/mongodb-ranged-pagination?lq=1
var current_id; // id of first record on current page.

// go to page current+N
db.collection.find({_id: {$gt: current_id}}).
              skip(N * page_size).
              limit(page_size).
              sort({_id: 1});

// go to page current-N
db.collection.find({_id: {$lt: current_id}}).
              skip((N-1)*page_size).
              limit(page_size).
              sort({_id: 1});