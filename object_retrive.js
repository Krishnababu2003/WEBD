const person = [
    { firstname: "krishna", lastname: "sakalabhakthula", gender: "male", age:23 },
    { firstname: "sudheer", lastname: "sakalabhakthula", gender: "male", age:22 },
    { firstname: "pavitra", lastname: "varanasi", gender: "female", age:20 },
    { firstname: "thanuja", lastname: "varanasi", gender: "female", age:22 }
];
for(let i=0;i<person.length;i++) {
    if(person[i].gender=="male") {
        console.log(person[i].firstname);
    }
}