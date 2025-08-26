/* Opgave 1*/
console.group("opgave 1");
const liste = {
  items: ["test1", "test2", "test3", "test4", "test5"]
}
liste.items.push('test6')
console.log(liste);



console.groupEnd();



/*opgave 2*/
console.group("opgave 2");
liste.items.splice(1, 1)
console.log(liste);



console.groupEnd();


/*opgave 3*/
console.group("opgave 3");
liste.items = liste.items.map(item =>
  item === "test3" ? "changed" : item
);
console.log(liste.items);

console.groupEnd();




