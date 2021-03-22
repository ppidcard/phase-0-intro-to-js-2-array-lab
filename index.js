// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
    return cats.push(name);

 }
 
 function destructivelyPrependCat(name){
    return cats.unshift(name);
 }
 
 function destructivelyRemoveLastCat(){
    return cats.pop();
 }
 
 function destructivelyRemoveFirstCat(){
   return cats.shift();
 }
 
 function appendCat(name){
     let newList = [...cats,name];
     return newList;
 }
 
 function prependCat(name){
    let newList2=[name, ...cats];
    return newList2;
 }
 
 function removeLastCat(){
     let cats_minus= cats.slice(0,cats.length-1);
     return cats_minus;
 }
 
 function removeFirstCat(){
   let cats_plus= cats.slice(1);
   return cats_plus;
 }
