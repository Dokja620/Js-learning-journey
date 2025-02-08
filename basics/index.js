let person = [
  {
    firstName: "axel",
    lastName: "revana",
    age: 20,
  },
  {
    firstName: "Diary",
    lastName: "revana",
    age: 21,
  },
];

let isApproved = false;

function checkAge(age) {
  if (age > 20) isApproved = true;
  console.log("value is " + isApproved);
  if (!isApproved) {
    document.write("Is not approved");
  } else {
    document.write("Is approved");
  }
}

checkAge(person[0].age);
checkAge(person[1].age);
