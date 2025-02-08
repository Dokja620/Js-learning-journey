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
    age: 15,
  },
];

function checkAge(person) {
  let isApproved;
  let fullName = getFullName(person.firstName, person.lastName);
  let age = person.age;

  if (age < 18) {
    isApproved = false;
  } else {
    isApproved = true;
  }

  if (isApproved) {
    console.log(fullName + " You are old enough");
  } else {
    console.log("Access denied, Nice try tho " + fullName);
  }
}

function getFullName(firstName, lastName) {
  let fullName = firstName + " " + lastName;

  return fullName;
}

person.forEach(checkAge);
