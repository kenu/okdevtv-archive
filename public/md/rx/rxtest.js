const { range } = require('rxjs');
const { map, filter } = require('rxjs/operators');

range(1, 200).pipe(
  filter(x => x % 2 === 1),
  map(x => x + x)
).subscribe(x => console.log(x));