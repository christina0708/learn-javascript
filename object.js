var person = {
firstname : "christina",
age : 24,
isFemale : true,
balance : 98.96,
dob : new Date (2000, 6, 7).toJSON(),
address : {
    veng : "kapernaum",
    houseNo : 123,
}
}
console.log(person.firstname)
console.log(person.address.veng)
console.log(Object.values(person));
console.log(JSON.stringify(person));
