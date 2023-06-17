function calcVolume() {
  //  var sets = document.querySelector(".sets-input").value;
  //  var reps = document.querySelector(".reps-input").value;
  //  var weight = document.querySelector(".weight-input").value;
  //
  //  var result = sets * reps * weight;
  //  var volume = (document.querySelector(".volume-result-all").value = result);
  let table = document.getElementById("tableID");
  let r = 0; //start counting rows in table
  while ((row = table.rows[r++ + 1])) {
    var c = 0; //start counting columns in row
    while ((cell = row.cells[c++ + 1])) {
      let sets = document.querySelector(".sets-input").value;
      let reps = document.querySelector(".reps-input").value;
      let weight = document.querySelector(".weight-input").value;
      let result = sets * reps * weight;
      let volume = (document.querySelector(".volume-result-all").value =
        result);
      //cell.innerHTML = "[R" + r + "C" + c + "]"; // do sth with cell
      //let result = cell[1].value * cell[2].value * cell[3].value;
      //var volume = (document.querySelector(".volume-result-all").value = result);
    }
  }
}

//var sets = document.querySelectorAll(".sets-input");
//var reps = document.querySelectorAll(".reps-input");
//var weight = document.querySelectorAll(".weight-input");
//var volume_results_all = document.querySelectorAll(".volume-result-all");
//var volume = 0;
//volume = sets * reps * weight;
//volume_results_all = volume;
//
////checks
//const isObject = function (val) {
//  if (val === null) {
//    return false;
//  }
//  return typeof val === "object";
//};
////Loop through object values
//const objProps = function (obj) {
//  for (let val in obj) {
//    if (isObject(obj[val])) {
//      objProps(obj[val]);
//    } else {
//      console.log(val, obj[val]);
//    }
//  }
//};
//objProps(exercises);

/* LOOP THRO OBJECT PROPERTIES
//const objProps = function (obj) {
//  for (let val in obj) {
//    objProps(obj[val]);
//    console.log(val, obj[val]);
//  } 
//};
//objProps(exercises);
*/
