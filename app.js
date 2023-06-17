//////////////////////////////////////////////////////////////////////////////////
// === POPUP
function popup() {
  var caloriePopup = document.querySelector("#caloriePopup");
  caloriePopup.classList.toggle("show");

  var volumePopup = document.querySelector("#volumePopup");
  volumePopup.classList.toggle("show");
}
// === POPUP END
//////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function (event) {
  // === CARD FLIP
  document.getElementById("flip-card-btn-turn-to-back").style.visibility =
    "visible";
  document.getElementById("flip-card-btn-turn-to-front").style.visibility =
    "visible";
  document.getElementById("flip-card-btn-turn-to-back").onclick = function () {
    document.getElementById("flip-card").classList.toggle("do-flip");
  };
  document.getElementById("flip-card-btn-turn-to-front").onclick = function () {
    document.getElementById("flip-card").classList.toggle("do-flip");
  };
  // === CARD FLIP END
  // === MODAL
  // Присвоява се на променливата modal div елемента с id myModal
  var modal = document.getElementById("myModal");
  // Присвоява се на променливата btn елемента с id myBtn
  var btn = document.getElementById("btnModal");
  // Присвоява се на променливата span първият span елемент
  var closemodal0 = document.getElementsByClassName("close")[0];
  // Когато се натисне бутона се отваря modal
  btn.addEventListener("click", function () {
    modal.className = "modal anim-opacity";
    modal.style.display = "block";
  });
  // Когато се кликне на <span> (x), се затваря modal
  closemodal0.addEventListener("click", function () {
    modal.style.display = "none";
  });
  // === MODAL END
  // === MODAL ALL RESULTS
  var modalResults = document.querySelector("#modalResults");
  var btnAllResults = document.querySelector("#btnAllResults");
  var closemodal1 = document.getElementsByClassName("close")[1];

  btnAllResults.addEventListener("click", function () {
    modalResults.className = "modal anim-opacity";
    modalResults.style.display = "block";
  });
  closemodal1.addEventListener("click", function () {
    modalResults.style.display = "none";
  });
  // === MODAL ALL RESULTS END
  //////////////////////////////////////////////////////////////////////////////////
  // === ADD ROW volume calc MUST LIMIT TO A CERTAIN NUMBER PLS
  var btnAddRow = document.querySelector(".btnAddRow");
  var addRow = document.querySelector("#addRow");
  var table = document.querySelector("table");

  btnAddRow.addEventListener("click", (e) => {
    var newTr = document.createElement("tr");
                           //change when class names for the iteration
    newTr.innerHTML = "<td><select name='' id='' class='input-table exercises_select'><option value='benchpress' class='benchpress_option'>bench press</option><option value='shoulderpress' class='shoulderpress_option'>shoulder press</option></select></td><td><input class='form-control input-table' type='text' ></td><td><input class='form-control input-table' type='text' ></td><td><input class='form-control input-table' type='text' ></td>";
    table.appendChild(newTr);
  });
  // === ADD ROW volume calc END
  //////////////////////////////////////////////////////////////////////////////////
});
