let person = {
  firstName: "axel",
  lastName: "revana",
  age: 20,
};

let isApproved;

function checkAge(age) {
  if (age > 20) return (isApproved = true);
}

checkAge(person.age);

if (isApproved) {
  document.write("Is approved");
} else {
  document.write("Is not approved");
}
