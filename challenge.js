// ### Challenge Yourself

// A teacher wants to create a rubric for grading. The rubric is from 0 - 11.

// #### Part 1

// A student passes if they have a score greater than or equal to 5.
// Create a function that returns a boolean true or false.

// #### Part 2

// A student has an excellent grade if they score higher than 8.
// Add on to your function to print out "Excellent" for scores greater than 8.

// #### Part 3

// A student has a perfect grade if their score is 11.
// Add on to your function to print out "Perfect" for a score of 11.

const grading = (yourScore) => {
  let result;
  let yourPerformance;
  if (yourScore < 5) {
    result = false;
    console.log(`ผลสอบของคุณคือ: ${result} "เสียใจด้วยคุณสอบไม่ผ่าน"`);
  } else if (yourScore >= 5) {
    result = true;
    if (yourScore >= 8) {
      yourPerformance = "Excellent";
    } else if (yourScore === 11) {
      yourPerformance = "Perfect";
    }
    console.log(`ผลสอบของคุณคือ: ${result}`);
    console.log(`You did it! ${yourPerformance}`);
  }
};

grading(12);
