let person = [
  {
    firstName: "axel",
    lastName: "revana",
    gender: "male",
    age: 20,
  },
  {
    firstName: "Diary",
    lastName: "revana",
    gender: "female",
    age: 21,
  },
  {
    firstName: "Mike",
    lastName: "revana",
    gender: "female",
    age: 25,
  },
];

let isApproved;

function checkAge(age, fullName) {
  if (age < 18) isApproved = false;

  if (!isApproved) {
    document.write(fullName + " You are old enough");
    document.write(age + " is more than enough so CORNNNN");
  } else {
    document.write("Access denied, Nice try tho" + fullName);
  }
}

function getFullName(firstName, lastName) {
  let fullName = firstName + " " + lastName;

  return fullName;
}

checkAge(person.age, getFullName(person.firstName, person.lastName));
