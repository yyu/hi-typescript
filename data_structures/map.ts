console.log("START");

var m = new Map<number, number>();

console.log("3 in m: ", 3 in m);

m.set(3, 14);
console.log("3 in m: ", 3 in m);
console.log("m.has(3): ", m.has(3));
console.log(3, " => ", m.get(3));

console.log("THE END");
