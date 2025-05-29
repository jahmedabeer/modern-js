import { pi, e } from './external.js' // named import
import * as person from './person.js'
import personDefault, { address } from './person.js' // default import
import { myFunction } from './afunction.js' // named import

// console.log(pi, e);
// console.log(person)
console.log(address);
myFunction();