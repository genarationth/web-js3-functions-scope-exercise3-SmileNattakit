// ### Exercise #3.2

// #### Part 1

// Ed would like a way to input 3 names of his friends.
// The output should be a console greeting to his friends saying:
// `Welcome {name1}, {name2}, {name3}.`

const greeting = (name1, name2, name3) => {
  console.log(`Welcome ${name1}, ${name2}, ${name3}.`);
};
greeting("Ed", "Jen", "Jen");

// #### Part 2

// Ed would like to create a function that takes in a birth year and returns the age.

// i.e. 1990 returns 30

const calAge = (birthYear) => {
  const currentYear = new Date().getFullYear();
  const yourAge = currentYear - birthYear;
  console.log(`Your age is ${yourAge}`);
};
calAge(1990);

// #### Part 3

// Ed would like to create a function that prints out,
// `Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.`

const greetingAge = (name1, age1, name2, age2, name3, age3) => {
  console.log(
    `Welcome ${name1}, you are ${age1}. Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}.`
  );
};
greetingAge("Ed", 30, "Jen", 29, "Jen", 29);
