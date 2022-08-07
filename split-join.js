const song = 'tmi bondhu kala pakhi ami jeno ki. boshonto kale tomay bolte pari ni'
// split 
console.log(song.split(' ')) /*  word split */
console.log(song.split('.')) /* sentence split */
console.log(song.split('')) /*  letter split */

// slice 
console.log(song.slice(4,10 ))
console.log(song.slice(4))

// sunstring \
console.log(song.substring(4,10))
console.log(song.substring(10))

//  at 
var letter  = 6;
console.log(song.at(letter))

// lastIndexOf 
var lastIndex = 'tmi';
console.log(song.lastIndexOf(lastIndex))
var lastIndex = 'kala';
console.log(song.lastIndexOf(lastIndex))

// trim 
var greeting = "  hello world!  ";
console.log(greeting); 
console.log(greeting.trim())
console.log(greeting.trimEnd())

// concat 
const line =  ['tmi bondhu kala pakhi ami jeno ki',
                ' boshonto kale tomay bolte pari ni',
               'kala kala sada sada rongh jomeche sada sada']
console.log(line.join('. '))
