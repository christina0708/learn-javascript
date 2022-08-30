console.log(0);
console.log(1);
console.log(2);

var names = [
    "christina",
    "vanlal",
    "hriatpuii",
    "bob"
];

console.log("fori");
for (var i=0; i<names.length; i++) {
    console.log(names[i])
}

console.log("");
console.log("forof");

for (const name of names) {
    console.log(name);
}
console.log("")
console.log("forEach")
names.forEach(function(name) {
    console.log(name)
});