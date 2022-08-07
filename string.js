let myname = 'Suma Akter';
// lowercase 
console.log (myname.toLowerCase());

// uppercase 
console.log(myname.toUpperCase())
console.log(myname.toLocaleLowerCase())

// search 
const herName = 'suma'
// const doesExit =myname.includes('Suma'); 
const  doesExit = myname.includes(herName);
// console.log(doesExit)
const doesExitOneLine = myname.toLowerCase().includes(herName.toLowerCase());
// console.log(doesExitOneLine)

// indexof 
console.log(myname.indexOf('Akter'));
if (myname.indexOf('suma') !=-1){
    // console.log('vaild')
}
else{
    console.log('not valid')
}

// startswith 
console.log(myname.startsWith('Suma'))
// endswith
console.log(myname.endsWith ('Akter'))