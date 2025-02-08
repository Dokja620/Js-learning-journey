let person = {
  firstName: "axel",
  lastName: "revana",
  age: 21,
};
let selectedColors = ["red", "blue", "green"];

document.write("combien d'item dans couleur ? : ", selectedColors.length);

let isApproved;

if (person.age > 20) {
  isApproved = true;
}

if (isApproved) {
  document.write("You are old enough to see this CORNNNNN!!!");
  if (selectedColors[0] === "red") {
    document.writeln("Good to know that you like ", selectedColors[0]);
  }
} else {
  document.write("Hold on you are wayyy tooo young");
}
