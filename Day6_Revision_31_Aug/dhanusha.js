// i can able to type
const detail = { name: "dhanusha", age: "19", native: "Dharmapuri" };
detail.collage = "SRM";
detail.age = "25";
detail["age"] = 28;
delete detail.native;
Reflect.deleteProperty(detail, "native");

const birds = ["Dove", "Hen", "parrot"];
birds.splice(1, 0, "kuruvi");
console.log(birds);
