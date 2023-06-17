const calculateCalories = () => {
  //get user input values
  const weight = parseFloat(document.querySelector("#weight").value);
  const height = parseFloat(document.querySelector("#height").value);
  const age = parseFloat(document.querySelector("#age").value);
  const gender = document.querySelector("#gender").value;

  //calc the BMR
  let bmr = 10 * weight + 6.25 * height - 5 * age;
  //acc for the gender
  bmr += gender === "male" ? 5: -161;
  console.log(bmr);
  //set the calories based on activity lvl
  let calories;
  const activityLevel = document.querySelector("#activity-lvl").value;
  switch (activityLevel) {
    case "sedentary":
      calories = bmr * 1.2;
      break;
    case "lightly active":
      calories = bmr * 1.375;
      break;
    case "moderately":
      calories = bmr * 1.55;
      break;
    case "very active":
      calories = bmr * 1.725;
      break;
  }

  document.querySelector("#calories-result").innerHTML =
    Math.round(calories) + " calories";
  document.querySelector("#calories-result-all").innerHTML =
    Math.round(calories) + " calories";
};
