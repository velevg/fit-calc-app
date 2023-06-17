/*
https://www.freecodecamp.org/news/how-to-iterate-over-objects-in-javascript/
https://www.youtube.com/watch?v=-is1De6H1SI
*/
// === BENCHPRESS
const benchpress = {
  chest: 1,
  shoulders: 0.5,
  triceps: 0.5,
};
var benchpress_option = document.querySelectorAll(".benchpress_option");
benchpress_option = benchpress;
// === SHOULDERPRESS
const shoulderpress = {
  shoulders: 1,
  triceps: 0.5,
};
var shoulderpress_option = document.querySelectorAll(".shoulderpress_option");
shoulderpress_option = shoulderpress;
// ===
const exercises = [benchpress, shoulderpress];
var exercises_select = document.querySelectorAll(".exercises_select");
var exercises_options = [benchpress_option, shoulderpress_option];
//some loops
/*
for (let i = 0; i <= exercises.length; i++) {
  console.log(exercises[i]);
}
exercises.forEach((val) => console.log(val));
*/